import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";
import { CREDENTIALS_API } from "../../utils/config";

export const load: PageServerLoad = async ({ cookies, fetch }) => {
    try {
        const JWT_TOKEN = cookies.get("token");
        console.log(JWT_TOKEN);
        
        if (cookies === undefined) throw new Error("token is not exists");

        const API_USERS = await fetch(
            `${CREDENTIALS_API.development}users/show-users`,
            {
                headers: {
                    Authorization: `Bearer ${JWT_TOKEN}`,
                },
                credentials: "include"                
            }
        );

        // bearer token

        const API = await fetch(
            `
            ${CREDENTIALS_API.development}posts/show-posts`,
            {
                headers: {
                    Authorization: `Bearer ${JWT_TOKEN}`,
                },
                credentials: "include",
            }
        );

        if (!(API.ok && API_USERS.ok))
            throw new Error("error al conseguir los posts");

        const posts = await API.json();
        const users = await API_USERS.json();

        return {
            data: posts,
            users: users
        };
    } catch (error) {
        console.error(error);

        return redirect(303, "/auth/login");
    }
};

import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";
import { CREDENTIALS_API } from "../../utils/config";
import { jwtDecode } from "jwt-decode";

export const load: PageServerLoad = async ({ fetch, cookies }) => {
    try {
        console.log("jskj");

        const token = cookies.get("token");
        const user: any = jwtDecode(token || "");
        const userId = user.id;

        console.log(userId);
        if (token === undefined) {
            return {
                error: "No tienes una sesion",
            };
        }

        const myBookmarks = await fetch(
            `${CREDENTIALS_API.development}bookmarks/show-my-bookmarks/${userId}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },

                credentials: "include",
            }
        );

        if (!myBookmarks.ok) {
            return { error: "Error al buscar tus bookmarks" };
        }

        const dataBookmarks = await myBookmarks.json()
        console.log(dataBookmarks);
        
        return {
            data: dataBookmarks
        }
    } catch (error) {
        console.log(error);
        throw redirect(401, "/auth/login/");
    }
};

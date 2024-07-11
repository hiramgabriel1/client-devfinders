import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";
import { CREDENTIALS_API } from "../utils/config";
import { jwtDecode } from "jwt-decode";

export const load: PageServerLoad = async ({ cookies, fetch }) => {
    try {
        const token = cookies.get("token");
        const decode: any = jwtDecode(token || "");
        const userId = decode.id;
        
        if (token === undefined) throw Error("User is not autenticated");

        const API = await fetch(
            `${CREDENTIALS_API.development}reports/show-my-reports/${userId}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                credentials: "include",
            }
        );

        if (!API.ok) throw new Error();

        const myReports = await API.json()
        console.log(myReports);
        
        return { data: myReports }
    } catch (error) {
        console.log(error);
        throw redirect(401, "/auth/login");
    }
};

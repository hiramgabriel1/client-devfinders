import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";
import { CREDENTIALS_API } from "../../utils/config";

export const load: PageServerLoad = async ({ fetch, cookies }) => {
    try {
        const tokenUser = cookies.get('token')
        const API = await fetch(`${CREDENTIALS_API.development}users/auth/user`, {
            headers: {
                Authorization: `Bearer ${tokenUser}`
            },
            credentials: "include"
        })

        if(!API.ok) throw redirect(303, '/auth/login/')
        let user = await API.json()            
        console.log(user);

        return {
            data: user
        }
    } catch (error) {
        console.error(error)
    }    
};
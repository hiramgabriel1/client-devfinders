import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch, cookies }) => {
    try {
        const token = cookies.get('token')

        if(token === undefined) throw new Error('No tienes acceso')

            
    } catch (error) {
        throw redirect(401, '/auth/login/')
    }
};
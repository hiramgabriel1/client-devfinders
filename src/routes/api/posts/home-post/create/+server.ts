import { redirect } from "@sveltejs/kit"
import { CREDENTIALS_API } from "../../../../utils/config"

export const POST = async ({ request }: any) => {
    console.log(await request);
    const data = await request.json()

    console.log(data);
    
    try {
        const token = ''
        // const API = await fetch(`${CREDENTIALS_API.development}posts/`, {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json",
        //         Authorization: `Bearer ${token}`
        //     },
        //     body: ''
        // })
    } catch (error) {
        throw redirect(303, '/auth/login')
    }
}
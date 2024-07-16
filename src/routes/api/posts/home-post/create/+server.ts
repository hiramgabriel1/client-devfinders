import { redirect } from "@sveltejs/kit"
import { CREDENTIALS_API } from "../../../../utils/config"

export const POST = async ({ request }: any) => {
    let data = await request()
    console.log(request);
    
    try {
        const token = ''
        const API = await fetch(`${CREDENTIALS_API.development}posts/`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        
    } catch (error) {
        throw redirect(400, '/auth/login')
    }
}
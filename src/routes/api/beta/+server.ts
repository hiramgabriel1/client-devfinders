import { redirect } from "@sveltejs/kit";
import { CREDENTIALS_API } from "../../utils/config";

export const POST = async ({ fetch }: any) => {
    const data = await fetch.json()
    try {
        const api = await fetch(`${CREDENTIALS_API.production}beta/register-user/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        console.log(api);
        console.log(await api.json);
        
    } catch (error) {
        console.log(error);
    }
}   
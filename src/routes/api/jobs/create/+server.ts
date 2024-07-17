import { jwtDecode } from "jwt-decode"
import { CREDENTIALS_API } from "../../../utils/config"

export const POST = async({ cookies, request, fetch }: any) => {
    let token = cookies.get('token')    
    let user = jwtDecode(token)
    // @ts-ignore
    let userId = user.id

    const dataJob = await request.json()
    try {
        const API = await fetch(`${CREDENTIALS_API.development}jobs/${userId}/create-job`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(dataJob)
        })

        console.log(API);
        console.log(await API.json());
    } catch (error) {
        console.error(error)
    }
    
}
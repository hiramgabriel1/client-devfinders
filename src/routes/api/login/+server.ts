import { json } from '@sveltejs/kit';
import { CREDENTIALS_API } from '../../../utils/config';
import { invalidate } from '$app/navigation';

export const POST = async ({ request }: any) => {
    const { email, password } = await request.json();

    const dataUser = {
        email,
        password
    }
    console.log(email, password);
    const api = await fetch(`${CREDENTIALS_API.development}users/auth-login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataUser)
    })

    const response = await api.json()

    if(!response.ok) console.log('error');
    
    console.log(response);
    
    return json({
        data: {
            email: email,
            password: password
        }
    });
};

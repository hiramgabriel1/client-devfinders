import { error, json, redirect } from '@sveltejs/kit';
import { CREDENTIALS_API } from '../../../utils/config';
import { jwtDecode } from "jwt-decode"
import { invalidate } from '$app/navigation';
import cookie from "js-cookie"

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

    if(!api.ok) {
        console.error('error al iniciar sesion')
        return json({ error: 'Error al iniciar sesion' }, { status: 401 })
    }

    const userCurrent = response.token
    console.log("userCurrent", userCurrent);

    return json({token: userCurrent })
};

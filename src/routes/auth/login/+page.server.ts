import { type Actions } from "@sveltejs/kit";

export const actions: Actions = {
    
    login: async ({ request }) => {
        const formData = await request.formData();
        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        };

        const api = await fetch('http://localhost:5000/user/auth-login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!api.ok) {
            return {
                success: false,
                message: 'Error en el inicio de sesión'
            };
        }

        const responseApi = await api.json();

        return {
            success: true,
            message: 'Inicio de sesión exitoso',
            user: responseApi.user,
            token: responseApi.token
        };
    }
};

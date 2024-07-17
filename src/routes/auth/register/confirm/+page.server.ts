import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";
import { CREDENTIALS_API } from "../../../utils/config";

export const load: PageServerLoad = async ({ fetch, url }) => {
    const token = url.searchParams.get("token");

    if (!token) throw error(400, "token de confirmacion no proporcionado");

    const response = await fetch(
        `${CREDENTIALS_API.development}users/confirm-token?token=${token}`
    );

    if (!response.ok) {
        const { message } = await response.json();
        console.log(message);

        throw error(response.status, message || "Error al confirmar el email");
    }

    const isConfirmed = await response.json();

    console.log(isConfirmed);

    return { data: isConfirmed, message: "Correo confirmado" };
};

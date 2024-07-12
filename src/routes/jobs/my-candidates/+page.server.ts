import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { CREDENTIALS_API } from "../../utils/config";
import { jwtDecode } from "jwt-decode";

export const load: PageServerLoad = async ({ fetch, cookies }) => {
  try {
    const token = cookies.get("token");
    const user = jwtDecode(token || "");

    // @ts-ignore
    const userId = user.id;

    if (token === undefined) throw new Error("EL usuario no tiene un token");

    const API = await fetch(
      `${CREDENTIALS_API.development}jobs/my-postulates/user/${userId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        credentials: "include"
      }
    );

    if(!API.ok) console.log('no se pudo mostrar postulantes');

    const userPostulated = await API.json()

    return {
      data: userPostulated
    }
  } catch (error) {
    console.error(error);
    throw redirect(401, "/auth/login/");
  }
};

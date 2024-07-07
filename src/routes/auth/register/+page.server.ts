import type { PageServerLoad } from "./$types";
import { CREDENTIALS_API } from "../../../utils/config";

export const load: PageServerLoad = async ({ fetch }) => {
  try {
    const API = fetch(`${CREDENTIALS_API.development}users/create-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await (await API).json()
  } catch (error) {
    console.error(error);
  }
};

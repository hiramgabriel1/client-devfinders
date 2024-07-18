import type { PageServerLoad } from "./$types";
import { CREDENTIALS_API } from "../../utils/config";
import { redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ fetch, request }) => {
  const data = await request.json();

  console.log(data);
  // return;

  try {
    const API = await fetch(`${CREDENTIALS_API.development}users/create-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const response = await API.json();
    if (!API.ok) throw redirect(303, "/confirm");

    return { data: response.email };
  } catch (error) {
    console.error(error);
  }
};

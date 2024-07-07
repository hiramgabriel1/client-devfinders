import { redirect, type ServerLoad } from "@sveltejs/kit";
import { CREDENTIALS_API } from "../../utils/config";

export const load: ServerLoad = async () => {
  try {
    const API = await fetch(`${CREDENTIALS_API.development}posts/show-posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await API.json()

    console.log(response);
    
    return { 
        data: response
    }

  } catch (error) {
    console.error(error);
    redirect(303, "/error");
  }
};

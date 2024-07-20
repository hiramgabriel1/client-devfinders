import { CREDENTIALS_API } from "../../utils/config";

export const POST = async ({ request }: any) => {
  const formData = {...request};

  console.log(formData);
  
  try {
    const API = await fetch(
      `${CREDENTIALS_API.development}users/auth-register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const responseApi = await API.json();

    console.log(responseApi);
    console.log(API);
      
    if (!API.ok) return "error internal";

    return {
      success: true,
    };
  } catch (error) {
    console.error(error);
  }
};

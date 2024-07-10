import { CREDENTIALS_API, TOKEN } from "../../../utils/config";
import jwt from "jsonwebtoken";

export const POST = async ({ request }: any) => {
  try {
    const { postId, userId, token } = await request.json();

    if (!token || token.split(".").length !== 3) {
      throw new Error("Token inválido");
    }

    const decoded = jwt.verify(token, TOKEN.development);
    console.log(decoded);

    const localApi = await fetch(
      `${CREDENTIALS_API.development}bookmarks/save-bookmark/${postId}/user/${userId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify({ postId, userId }),
      }
    );

    if (!localApi.ok) {
      console.log("Error al consumir la API");
      return new Response(
        JSON.stringify({ error: "Error al consumir la API" }),
        { status: 500 }
      );
    }

    const responseData = await localApi.json();
    console.log(responseData);

    return new Response(JSON.stringify(responseData), { status: 200 });
  } catch (error) {
    console.error("Error en el servidor", error);
    return new Response(JSON.stringify({ error: "Error en el servidor" }), {
      status: 500,
    });
  }
};

// import { CREDENTIALS_API } from "../../../../utils/config";

// export const POST = async ({ request }: any) => {
//     const { postId, userId, token } = await request.json();

//     // console.log(await request.json());
//     console.log(postId, userId, token);

//     try {
//         const localApi = await fetch(
//             `
//               ${CREDENTIALS_API.development}bookmarks/save-bookmark/${postId}/user/${userId}`,
//             {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${token}`,
//                 },
//                 credentials: "include",
//                 body: JSON.stringify({ postId, userId }),
//             }
//         );

//         if (!localApi.ok) console.log("error alaburguer");

//         console.log(localApi);

//         console.log("todo bien alaburguer");
//     } catch (error) {
//         console.error("error");
//     }
// };

import { type Load } from "@sveltejs/kit";
import { CREDENTIALS_API } from "../../../../utils/config";

export const load: Load = async ({ params, fetch, route }) => {
    console.log(params.slug);
    console.log(route);

    const data = await fetch(
        `${CREDENTIALS_API.development}posts/view-post/${params.slug}`,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    if (!data.ok) throw new Error('Post no encontrado')

    const post = await data.json();

    return {
        data: { post },
    };
};

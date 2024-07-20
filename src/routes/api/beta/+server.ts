import { CREDENTIALS_API } from "../../utils/config";

export const POST = async ({ request, fetch }: any) => {
    const data = await request.json();
    console.log(data);

    try {
        const api = await fetch(
            `${CREDENTIALS_API.production}beta/add-user/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ data }),
            }
        );
        console.log(api);

        const apiResponse = await api.json();
        console.log(apiResponse);

        if (!api.ok) {
            console.log("API responded with error:", apiResponse);
            return new Response(JSON.stringify({ error: apiResponse }), {
                status: api.status,
            });
        }

        console.log(apiResponse);
        // return json(apiResponse);
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ error: error }), { status: 500 });
    }
};

export const POST = async ({ request, fetch }: any) => {
    const data = await request.json();
    console.log(data);

    try {
        const api = await fetch(
            `https://devfinder-services-production.up.railway.app/beta/add-user/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
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

        return { data: 'ptu' }
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ error: error }), { status: 500 });
    }
};

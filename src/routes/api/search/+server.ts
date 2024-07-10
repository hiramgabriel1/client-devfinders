export const POST = async ({ request }: any) => {
    const {search}= await request.json()

    console.log(search);
    
}

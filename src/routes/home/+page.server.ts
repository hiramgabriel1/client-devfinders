import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
    try {
        const postsResponse = await fetch(
            "http://localhost:5000/posts/show-posts",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const popularPostsResponse = await fetch(
            "http://localhost:5000/posts/popular-posts",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (!(postsResponse.ok && popularPostsResponse.ok)) {
            throw new Error(
                `Network response was not ok ${postsResponse.statusText}`
            );
        }

        const data = await postsResponse.json();
        const popularPostsData = await popularPostsResponse.json()

        console.log(data);
        console.log(popularPostsData);

        return {
            data: data.posts,
            popularData: popularPostsData
        };
    } catch (error) {
        console.error("Fetch error:", error);
        return {
            posts: [],
            error: error,
        };
    }
};

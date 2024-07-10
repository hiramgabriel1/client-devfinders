import { jwtDecode } from "jwt-decode";
import type { PageServerLoad } from "./$types";
import { CREDENTIALS_API } from "../utils/config";
import { redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ fetch, cookies }) => {
    const token = cookies.get("token");
    console.log(token);

    try {
        const decodedToken = jwtDecode(token || "");
        console.log(decodedToken);

        if (cookies === undefined) throw new Error("token is not exists");

        const validateSessionUser = await fetch(
            `
            ${CREDENTIALS_API.development}users/auth/user`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                credentials: "include",
            }
        );

        const userData = await validateSessionUser.json()
        console.log(userData);

        if (!validateSessionUser.ok) throw redirect(303, "/auth/login");

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
        const popularPostsData = await popularPostsResponse.json();

        console.log(data);
        console.log(popularPostsData);

        return {
            dataPosts: data.posts,
            popularData: popularPostsData,
            user: userData
        };
    } catch (error) {
        console.error("Fetch error:", error);
        return redirect(303, "/auth/login");
    }
};

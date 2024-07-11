<script lang="ts">
    import "../../../app.css"

    export let data
    export let error

    console.log(error);
        
    const posts = data.data

    console.log(posts);
    
</script>

{#each posts as bookmarkPost}
    <p>{bookmarkPost.post.titlePost}</p>
{/each}
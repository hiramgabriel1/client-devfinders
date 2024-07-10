<script lang="ts">
  import recents from "$lib/public/images/recents.png";
  import { type PopularPostInterface } from "../../types/posts.interface";

  export let posts: PopularPostInterface | any;

  console.log(posts);
</script>

<article class="flex gap-4 flex-wrap">
  {#if posts && posts.length > 0}
    {#each posts as post, index}
      {#if posts.length <= 4}
        <div class="rounded overflow-hidden bg-[#f8f9fa] w-72">
          <img src={recents} alt={post.titlePost} />
          <p class=" p-2.5 border font-semibold text-sm text-pretty">
            {post.titlePost}
          </p>
          <p>
            {post.descriptionPost}
          </p>
        </div>
      {/if}
    {/each}
  {:else}
    <p>No hay posts</p>
  {/if}
</article>

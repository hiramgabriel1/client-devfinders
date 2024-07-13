<script lang="ts">
  import { goto } from "$app/navigation";
  import people from "$lib/public/images/people.png";
  import profile from "$lib/public/images/profile.png";
  import save_b from "$lib/public/images/save_b.png";
  import type { PopularPostInterface } from "../../types/posts.interface";

  export let error;
  export let popularPosts;

  let usernameAuthor: string;

  popularPosts.map(
    // @ts-ignore
    (data: PopularPostInterface) => (usernameAuthor = data.creatorPost.username)
  );

  const showPostById = (id: number) => {
    console.log(id);
    
    goto(`/home/posts/post/${id}`)
  }
</script>

{#if error}
  <p>{error.message}</p>
{/if}

{#if popularPosts && popularPosts.length > 0}
  {#each popularPosts as currentPost, index}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click={()=> showPostById(currentPost.id)}>
      <div>
        <img src={people} alt="people" />
      </div>  
      <div class="font-secondary py-4">
        <h1 class="font-bold text-xl">
          {currentPost.titlePost}
        </h1>
        <p class="py-2 text-xs lg:pr-6">
          {currentPost.descriptionPost}
        </p>
      </div>
      <div class="lg:flex lg:justify-between lg:pr-7">
        <div>
          <div class="flex text-xs space-x-2">
            <div class="w-14">
              <span class="border rounded-full px-2">Popular</span>
            </div>
            <div class="w-15">
              <span
                class="border rounded-full bg-slate-300 border-transparent text-slate-500 px-2"
                >8 min read</span
              >
            </div>
            <div
              class="flex space-x-1 bg-slate-50 rounded-full px-2 text-slate-500"
            >
              <div><span>{currentPost.createdAt}</span></div>
              <div><span>{currentPost.likesCount}</span></div>
            </div>
          </div>
        </div>

        <div class="py-4 flex space-x-2 lg:py-0">
          <div>
            <button><img src={save_b} alt="save" /></button>
          </div>
          <div class="flex space-x-1">
            <img src={profile} alt="profile" class="w-6 h-6 rounded-full" />
            <div>
              <span class="font-secondary text-xs font-semibold text-slate-500">
                {usernameAuthor}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/each}
{/if}

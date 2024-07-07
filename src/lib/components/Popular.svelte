<script lang="ts">
  import save_b from "$lib/public/images/save_b.png";
  import profile from "$lib/public/images/profile.png";
  import { type PopularPostInterface } from "../../types/posts.interface";
  import "../../app.css";

  export let error;
  export let popularPosts;

  console.log(error);

  console.log(popularPosts);
</script>

{#if popularPosts && popularPosts.length > 0}
  {#each popularPosts as post}
    <div class="py-2 font-secondary">
      <div>
        <div>
          <h1 class="font-semibold text-sm">
            {post.titlePost}
          </h1>
        </div>
      </div>
      <div class="">
        <div class="flex justify-between">
          <div class="pt-1">
            <div class="flex text-xs space-x-2 pt-4">
              <div
                class="flex space-x-1 bg-slate-50 rounded-full px-2 text-slate-500"
              >
                <!-- category post -->
                <div>
                  <span>
                    {post.categoryPost}
                  </span>
                </div>

                <!-- likes post -->
                <div><span>{post.likesCount}</span></div>
              </div>
            </div>
          </div>

          <div class="py-4 flex space-x-2">
            <div>
              <button><img src={save_b} alt="save" /></button>
            </div>
            <div class="flex space-x-1">
              <img src={profile} alt="profile" class="w-6 h-6 rounded-full" />
              <div>
                <span
                  class="font-secondary text-xs font-semibold text-slate-500"
                >
                  {post.categoryPost}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/each}
{:else}
  <p>No hay posts</p>
{/if}

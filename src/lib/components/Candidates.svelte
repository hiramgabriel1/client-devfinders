<script>
  import profile from "$lib/public/images/profile.png";
  import "../../app.css";

  export let user;

  console.log(user);
</script>

{#if user && user.length > 0}
  {#each user as postulate, index}
    <div
      class="border border-slate-200 rounded-sm py-2 px-2 flex flex-col lg:flex-row lg:justify-between lg:p-6"
    >
      <div class="flex flex-row">
        <div class="flex items-center lg:items-start lg:py-2">
          <img
            src={profile}
            alt="profile"
            class="rounded-full w-9 h-9 lg:h-12 lg:w-12"
          />
        </div>
        <div class="flex flex-col">
          <div
            class="text-xs font-secondary font-semibold px-2 py-1 flex space-x-2 items-center lg:text-sm"
          >

          <!-- hardcodeado -->
            <p>{postulate.username}</p>
            <div
              class="border border-color-secondary-highlight rounded-full px-2 h-5"
            >
              <p
                class="font-secondary font-semibold text-xs text-color-secondary-highlight"
              >
                Open for work
              </p>
            </div>
          </div>
          <div
            class="flex font-secondary text-slate-500 space-x-2 text-xs px-2 lg:text-sm"
          >
            <p>{postulate.descriptionLong}</p>
            <!-- <p class="border-l px-2">UI Designer at Amet Company</p> -->
          </div>
          <div
            class="flex space-x-2 text-xs px-2 py-2 text-slate-600 lg:text-sm"
          >
            <!-- <p class="rounded bg-gray-200 px-1">UX Research</p>
            <p class="rounded bg-gray-200 px-1">UI Design</p>
            <p class="rounded bg-gray-200 px-1">Web Design</p> -->
          </div>
        </div>
      </div>
      <div class="text-xs font-secondary font-semibold space-x-2 px-11">
        <button
          class="bg-color-blue-light text-color-blue-highlight border-transparent rounded px-1 lg:p-2 lg:text-sm"
          >Sent Message</button
        >
        <button
          class="bg-color-blue-highlight text-white border-transparent rounded px-1 lg:p-2 lg:text-sm"
          >Connect</button
        >
      </div>
    </div>
  {/each}
{:else}
  <p>No tienes postulantes todavia</p>
{/if}

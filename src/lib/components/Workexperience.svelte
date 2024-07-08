<script lang="ts">
  import trabajoIcon1 from "$lib/public/images/trabajoIcon1.png";
  import trabajoIcon2 from "$lib/public/images/trabajoIcon2.png";
  import homeIcon from "$lib/public/images/homeIcon.png";
  import calendarIcon from "$lib/public/images/calendarIcon.png";
  import "../../app.css";
  import type { UserInterface } from "../../types/user.interface";

  export let userData: UserInterface;

  console.log(userData);
</script>

{#if userData}
  <div
    class="flex flex-col border border-gray-300 rounded-lg px-4 py-6 space-y-4"
  >
    <div class="text-lg lg:text-xl font-semibold">
      <h2>Working Experience</h2>
    </div>
    <div class="flex flex-col space-y-16">
      <div class="flex flex-row">
        <div class="flex items-center lg:items-start lg:py-2">
          <img
            src={trabajoIcon1}
            alt="trabajoIcon1"
            class="rounded-full xl:w-14 xl:h-14"
          />
        </div>
        <div class="flex flex-col">
          <div
            class="text-sm font-secondary font-semibold px-2 py-2 flex space-x-2 items-center lg:text-lg"
          >
            <p>{userData.workExperience}</p>
            <div class="bg-color-secondary rounded-full px-3 py-2">
              <p
                class="font-secondary font-semibold text-xs text-color-secondary-highlight"
              >
                {userData.isCurrent ? "Working" : "Finished"}
              </p>
            </div>
          </div>
          <div
            class="flex font-secondary text-slate-500 space-x-2 text-xs px-2 lg:text-sm"
          >
            <div>
              <div class="flex space-x-2">
                <img
                  src={homeIcon}
                  alt="saveIcon"
                  class="w-4 h-4 lg:w-5 lg:h-5"
                />
                <p class="border-r pr-1">fulltime</p>
                <img
                  src={homeIcon}
                  alt="saveIcon"
                  class="w-4 h-4 lg:w-5 lg:h-5"
                />
                <p class="border-r pr-1">ConocoPhillips</p>
                <img
                  src={calendarIcon}
                  alt="saveIcon"
                  class="w-4 h-4 lg:w-5 lg:h-5"
                />
                <p>ConocoPhillipAug 2018 - Nov 2020 · 2 yrs 4 moss</p>
              </div>
            </div>
          </div>
          <div
            class="flex lg:space-x-4 text-xs px-2 py-2 lg:text-sm flex-col lg:flex-row justify-between"
          >
            <div>
              <p>
                {userData.workExperience}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

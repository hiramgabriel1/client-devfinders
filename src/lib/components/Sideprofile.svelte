<script lang="ts">
  import "../../app.css";
  import user from "$lib/public/images/profile.png";
  import type { UserInterface } from "../../types/user.interface";

  export let userData: UserInterface;

  console.log(userData);
</script>

{#if userData}
  <div
    class="flex flex-col items-center border border-gray-200 rounded-lg py-6 lg:w-80 xl:w-96 md:justify-center relative h-[100%]"
  >
    <div>
      <img src={user} alt="" class="w-24 h-24 rounded-full md:w-32 md:h-32" />
    </div>
    <div
      class="text-center text-color-blue-highlight font-secondary text-lg py-3"
    >
      <h3 class="text-lg font-bold md:text-xl">
        {userData.username}
      </h3>
      <p class="text-black text-sm md:text-base">
        {userData.profesion}
     </p>
    </div>
    <div class="text-center font-secondary py-3 px-3">
      <p class="text-gray-400 text-xs">
        {userData.descriptionLong}
      </p>
      <div class="w-auto flex space-x-3 py-3 justify-center">
        <p class="bg-gray-100 w-auto px-2 py-1 rounded text-xs">
            {userData.skills[0]}
        </p>
        <p class="bg-gray-100 w-auto px-2 py-1 rounded text-xs">
            {userData.skills[1]}
        </p>
        <p class="bg-gray-100 w-auto px-2 py-1 rounded text-xs">
            {userData.skills[2]}
        </p>
      </div>
    </div>

    <div class="border-t border-gray-200 flex flex-col">
      <div class="flex items-start flex-col py-3 text-xs font-bold">
        <p class="text-start text-gray-600">LinkedIn</p>
        <input
          type="text"
          name=""
          id=""
          value={userData.social[1] || 'No agregado'}
          class="bg-gray-100 w-64 py-1 rounded"
        />
      </div>
      <div class="flex items-start flex-col py-3 text-xs font-bold">
        <p class="text-start text-gray-600">GitHub</p>
        <input
          type="text"
          name=""
          id=""
          value={userData.social[0] || 'No agregado'}
          class="bg-gray-100 w-64 py-1 rounded"
        />
      </div>
      <div class="flex items-start flex-col py-3 text-xs font-bold">
        <p class="text-start text-gray-600">Instagram</p>
        <input
          type="text"
          name=""
          id=""
          value={userData.social[1] || 'No agregado'}
          class="bg-gray-100 w-64 py-1 rounded"
        />
      </div>
      <div class="py-3 text-center text-white font-secondary">
        <a href="/profile/edit/" class="bg-color-blue-highlight px-16 py-3 rounded">
          Editar perfil
        </a>
      </div>
    </div>
  </div>
{:else}
  <p>Error al mostrar.</p>
  <a href="/home">volver</a>
{/if}

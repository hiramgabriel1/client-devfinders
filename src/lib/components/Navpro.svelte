<script>
  import "../../app.css";
  import logo_2 from "$lib/public/images/logo_2.png";
  import search_2 from "$lib/public/images/search_2.png";
  import notify from "$lib/public/images/notify.png";
  import profile from "$lib/public/images/profile.png";
</script>

<header>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <nav
    class="flex items-center justify-between px-3 md:pr-10"
    on:click
    >
    <div class="w-[45%] py-3 flex items-center">
      <img src={logo_2} alt="logo" class="w-9 h-8 lg:w-[10%] lg:h-[10%]" />
      <div class="px-2 flex items-center lg:px-4 lg:w-full">
        <div class="absolute px-2 lg:px-3">
          <img src={search_2} alt="search" class="w-3 h-3 lg:w-5 lg:h-5" />
        </div>
        <div class="lg:w-full">
          <input
            placeholder="Buscar..."
            class="bg-zinc-100 rounded px-6 text-sm lg:text-lg lg:py-1 lg:px-10 lg:w-full"
          />
        </div>
      </div>
    </div>
    <div class="flex space-x-2">
      <img src={notify} alt="" class="h-8 w-8 md:h-10 md:w-10" />
      <div class="flex">
        <img
          src={profile}
          alt=""
          class="rounded-full w-8 h-8 md:w-10 md:h-10"
        />
        <select>
          <option value=""></option>
          <option value="config">Configuracion</option>
          <option value="edit-profile">Editar perfil</option>
          <option value="view-my-candidates"> Ver mis candidatos </option>
          <option value="view-my-posts"> Ver mis publicaciones </option>
          <option value="view-my-postulations"> Ver mis postulaciones </option>
        </select>
      </div>
    </div>
  </nav>
</header>

<script lang="ts">
  import { CREDENTIALS_API } from "../../utils/config";

  // export let dataSearched

  // console.log(dataSearched);
  let formData = {
    search: "",
  };

  const sendData = async () => {
    const api = await fetch("/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!api.ok) console.log("error");

    console.log(await api.json());
  };
</script>

<section class="flex flex-col items-center gap-6">
  <h2 class="text-5xl font-bold">Explorar</h2>
  <p class="text-xl font-thin">
    Explora nuevo contenido sobre desarrollo o encuentra personas con tus mismos
    intereses
  </p>
  <article class="flex items-start relative h-24 mt-6">
    <form
      on:submit|preventDefault={sendData}
      class="flex border border-black rounded overflow-hidden text-xl"
    >
      <input
        type="text"
        placeholder="Buscar..."
        class="py-2 px-4 w-[36rem]"
        name="search"
        bind:value={formData.search}
      />

      <select
        name="content-type"
        id="content-type"
        class="border-l border-black py-2 pl-4 pr-2 bg-[#0ea89b] text-white"
      >
        <option value="1" selected>Articulos</option>
        <option value="2">Post</option>
        <option value="3">Personas</option>
      </select>
    </form>
    <div class="absolute flex justify-evenly w-full bottom-0 text-sm font-thin">
      <strong>Palabras Clave</strong>
      <p># Everythin Explained</p>
      <p># Tech Reads</p>
      <p># Family Theraphy</p>
    </div>
  </article>
</section>

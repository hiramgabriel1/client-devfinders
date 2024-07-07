<script>
  import Authors from "$lib/components/Authors.svelte";
  import Navpro from "$lib/components/Navpro.svelte";
  import Explorer from "$lib/components/Explorer.svelte";
  import Recent from "$lib/components/Recent.svelte";
  import MostWanted from "$lib/components/MostWanted.svelte";
  import Categories from "$lib/components/Categories.svelte";
  import Footer from "$lib/components/Footer.svelte";

  // importarla (curioso)
  export let data

  let posts = data.data.posts
  console.log(posts);

  // props --> propiedades que se comparten
</script>

<Navpro/>

<!-- props -->

<main class="flex flex-col items-center gap-24">
  <Explorer/>
  <section class="w-[75rem] relative flex justify-center gap-4 pb-10">
    <h2 class="text-3xl font-bold absolute -top-14 left-0">Recientes</h2>
    
    <Recent/>

  </section>
  <section class="w-[75rem] relative flex justify-center gap-4 pb-10">
    <h2 class="text-3xl font-bold absolute -top-14 left-0">Personas con las que podrías conectar</h2>
    <Authors />
  </section>
  <section class="w-[75rem] relative pb-10">
    <h2 class="text-3xl font-bold absolute -top-14 left-0">Temas mas buscados</h2>
    <MostWanted />
  </section>
  <section class="w-[75rem] relative pb-56">
    <h2 class="text-3xl font-bold absolute -top-14 left-0">Categorias</h2>
    <Categories />
  </section>
</main>
<Footer />
<script>
  import Authors from "$lib/components/Authors.svelte";
  import Navpro from "$lib/components/common/Navpro.svelte";
  import Explorer from "$lib/components/Explorer.svelte";
  import Recent from "$lib/components/Recent.svelte";
  import MostWanted from "$lib/components/MostWanted.svelte";
  import Categories from "$lib/components/Categories.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let onClick = true
  export let data
  
  const posts = data.data.posts
  const users = data.users
  
  console.log(posts);
  console.log(users);

</script>
 
<Navpro />

<main class="flex flex-col items-center gap-24">
  <Explorer />
  <section class="w-[75rem] relative flex justify-center gap-4 pb-10">
    <h2 class="text-3xl font-bold absolute -top-14 left-0">Recientes</h2>
    <Recent {posts}/>
  </section>
  <section class="w-[75rem] relative flex justify-center gap-4 pb-10">
    <h2 class="text-3xl font-bold absolute -top-14 left-0">
      Personas con las que podrías conectar
    </h2>
    <Authors {users}/>
  </section>
  <section class="w-[75rem] relative pb-10">
    <h2 class="text-3xl font-bold absolute -top-14 left-0">
      Temas mas buscados
    </h2>
    <MostWanted />
  </section>
  <section class="w-[75rem] relative pb-56">
    <h2 class="text-3xl font-bold absolute -top-14 left-0">Categorias</h2>
    <Categories />
  </section>
</main>
<Footer />
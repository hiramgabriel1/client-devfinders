<script>
  import Navpro from "$lib/components/Navpro.svelte";
  import "../../app.css";
  import Footer from "$lib/components/Footer.svelte";
  import About from "$lib/components/About.svelte";
  import Analisis from "$lib/components/Analisis.svelte";
  import Sideprofile from "$lib/components/Sideprofile.svelte";
  import Workexperience from "$lib/components/Workexperience.svelte";
  import Projectexp from "$lib/components/Projectexp.svelte";
  import Skills from "$lib/components/Skills.svelte";
</script>

<Navpro></Navpro>

<section>
  <div class="container py-6">
    <div
      class="flex flex-col lg:flex-row lg:space-x-10 space-y-20 lg:space-y-0"
    >
      <Sideprofile></Sideprofile>
      <main class="w-full space-y-5">
        <Analisis></Analisis>
        <About></About>
        <Workexperience></Workexperience>
        <Projectexp></Projectexp>
        <Skills></Skills>
      </main>
    </div>
  </div>
</section>

<Footer></Footer>

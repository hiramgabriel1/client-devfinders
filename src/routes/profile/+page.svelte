<script>
  import Navpro from "$lib/components/common/Navpro.svelte";
  import "../../app.css";
  import Footer from "$lib/components/Footer.svelte";
  import About from "$lib/components/About.svelte";
  import Analisis from "$lib/components/Analisis.svelte";
  import Sideprofile from "$lib/components/Sideprofile.svelte";
  import Workexperience from "$lib/components/Workexperience.svelte";
  import Skills from "$lib/components/Skills.svelte";
  import ProjectExp from "$lib/components/ProjectExp.svelte";

  export let data
  
  let userData = data.data
  console.log(data);
</script>

<Navpro/>

<section>
  <div class="container py-6">
    <div
      class="flex flex-col lg:flex-row lg:space-x-10 space-y-20 lg:space-y-0"
    >
      <Sideprofile {userData} />
      <main class="w-full space-y-5">
        <Analisis/>
        <About {userData}/>
        <Workexperience {userData}/>
        <ProjectExp {userData}/>
        <Skills {userData}/>
      </main>
    </div>
  </div>
</section>

<Footer/>

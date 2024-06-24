<script>
    import Navpro from "$lib/components/Navpro.svelte";
    import "../../app.css"
    import user from "$lib/public/images/profile.png";
    import Footer from "$lib/components/Footer.svelte";
    import security from "$lib/public/images/private.png";
    import peoplegreen from "$lib/public/images/peoplegreen.png";
    import star from "$lib/public/images/star.png";
    import search from "$lib/public/images/search.png";
    import bag from "$lib/public/images/bag.png";
  import About from "$lib/components/About.svelte";
  import Analisis from "$lib/components/Analisis.svelte"
  import Sideprofile from "$lib/components/Sideprofile.svelte";
</script>


<Navpro></Navpro>

<section>
    <div class="container py-6">
        <div class="flex flex-col lg:flex-row lg:space-x-10 space-y-20 lg:space-y-0">
            <Sideprofile></Sideprofile>
            <main class="w-full space-y-5">
                <Analisis></Analisis>
                <About></About>
                <div class="border border-gray-200 rounded-lg py-6 lg:46 w-full">
                    <div class="px-5">
                        <div class="flex flex-row space-x-5">
                            <h2 class="text-lg font-semibold">About</h2>
                            <div class="flex flex-row items-center justify-start bg-color-secondary rounded-2xl px-2">
                                <img src={bag} alt="" class="w-3 h-3 lg:w-5 lg:h-5">
                                <p class="text-color-secondary-highlight">open to work</p>
                            </div>
                        </div>
                        <div class="py-6 text-gray-500">
                            <p>Soy un desarrollador BackEnd con 5 años de experiencia. Mi stack principal es nestjs con typescript, microservicios con rabbitMQ o Nats.</p>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    </div>
</section>

<Footer></Footer>
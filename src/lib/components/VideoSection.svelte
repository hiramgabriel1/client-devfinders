<script>
    import "../../app.css";
    import bg from "$lib/public/images/bg.png";
</script>
<section>
    <div class="container py-10 xl:px-[12rem] lg:py-20">
        <div class="flex justify-around">
            <div class="flex flex-col text-center xl:w-96 px-6">
                <div class="text-2xl lg:text-5xl font-semibold">
                    <h1>Del problema a la solucion... Nuvix Dev</h1>
                </div>
                <div class="py-3">
                    <p>
                        "Explora un espacion dedicado a desarrolladores y
                        entusiastas de la tecnología. Conéctate con personas
                        afines, comparte tus ideas y accede a nuevas
                        oportunidades. En Nuvix Dev, construimos amistades y
                        colaboramos en proyectos que marcan las diferencia."
                    </p>
                </div>
            </div>
        </div>
        <div class="flex justify-center pb-10">
            <div class="absolute lg:flex lg:justify-center sm:flex sm:justify-center">
                <img src={bg} alt="Background" class="lg:w-[70%] sm:w-[60%]"/>
            </div>
            <div class="pt-14 lg:pt-20 lg:mt-20 lg:flex lg:justify-center">
                <video controls>
                    <source src="presentation" type="video/mp4" />
                </video>
            </div>
        </div>
    </div>
</section>
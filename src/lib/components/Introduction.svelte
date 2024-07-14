<script>
    import "../../app.css";
    import person1_icon from "$lib/public/images/person1_icon.png";
    import person2_icon from "$lib/public/images/person2_icon.png"
</script>

<section>
    <div class="container pt-6 xl:px-[12rem]">
        <div class="flex justify-around">
            <div class="hidden xl:block pt-16">
                <img src={person1_icon} alt="persona1">
            </div>
            <div class="flex flex-col text-center xl:w-96 px-6">
                <div class="text-2xl lg:text-5xl font-semibold">
                    <h1>Nuvix Dev: Donde los desarrolladores se encuentran y colaboran</h1>
                </div>
                <div class="py-3">
                    <p>
                        "Nuvix reúne a profesionales y aficionados de la tecnología en un solo lugar. Conéctate, comparte tus ideas y encuentra nuevas oportunidades. Con Nuvix Dev, podrás conocer a personas afines y construir amistades basadas en intereses tecnológicos comunes."
                    </p>
                </div>
                <div class="py-6 flex justify-around">
                    <a href="/src/routes/auth/register" class="text-xs md:text-base px-1 py-1 md:px-4 md:py-3 rounded-3xl capitalize text-white bg-color-blue-highlight">Comenzar</a>

                    <a href="aunnada" class="text-xs md:text-base px-1 py-1 md:px-4 md:py-3 border border-color-blue-highlight rounded-3xl capitalize text-color-blue-highlight hover:border-color-blue-light ease-in duration-200">Ver demo</a>
                </div>
            </div>
            <div class="hidden xl:inline-block pt-16"> 
                <img src={person2_icon} alt="persona2">
            </div>
        </div>
    </div>
</section>
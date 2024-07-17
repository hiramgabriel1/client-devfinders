<script>
    import "../../app.css";
    import next from "$lib/public/images/next.png";
    import collaborator from "$lib/public/images/collaborator.png";
    import quote from "$lib/public/images/quote.png";
    import medal from "$lib/public/images/medal.png";
    import trophy from "$lib/public/images/trophy.png";
</script>
<section>
    <div class="container pt-15 xl:px-[12rem]">
        <div class="flex justify-center pt-12 pb-10 py-6">
            <div class=" font-semibold text-center pt-2">
                <h1 class="text-sm text-gray-600 lg:text-xl">
                    Colaboradores de Nuvix dev
                </h1>
                <h2 class="text-2xl pt-2 lg:text-3xl">
                    ¿Quienes colaboraron para el desarrollo de Nuvix Dev y cuál
                    fue su aportacion?
                </h2>
            </div>
        </div>

        <div class="lg:flex sm:flex">
            <div class="flex justify-center">
                <img src={collaborator} alt="collaborator" />
            </div>
            <div class="py-2 flex justify-center border-b-2 shadow-lg lg:py-8">
                <div class="px-5">
                    <div class="pt-4 pb-8 lg:w-[80%] lg:pl-10">
                        <h3 class="font-secondary text-center font-semibold lg:text-start">
                            How TravelWise empowers self-service support to
                            minimize operational cost with Respondo
                        </h3>
                    </div>

                    <div class="py-5 border-l-2 border-y-0 border-r-0 border-l-color-blue-highlight font-secondary lg:ml-10">
                        <div class="text-gray-600 text-sm pl-10">
                            <p>
                                "Within the first year, we witnessed a 30%
                                reduction in support ticket volume as more
                                customers utilized the knowledge base."
                            </p>
                        </div>
                        <div class="flex items-center pl-8 space-x-2 pt-5">
                            <div><img src={quote} alt="quote" class="w-8 h-8"/></div>
                            <div class="font-semibold text-sm"><span>-Grace Nelson, COO at TravelWise</span></div>
                        </div>
                    </div>

                    <div class="pt-8 pl-4 pb-3 lg:ml-10">
                        <a href="" class="font-sm text-color-blue-highlight flex items-center font-semibold">Read the full case story <img src={next} alt="next" class="w-5 h-5 ml-3"/></a>
                    </div>

                </div>
            </div>
        </div>

        <div class="flex py-6 flex-wrap justify-center lg:w-[100%] lg:space-x-24 lg:py-12 sm:w-[100%] sm:space-x-12">

            <div class="font-secondary space-y-1 py-2 px-3">
                <div class="flex justify-center"><img src={medal} alt="medal" class="w-8 h-8"/></div>
                <div class="font-semibold text-gray-600 text-center text-xs flex justify-center"><span>GLOBAL LEADER</span></div>
                <div class="text-xs text-gray-500 flex justify-center"><span>FY 2021-2022</span></div>
            </div>

            <div class="font-secondary space-y-1 py-2 ">
                <div class="flex justify-center"><img src={trophy} alt="trophy" class="w-8 h-8"/></div>
                <div class="font-semibold text-gray-600 text-center text-xs flex justify-center"><span>ELITE CHOICE</span></div>
                <div class="text-xs text-gray-500 flex justify-center"><span>Officia cons</span></div>
            </div>

            <div class="font-secondary space-y-1 py-2 px-3">
                <div class="flex justify-center"><img src={trophy} alt="trophy" class="w-8 h-8"/></div>
                <div class="font-semibold text-gray-600 text-center text-xs flex justify-center"><span>FORBES</span></div>
                <div class="text-xs text-gray-500 flex justify-center"><span>Est excepteu 2022</span></div>
            </div>

            <div class="font-secondary space-y-1 py-2 ">
                <div class="flex justify-center"><img src={trophy} alt="trophy" class="w-8 h-8"/></div>
                <div class="font-semibold text-gray-600 text-center text-xs flex justify-center"><span>ELITE AWARDS</span></div>
                <div class="text-xs text-gray-500 flex justify-center"><span>Dolore aliqua</span></div>
            </div>
            
        </div>
    </div>
</section>
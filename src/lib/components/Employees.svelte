<script>
    import "../../app.css";
    import "../../routes/styleLanding.css";
    import bg from "$lib/public/images/bg.png";
    import next from "$lib/public/images/next.png";
    import smile_1 from "$lib/public/images/smile_1.png";
    import smile_2 from "$lib/public/images/smile_2.png";
</script>
<section>
    <div class="container pt-6 xl:px-[12rem] lg:py-12 lg:my-12 sm:my-10">
        <div class="flex justify-center pt-4 pb-10 lg:pb-10">
            <div class="absolute  z-[-1] lg:flex lg:justify-center sm:flex sm:justify-center" id="bg">
                <img src={bg} alt="Background" class="lg:w-[60%] sm:w-[80%]" />
            </div>
            <div
                class="flex justify-center text-center font-secondary py-6 bg-white lg:py-0"
            >
                <div class="lg:w-[60%] sm:w-[45%]">
                    <h1 class="font-semibold text-lg lg:py-4">
                        Necesitas buscar empleados para tu empresa? Mejora el
                        plan de Nuvix Dev para encontrar lo que necesitas
                    </h1>
                    <div class="flex space-x-2 justify-center lg:pb-4">
                        <div class="font-secondary flex justify-center py-4">
                            <button
                                class="flex text-white border-color-blue-highlight bg-color-blue-highlight items-center rounded-full py-2 px-3 text-xs"
                                >Get 1-month free trial</button
                            >
                        </div>
                        <div class="font-secondary flex justify-center py-4">
                            <button
                                class="flex text-color-blue-highlight border border-color-blue-highlight items-center rounded-full py-2 px-3 text-xs"
                                ><img
                                    src={next}
                                    alt="next"
                                    class="w-5 h-5 mr-2"
                                />Talk to Sales</button
                            >
                        </div>
                    </div>

                    <div class="flex justify-center lg:pb-12">
                        <div class="flex">
                            <div><img src={smile_1} alt="smile_1" /></div>
                            <div class=""><img src={smile_2} alt="smile_2" /></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
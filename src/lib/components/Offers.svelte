<script>
    import "../../app.css";
    import bg from "$lib/public/images/bg.png";
    import transaction from "$lib/public/images/transaction.png";
    import head from "$lib/public/images/head.png";
    import process from "$lib/public/images/process.png";
    import chart from "$lib/public/images/chart.png";
    import next from "$lib/public/images/next.png";
</script>

<section>
    <div class="container pt-15 xl:px-[12rem] lg:pt-20 lg:w-[100%]">
        <div class="flex justify-center pt-12 pb-10 lg:mt-10">
            <div
                class="text-lg lg:text-2xl font-semibold text-center absolute text-gray-600 pt-2"
            >
                <h1>¿Qué ofrece Nuvix Dev?</h1>
            </div>

            <div class="py-6">
                <div class="pt-12 space-y-3 lg:flex lg:justify-center lg:items-center lg:space-x-10 lg:w-[100%]">
                    <div
                        class="border rounded border-color-blue-highlight border-b-4 py-5 lg:w-[53%] lg:mt-3"
                    >
                        <div
                            class="font-secondary font-semibold flex items-center space-x-1 px-2 lg:text-sm"
                        >
                            <img
                                src={transaction}
                                alt="transaction"
                                class="w-7 h-7 lg:w-6 lg:h-6"
                            />
                            <span>Haz networking</span>
                        </div>
                        <div class="px-3 pt-2 lg:text-sm">
                            <p>
                                En Nuvix Dev podras hacer networking con otros
                                desarrolladores e intercambiar conocimientos y
                                experiencias
                            </p>
                        </div>
                        <div class="pt-2 px-3">
                            <button
                                class="bg-color-blue-light text-color-blue-highlight font-semibold text-sm flex items-center px-1"
                                >Learn more<img
                                    src={next}
                                    alt="next"
                                    class="w-5 h-5 ml-2"
                                /></button
                            >
                        </div>
                    </div>

                    <div
                        class="border rounded border-color-blue-highlight border-b-4 py-5 lg:w-[53%]"
                    >
                        <div
                            class="font-secondary font-semibold flex items-center space-x-1 px-2 lg:text-sm"
                        >
                            <img src={head} alt="head" class="w-7 h-7 lg:w-6 lg:h-6" />
                            <span>Consigue devs para tus proyectos</span>
                        </div>
                        <div class="px-3 pt-2 lg:text-sm">
                            <p>
                                Tienes algun proyecto en mente que quieras
                                desarrollar? En Nuvix podras publicar tu
                                proyecto y encontrar devs que te ayuden a
                                desarrollarlo
                            </p>
                        </div>
                        <div class="pt-2 px-3">
                            <button
                                class="bg-color-blue-light text-color-blue-highlight font-semibold text-sm flex items-center px-1"
                                >Learn more<img
                                    src={next}
                                    alt="next"
                                    class="w-5 h-5 ml-2"
                                /></button
                            >
                        </div>
                    </div>

                    <div
                        class="border rounded border-color-blue-highlight border-b-4 py-5 lg:w-[53%]"
                    >
                        <div
                            class="font-secondary font-semibold flex items-center space-x-1 px-2 lg:text-sm"
                        >
                            <img src={process} alt="process" class="w-5 h-5" />
                            <span>Compartir conocimientos</span>
                        </div>
                        <div class="px-3 pt-2 lg:text-sm">
                            <p>
                                Crea publicaciones de tecnologia y comparte de
                                tu conocimiento con los demas. Podras compartir
                                tus proyectos para que otros devs lo conozcan
                            </p>
                        </div>
                        <div class="pt-2 px-3">
                            <button
                                class="bg-color-blue-light text-color-blue-highlight font-semibold text-sm flex items-center px-1"
                                >Learn more<img
                                    src={next}
                                    alt="next"
                                    class="w-5 h-5 ml-2"
                                /></button
                            >
                        </div>
                    </div>
                </div>

                <div class="pt-3 lg:flex lg:justify-center">
                    <div
                        class="border rounded border-color-blue-highlight border-b-4 py-5 lg:w-[30%] lg:mt-7"
                    >
                        <div
                            class="font-secondary font-semibold flex items-center space-x-2 px-3 lg:text-sm"
                        >
                            <img src={chart} alt="chart" class="w-6 h-6" />
                            <span>Conoce personas con tus intereses</span>
                        </div>
                        <div class="px-3 pt-2 lg:text-sm">
                            <p>
                                En Nuvix Dev encontraras personas que cumplan lo
                                mismo que tu perfil para que puedas crear
                                conexiones con personas como tu
                            </p>
                        </div>
                        <div class="pt-2 px-3">
                            <button
                                class="bg-color-blue-light text-color-blue-highlight font-semibold text-sm flex items-center px-1"
                                >Learn more<img
                                    src={next}
                                    alt="next"
                                    class="w-5 h-5 ml-2"
                                /></button
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center space-x-4 py-4">
            <button
                class="bg-color-blue-highlight text-white font-secondary rounded-3xl px-3 py-2"
                >Get a demo</button
            >
            <button
                class="border border-color-blue-highlight flex items-center rounded-3xl px-3 py-2 text-color-blue-highlight"
                ><img src={next} alt="next" class="w-5 h-5 mr-1" />Explore
                features</button
            >
        </div>
    </div>
</section>

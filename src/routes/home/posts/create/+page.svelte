<script lang="ts">
    import "../../../style/style.css";
    import Navpro from "$lib/components/common/Navpro.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import previous from "$lib/public/images/previous.png";
    import undo from "$lib/public/images/undo.png";
    import redo from "$lib/public/images/redo.png";
    import bold from "$lib/public/images/bold.png";
    import italic from "$lib/public/images/italic.png";
    import strike from "$lib/public/images/strike.png";
    import underline from "$lib/public/images/underline.png";
    import code from "$lib/public/images/code.png";
    import link from "$lib/public/images/link.png";
    import img from "$lib/public/images/img.png";
    import headphone from "$lib/public/images/headphone.png";
    import vineta from "$lib/public/images/vineta.png";
    import list from "$lib/public/images/list.png";
    import settings_2 from "$lib/public/images/settings_2.png";
    import crop from "$lib/public/images/crop.png";

    import view from "$lib/public/images/view.png";
    import comment from "$lib/public/images/comment.png";
    import share from "$lib/public/images/share.png";
    import dots from "$lib/public/images/dots.png";
    import save_b from "$lib/public/images/save_b.png";
    import dollar from "$lib/public/images/dollar.png";
    import bitcoin from "$lib/public/images/bitcoin.png";
    import reco_1 from "$lib/public/images/reco_1.png";
    import reco_2 from "$lib/public/images/reco_2.png";
    import reco_3 from "$lib/public/images/reco_3.png";
    import next_reco from "$lib/public/images/next_reco.png";

    let act: boolean = false;
</script>

<Navpro></Navpro>
<section>
    <div class="lg:absolute lg:top-55 lg:pt-7 lg:px-7">
        <div class="flex justify-start px-4">
            <button class="border border-gray-300 rounded-full px-2 py-2"
                ><img src={previous} alt="previous" class="w-4 h-4" /></button
            >
        </div>
    </div>
    <div class="container flex flex-col lg:px-20">
        <div class="flex lg:justify-center md:justify-center">
            <div
                class="flex flex-wrap justify-start pt-6 pb-3 lg:px-20 space-x-2 border-b lg:items-center md:items-center items-center  "
            >
                <div class="py-1 lg:pt-2 md:pt-3">
                    <button
                        ><img src={undo} alt="undo" class="w-5 h-5" /></button
                    >
                    <button
                        ><img src={redo} alt="redo" class="w-5 h-5" /></button
                    >
                </div>
                <div class="font-secondary text-xs border-l border-r px-3 py-1 md:py-3 lg:py-1">
                    <select class="rounded pr-4 hover:border-black">
                        <option>Style</option>
                    </select>
                </div>
                <div class="border-r pr-3 py-1 lg:pt-2 md:pt-3">
                    <button
                        ><img src={bold} alt="bold" class="w-5 h-5" /></button
                    >
                    <button
                        ><img
                            src={italic}
                            alt="italic"
                            class="w-5 h-5"
                        /></button
                    >
                    <button
                        ><img
                            src={strike}
                            alt="strike"
                            class="w-5 h-5"
                        /></button
                    >
                    <button
                        ><img
                            src={underline}
                            alt="underline"
                            class="w-5 h-5"
                        /></button
                    >
                </div>
                <div class="border-r pr-2 py-1 lg:pt-2 md:pt-3">
                    <button
                        ><img src={code} alt="code" class="w-5 h-5" /></button
                    >
                </div>
                <div class="border-r pr-3 py-1 mt-2">
                    <button
                        ><img src={link} alt="link" class="w-6 h-6" /></button
                    >
                    <button><img src={img} alt="img" class="w-6 h-6" /></button>
                    <button
                        ><img
                            src={headphone}
                            alt="headphone"
                            class="w-6 h-6"
                        /></button
                    >
                </div>
                <div class="border-r pr-3 pt-2 mt-2 lg:pb-1 md:pb-1">
                    <button
                        ><img
                            src={vineta}
                            alt="vineta"
                            class="w-5 h-5"
                        /></button
                    >
                    <button
                        ><img src={list} alt="list" class="w-5 h-5" /></button
                    >
                </div>
                <div
                    class="font-secondary text-xs border-r px-3 pt-2 mt-2 lg:mt-0 md:mt-0"
                >
                    <select class="rounded pr-4 hover:border-black">
                        <option>More</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="lg:px-14 lg:ml-6">
            <div class="file-input-container">
                <label class="file-label" for="file">Añadir portada</label>
                <input type="file" id="file" class="file-input" />
            </div>
        </div>

        <div class="font-secondary font-bold pb-10 text-2xl lg:px-20 py-7">
            <h1>My first article...</h1>
        </div>
        <div class=" flex justify-between pb-3 lg:px-20">
            <div class="flex space-x-1">
                <div class="border rounded px-1 pb-1">
                    <select class="font-secondary text-xs lg:text-sm text-gray-600 items-center">
                        <option> Seleccionar categoría </option>
                    </select>
                </div>
            </div>
            <div class="flex">
                <div class="font-secondary text-xs lg:text-sm text-gray-600">
                    <button
                        id="settings"
                        class="flex space-x-1 bg-gray-100 rounded py-1 px-2 hover:bg-gray-300"
                    >
                        <img
                            src={settings_2}
                            alt="settings_2"
                            class="w-4 h-4 lg:w-5 lg:h-5"
                        />
                        <label for="settings">Configuracion</label>
                    </button>
                </div>
            </div>
        </div>
        <div class="pt-10 lg:px-20">
            <div class=" font-secondary text-sm py-4">
                <p>
                    Blockchain technology has emerged as a groundbreaking
                    innovation with the potential to revolutionize industries
                    and transform our digital landscape. However, as we delve
                    into the intricacies of blockchain, we often encounter a
                    daunting array of technical terms, complex concepts, and
                    seemingly impenetrable jargon.
                </p>
            </div>
            <div class="hover:border-black">
                <div class={act ? "block" : "hidden"}>
                    <div class="absolute overflow-visible pt-3 pl-20">
                        <div class="bg-black flex py-2 w-40">
                            <div class="border-r px-2">
                                <button
                                    ><img
                                        src={crop}
                                        alt="crop"
                                        class="w-5 h-5"
                                    /></button
                                >
                            </div>
                            <div class="px-2">
                                <select class="bg-black text-white text-s">
                                    <option>Edit image</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src={dollar}
                    alt="dollar"
                    class="py-4"
                    on:click={() => (act = !act)}
                />
            </div>
        </div>
        <div class="font-secondary text-xs lg:text-sm text-gray-500 pb-4 lg:px-14 lg:ml-6">
            <span>Press 'Space' to add picture</span>
        </div>
    </div>
</section>
<Footer></Footer>

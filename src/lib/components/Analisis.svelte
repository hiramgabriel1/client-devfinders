<script>
    import "../../app.css"
    import security from "$lib/public/images/private.png"
    import peoplegreen from "$lib/public/images/peoplegreen.png"
    import star from "$lib/public/images/star.png"
    import search from "$lib/public/images/search.png"
</script>
<div class="border border-gray-200 rounded-lg py-6 lg:h-56 w-full">
    <div class="flex justify-between px-5 py-6 lg:py-0">
        <h3 class="font-semibold text-lg">Analisis</h3>
        <div class="flex">
            <img src={security} alt="" class="w-5 h-5">
            <p class="text-gray-400 text-xs px-3">Private for you</p>
        </div>
    </div>
    <div class="px-3 flex justify-around flex-col lg:flex-row lg:space-y-0 space-y-5 py-6">
        <div class="border border-gray-300 rounded-lg p-4 text-sm space-y-1">
            <img src={peoplegreen} alt="" class="w-5 h-5">
            <p class="font-secondary">200 viewers</p>
            <p class="text-sm text-gray-500">Amet eiusmod</p>
        </div>
        <div class="border border-gray-300 rounded-lg p-4 text-sm space-y-1">
            <img src={peoplegreen} alt="" class="w-5 h-5">
            <p class="font-secondary">200 viewers</p>
            <p class="text-sm text-gray-500">Amet eiusmod</p>
        </div>
        <div class="border border-gray-300 rounded-lg p-4 text-sm space-y-1">
            <img src={star} alt="" class="w-5 h-5">
            <p class="font-secondary">100 calificaciones</p>
            <p class="text-sm text-gray-500">participacion en proyectos</p>
        </div>
        <div class="border border-gray-300 rounded-lg p-4 text-sm space-y-1">
            <img src={search} alt="" class="w-5 h-5">
            <p class="font-secondary">70 busquedas</p>
            <p class="text-sm text-gray-500">amet eiusmod</p>
        </div>
    </div>
</div>
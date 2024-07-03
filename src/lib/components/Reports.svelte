<script>
    import profile from "$lib/public/images/profile.png";
    import "../../app.css";
</script>

<div
    class="border border-slate-200 rounded py-2 px-2 flex flex-col lg:flex-row lg:justify-between lg:p-6"
>
    <div class="flex flex-row">
        <div class="flex items-center lg:items-start lg:py-2">
            <img src={profile} alt="profile" class="rounded-full w-9 h-9 lg:h-12 lg:w-12" />
        </div>
        <div class="flex flex-col ">
            <div
                class="text-xs font-secondary font-semibold px-2 py-1 flex space-x-2 items-center lg:text-sm"
            >
                <p>Falla en creacion de trabajos</p>
            </div>
            <div
                class="flex font-secondary text-slate-500 space-x-2 text-xs px-2 lg:text-sm"
            >
                <p>24/09/2003</p>
                <p class="border-l px-2">UI Designer at Amet Company</p>
            </div>
        </div>
    </div>
    <div class="text-xs font-secondary font-semibold space-x-2 px-11 flex items-center py-3 lg:py-0">
        <button
            class="bg-red-200 text-red-500 border-transparent rounded px-1 lg:p-2 lg:text-sm"
            >Eliminar</button
        >
        <button
            class="bg-color-blue-highlight text-white border-transparent rounded px-1 lg:p-2 lg:text-sm"
            >Editar</button
        >
    </div>
</div>

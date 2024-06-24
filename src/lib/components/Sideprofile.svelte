<script>
    import "../../app.css"
    import user from "$lib/public/images/profile.png"
</script>
<div class="flex flex-col items-center border border-gray-200 rounded-lg py-6 lg:w-80 xl:w-96 md:justify-center relative">
    <div>
        <img src={user} alt="" class="w-24 h-24 rounded-full md:w-32 md:h-32">
    </div>
    <div class="text-center text-color-blue-highlight font-secondary text-lg py-3">
        <h3 class="text-lg font-bold md:text-xl">Jafett Rutherford</h3>
        <p class="text-black text-sm md:text-base">UI/UX Designer</p>
    </div>
    <div class="text-center font-secondary py-3 px-3">
        <p class="text-gray-400 text-xs">I'm a UI/UX desginer with 20 years of experience, I love work and videogames.</p>
        <div class="w-auto flex space-x-3 py-3 justify-center">
            <p class="bg-gray-100 w-auto px-2 py-1 rounded text-xs">UX Research</p>
            <p class="bg-gray-100 w-auto px-2 py-1 rounded text-xs">UI Design</p>
            <p class="bg-gray-100 w-auto px-2 py-1 rounded text-xs">Web Design</p>
        </div>
    </div>

    <div class="border-t border-gray-200 flex flex-col">
        <div class="flex items-start flex-col py-3 text-xs font-bold">
            <p class="text-start text-gray-600">LinkedIn</p>
            <input type="text" name="" id="" class="bg-gray-100 w-64 py-1 rounded">
        </div>
        <div class="flex items-start flex-col py-3 text-xs font-bold">
            <p class="text-start text-gray-600">GitHub</p>
            <input type="text" name="" id="" class="bg-gray-100 w-64 py-1 rounded">
        </div>
        <div class="flex items-start flex-col py-3 text-xs font-bold">
            <p class="text-start text-gray-600">Instagram</p>
            <input type="text" name="" id="" class="bg-gray-100 w-64 py-1 rounded">
        </div>
        <div class="py-3 text-center text-white font-secondary">
            <a href="" class="bg-color-blue-highlight px-16 py-3 rounded">Editar perfil</a>
        </div>
    </div>
</div>
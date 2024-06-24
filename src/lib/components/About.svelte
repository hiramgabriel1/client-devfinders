<script>
    import bag from "$lib/public/images/bag.png";
    import "../../app.css"
</script>

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
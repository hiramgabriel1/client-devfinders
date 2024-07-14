<script>
   import "../../app.css"
   import redis_icon from "$lib/public/images/redis.svg"
    import nest_icon from "$lib/public/images/nestjs.svg"
    import typescript_icon from "$lib/public/images/typescript.svg";
    import postgre_icon from "$lib/public/images/postgresql.svg"
    import docker_icon from "$lib/public/images/docker.svg"
    import svelt_icon from "$lib/public/images/svelte.svg"
    import tailwindcss_icon from "$lib/public/images/tailwindcss.svg"
</script>

<section class="bg-gray-100">
    <div class="container py-6">
        <div class="text-center text-gray-400 py-2">
            <p>Desarrollado con:</p>
        </div>
        <div class="flex items-center justify-center space-x-2 lg:space-x-6">
            <img src={redis_icon} alt="" class="w-8 lg:w-12">
            <img src={nest_icon} alt="" class="w-8 lg:w-12">
            <img src={typescript_icon} alt="" class="w-8 lg:w-12">
            <img src={postgre_icon} alt="" class="w-8 lg:w-12">
            <img src={docker_icon} alt="" class="w-8 lg:w-12">
            <img src={svelt_icon} alt="" class="w-8 lg:w-12">
            <img src={tailwindcss_icon} alt="" class="w-8 lg:w-12">
        </div>
    </div>
</section>
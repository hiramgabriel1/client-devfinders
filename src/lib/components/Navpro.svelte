<script>
    import "../../app.css"
    import logo from "$lib/public/images/logo.png"
    import notify from "$lib/public/images/notify.png"
    import chat from "$lib/public/images/chat.png"
    import profile from "$lib/public/images/profile.png"
</script>
<header>
    <nav class="flex items-center justify-between px-3 md:pr-10">
        <div class="w-68 py-3 flex items-center">
            <img src={logo} alt="" class="w-10 h-10 sm:w-16 sm:h-16">
            <div class="px-5">
                <ul class="text-gray-600 hidden lg:flex items-center space-x-6">
                    <li><a href="Home">Home</a></li>
                    <li><a href="Jobs">All jobs</a></li>
                    <li><a href="Compaines">Companies</a></li>
                    <li><a href="People">People</a></li>
                    <li><a href="Career">Career Advices</a></li>
                </ul>
            </div>
        </div>
        <div class="flex space-x-4">
            <img src={notify} alt="" class="h-8 w-8 md:h-10 md:w-10">
            <img src={chat} alt="" class="h-8 w-8 md:h-10 md:w-10">
            <img src={profile} alt="" class="rounded-full w-8 h-8 md:w-10 md:h-10">
        </div>
    </nav>
</header>
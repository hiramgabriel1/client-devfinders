<script>
    import "../../app.css"
    import logo from "$lib/public/images/logo.png"
</script>
<header>
    <nav class="flex items-center justify-between px-3">
        <div class="w-68 py-3 flex items-center">
            <img src={logo} alt="" class="w-10 h-10 lg:w-14 lg:h-14">
            <div class="px-5">
                <ul class="text-gray-600 hidden lg:flex items-center space-x-6">
                    <li class="hover:text-color-blue-highlight"><a href="Home">Home</a></li>
                    <li class="hover:text-color-blue-highlight"><a href="Jobs">All jobs</a></li>
                    <li class="hover:text-color-blue-highlight"><a href="Compaines">Companies</a></li>
                    <li class="hover:text-color-blue-highlight"><a href="People">People</a></li>
                    <li class="hover:text-color-blue-highlight ease-in duration-200"><a href="Career">Career Advices</a></li>
                </ul>
            </div>
        </div>
        <div>
            <a href="Start" class="text-xs md:text-base px-4 py-1 md:px-10 md:py-3 border border-black rounded-3xl capitaliz hover:border-color-blue-highlight hover:bg-color-blue-highlight hover:text-white ease-in duration-200">Start</a>

            <a href="Start" class="text-xs md:text-base px-4 py-1 md:px-9 md:py-3 border text-black border-black rounded-3xl capitaliz  hover:border-color-blue-highlight hover:bg-color-blue-highlight hover:text-white ease-in duration-200">Log In</a>
        </div>
    </nav>
</header>
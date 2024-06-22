<script>
    import "../../app.css";
    // import logo from "$lib/public/images/logo.png"
    import logo from  "$lib/public/images/logo.png"
</script>

<footer>
    <div class="bg-color-dark-footer relative">
        <div class="container py-10">
            <div class="grid gap-2 md:grid-cols-5 pb-10">
                <div>
                    <img src={logo} alt="" class="w-10 h-10 lg:w-14 lg:h-14">
                </div>
                <div class="flex justify-between md:justify-around">
                    <div class="space-y-6">
                        <h4 class="text-gray-300 font-bold text-lg">Product</h4>
                        <ul class="text-gray-200 text-sm space-y-3">
                            <li>All jobs</li>
                            <li>Companies</li>
                            <li>Candidates</li>
                        </ul>
                    </div>
                </div>
                <div class="flex justify-between md:justify-around">
                    <div class="space-y-6">
                        <h4 class="text-gray-300 font-bold text-lg">Resources</h4>
                        <ul class="text-gray-200 text-sm space-y-3">
                            <li>Blog</li>
                            <li>User guides</li>
                            <li>Webinars</li>
                        </ul>
                    </div>
                </div>
                <div class="flex justify-between md:justify-around">
                    <div class="space-y-6">
                        <h4 class="text-gray-300 font-bold text-lg">Company</h4>
                        <ul class="text-gray-200 text-sm space-y-3">
                            <li>About</li>
                            <li>Join us</li>
                        </ul>
                    </div>
                </div>
                <div class="flex justify-between md:justify-around">
                    <div class="space-y-6">
                        <h4 class="text-color-blue-highlight font-bold">Subscribe to our newsletter</h4>
                        <p class="text-xs text-gray-200">For product announcements and exclusive insights</p>
                        <div>
                            <input type="text" name="Email" id="" placeholder="Input your email" class="text-white bg-color-dark-footer border boder-white rounded hover:border-color-blue-highlight">
                            <button class="bg-color-blue-highlight px-6 text-white">Send</button>
                        </div> 
                    </div>
                </div>
            </div>
            <div class="pt-10">
                <p class="text-center text-white ">©Findev •Privacy •Terms •Sitemap</p>
            </div>
        </div>
    </div>
</footer>
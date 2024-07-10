<script>
    import Navpro from "$lib/components/common/Navpro.svelte";
    import arrowdown_icon from "$lib/public/images/arrow_down.png"
    import user_img from "$lib/public/images/profile.png"
    import save_icon from "$lib/public/images/save_icon.png"
    import close_icon from "$lib/public/images/close_icon.png"
    import trash_icon from "$lib/public/images/trash_icon.png"
    import Footer from "$lib/components/Footer.svelte";
    import "../../../app.css"

</script>

<Navpro></Navpro>
<section class="container py-6" id="General">
    <div class="px-6 py-6">
        <div class="flex place-content-around">
            <div class="flex items-center">
                <h2 class="text-xl font-semibold lg:text-4xl">
                    Edit Profile
                </h2>
            </div>
            <div class="space-x-3 flex items-center text-sm lg:text-base">
                <button class="p-2 border rounded-lg hover:outline-color-blue-light ease-in duration-200 hover:text-color-blue-highlight hover:border-color-blue-highlight">Cancel</button>
                <button class="p-2 px-3 bg-color-blue-highlight rounded-lg text-white ease-in duration-200 flex items-center space-x-2"><img src={save_icon} alt="" class="w-5 h-5">Save</button>
            </div>
        </div>
    </div>
    <div class="flex-col border border-gray-400 rounded-lg lg:w-[70%] mx-auto">
        <div class="px-3 lg:px-6 py-3">
            <div>
                <div class="flex justify-between py-3 text-center">
                    <div class="flex flex-col lg:flex-row lg:space-x-3 lg:items-center flex-wrap space-y-2 lg:space-y-0">
                        <h3 class="text-sm lg:text-lg">GENERAL INFORMATION</h3>
                        <p class="text-xs lg:text-sm text-color-secondary-highlight bg-color-secondary px-2 rounded-full lg:w-auto">100% completed</p>
                    </div>
                    <div class="flex items-center hover:bg-color-blue-light hover:rounded-full px-3 lg:px-2 py-2 ease-in duration-200">
                        <img src={arrowdown_icon} alt="" class="w-4 h-4 lg:w-6 lg:h-6">
                    </div>
                </div>
            </div>
        </div>

        <div class="flex justify-center flex-col py-4 lg:px-6">
            <div class="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-3 items-center justify-center lg:justify-start px-8">
                <img src={user_img} alt="" class="w-24 lg:w-20 lg:h-20 h-24 rounded-full">
                <div class="flex space-x-3">
                    <button class="p-2 focus:bg-color-blue-light focus:text-color-blue-highlight border rounded-lg focus:border-color-blue-highlight">Change</button>
                    <button class="p-2 focus:bg-color-blue-light focus:text-color-blue-highlight border rounded-lg focus:border-color-blue-highlight">Delete</button>
                </div>
                
            </div>
        </div>
        <div class="py-3 lg:px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2">
                <div class="space-y-2 px-3 lg:px-12 flex flex-col">
                    <p>Name</p>
                    <input
                    class="block bg-slate-200 w-full rounded focus:border-color-blue-highlight px-3"
                    />
                </div>
                <div class="space-y-2 px-3 lg:px-12 flex flex-col">
                    <p>Title</p>
                    <input
                    class="block bg-slate-200 w-full rounded focus:border-color-blue-highlight px-3" 
                    />
                </div>
            </div>
        </div>
        <div class="py-3 lg:px-6 space-y-3">
            <div class="px-12 flex flex-col justify-center lg:flex-row lg:justify-start lg:items-center">
                <div class="flex justify-center lg:justify-start">
                    <p>Profesional skills</p>
                </div>
            </div>
            <div class=" px-3 lg:px-12 flex flex-col justify-center lg:justify-start lg:items-center lg:flex-row space-y-3 lg:space-y-0 lg:space-x-3">
                <div class="flex justify-center lg:justify-start bg-color-blue-highlight p-2 rounded-lg space-x-3 items-center">
                    <p class="text-white">UX Research</p>
                    <button><img src={close_icon} alt="" class="w-4 h-4"></button>
                </div>
                <div class="flex justify-center lg:justify-start bg-color-blue-highlight p-2 rounded-lg space-x-3 items-center">
                    <p class="text-white">UI Design</p>
                    <button><img src={close_icon} alt="" class="w-4 h-4"></button>
                </div>
                <div class="flex justify-center lg:justify-start bg-color-blue-highlight p-2 rounded-lg space-x-3 items-center">
                    <p class="text-white">Web Design</p>
                    <button><img src={close_icon} alt="" class="w-4 h-4"></button>
                </div>
                <div class="flex justify-center lg:justify-start rounded-lg space-x-3 items-center">
                    <button><p class="text-color-blue-highlight">Add +</p></button>
                </div>
            </div>
        </div>
        <div class="py-4 px-3 lg:px-16">
            <p class="font-secondary font-bold text-slate-600 py-2">
              Description
            </p>
            <textarea
              class="block bg-slate-200 w-full rounded focus:border-color-blue-highlig px-3 py-2"
            ></textarea>
        </div>

        <div class="py-3">
            <div class=" px-3 lg:px-16 text-center text-color-secondary-highlight">
                <p class="p-2 bg-color-secondary rounded">This is how talent figures out what you need and why you're to work with</p>
            </div>
        </div>

        <div class="py-5">
            <div class="flex justify-end px-12 text-color-blue-highlight font-secondary">
                <button>More options</button>
            </div>
        </div>
    </div>
</section>

<section class="container py-6" id= "Aboutme">
    <div class="flex-col border border-gray-400 rounded-lg lg:w-[70%] mx-auto">
        <div class="lg:container py-6">
            <div class="flex justify-between py-3 px-3 items-center">
                <div class="flex flex-col lg:flex-row lg:space-x-3 lg:items-center flex-wrap space-y-2 lg:space-y-0 text-center">
                    <h3 class="text-sm lg:text-lg">About</h3>
                    <p class="text-xs lg:text-sm text-color-secondary-highlight bg-color-secondary px-2 rounded-full lg:w-auto">Open to work</p>
                </div>
                <div class="flex items-center hover:bg-color-blue-light hover:rounded-full px-3 lg:px-2 py-2 ease-in duration-200">
                    <img src={arrowdown_icon} alt="" class="w-4 h-4 lg:w-6 lg:h-6">
                </div>
            </div>
        </div>

        <div class="py-4 px-3 lg:px-16">
            <p class="font-secondary font-bold text-slate-600 py-2">
              Description
            </p>
            <textarea
              class="block bg-slate-200 w-full rounded focus:border-color-blue-highlig px-3 py-2"
            ></textarea>
        </div>
        <div class="py-5">
            <div class="flex justify-between px-12 font-secondary">
                <label class="px-2 py-4" for="chk_1"
                ><input type="checkbox" id="chk_1" name="chk_1" class="py-4" /> Open to work
                </label>
                <button class=" text-color-blue-highlight">More options</button>
            </div>
        </div>
    </div>
</section>

<section class="container py-6">
    <div class="flex-col border border-gray-400 rounded-lg lg:w-[70%] mx-auto">
        <div class="container py-6">
            <div class="flex justify-between py-3 px-3 items-center">
                <div class="flex flex-col lg:flex-row lg:space-x-3 lg:items-center flex-wrap space-y-2 lg:space-y-0 text-center">
                    <h3 class="text-sm lg:text-lg">Working Experience</h3>
                    <p class="text-xs lg:text-sm text-color-secondary-highlight bg-color-secondary px-2 rounded-full lg:w-auto">1 company</p>
                </div>
                <div class="flex items-center hover:bg-color-blue-light hover:rounded-full px-3 lg:px-2 py-2 ease-in duration-200">
                    <img src={arrowdown_icon} alt="" class="w-4 h-4 lg:w-6 lg:h-6">
                </div>
            </div>
        </div>
        <div class="container">
            <div class="flex justify-between py-3 px-3 items-center">
                <div class="flex flex-col lg:flex-row lg:space-x-3 lg:items-center flex-wrap space-y-2 lg:space-y-0 text-center">
                    <h3 class="text-sm lg:text-lg text-color-blue-highlight font-semibold">Working Experience</h3>
                </div>
                <div class="flex items-center hover:bg-color-blue-light hover:rounded-full px-3 lg:px-2 py-2 ease-in duration-200"><button><img src={trash_icon} alt="" class="w-4 h-4 lg:w-6 lg:h-6"></button>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="flex flex-col md:flex-row gap-2 lg:space-x-12">
                <div class="w-full gap-3">
                  <p class="font-secondary font-bold text-slate-600 py-2">
                    Company name
                  </p>
                  <input
                    class="block bg-slate-200 rounded w-full focus:border-color-blue-highlight px-3"
                  />
                </div>
                <div class="w-full">
                  <p class="font-secondary font-bold text-slate-600 py-2">
                    Employment Type
                  </p>
                  <select name="" id="">
                      <option value="">Full-time</option>
                      <option value="">Middle time</option>
                      <option value="">Custom</option>
                  </select>
                </div>
              </div>
        </div>
        <div class="container">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 py-4">
                <div class="gap-3">
                  <p class="font-secondary font-bold text-slate-600 py-2">
                    Title
                  </p>
                  <input
                    class="block bg-slate-200 w-full rounded focus:border-color-blue-highlight px-3"
                    />
                </div>
                <div class="flex md:items-center md:justify-center md:pt-9">
                  <div class="">
                    <label class="px-2 py-4" for="chk_1"
                      ><input type="checkbox" id="chk_1" name="chk_1" class="py-4" /> I am currently working in this role.
                    </label>
                  </div>
                </div>
              </div>
        </div>
        <div class="container">
            <div class="grid grid-cols-1 lg:grid-cols-2 lg:space-x-5">
                <div class="space-y-2 flex flex-col">
                    <p>Start date</p>
                    <input
                    type="date"
                    class="block bg-slate-200 w-full rounded focus:border-color-blue-highlight px-3"
                    />
                </div>
                <div class="space-y-2  flex flex-col">
                    <p>End date</p>
                    <input type="date"
                    class="block bg-slate-200 w-full rounded focus:border-color-blue-highlight px-3" 
                    />
                </div>
            </div>
        </div>
        <div class="container">
            <div class="py-4 lg:px-16">
                <p class="font-secondary font-bold text-slate-600 py-2">
                  Description
                </p>
                <textarea
                  class="block bg-slate-200 w-full rounded focus:border-color-blue-highlig px-3 py-2"
                ></textarea>
            </div>
        </div>
        <div class="py-5">
            <div class="flex justify-end px-12 text-color-blue-highlight font-secondary">
                <button>More options</button>
            </div>
        </div>
        <div class="py-5">
            <div class="flex justify-end px-12 text-white font-secondary">
                <button class="bg-color-blue-highlight p-2 rounded">+Add job</button>
            </div>
        </div>
    </div>
</section>

<Footer></Footer>
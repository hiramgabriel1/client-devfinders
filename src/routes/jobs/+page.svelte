<script>
    import FilterJobs from "$lib/components/common/FilterJobs.svelte";
  import Navpro from "$lib/components/common/Navpro.svelte";
  import JobOption from "$lib/components/JobOption.svelte";
  import placeImg from "$lib/public/images/paisaje.jpg"
  import shareIcon from "$lib/public/images/share.png"
  import heartIcon from "$lib/public/images/heartIcon.png"
</script>
<Navpro></Navpro>
<FilterJobs></FilterJobs>
<section>
    <div class="container font-semibold py-4">
        <p>32 Results for <span class="text-color-blue-highlight">'Designer'</span></p>
    </div>
</section>

<section>
    <div class="container py-3">
        <div class="flex justify-around">
            <div class="flex flex-col lg:flex-start justify-center lg:justify-start">
                <JobOption></JobOption>
                <JobOption></JobOption>
                <JobOption></JobOption>
                <JobOption></JobOption>
                
            </div>
            <div class="border border-gray-300 rounded">
                <div>
                    <div class="relative w-full h-52">
                        <img src={placeImg} alt="" class="w-full object-cover h-auto clip-half-height">
                        <style>
                            .clip-half-height {
                               clip-path: inset(0 0 60% 0);
  }
                        </style>
                    </div>
                    <div class="flex justify-between items-center px-10">
                        <div class="text-lg font-semibold">
                            <h3>Proyecto Ecommerce</h3>
                        </div>
                        <div class="flex space-x-2">
                            <button>
                                <img src={shareIcon} alt="" class="w-4">
                            </button>
                            <button class="flex space-x-1 bg-color-blue-light p-2 rounded">
                                <img src={heartIcon} alt="" class="w-4">
                                <p class="text-color-blue-highlight text-xs">Save</p>
                            </button>
                            <button class="bg-color-blue-highlight text-white px-2 rounded">
                                <p class="text-xs">Aplicar</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
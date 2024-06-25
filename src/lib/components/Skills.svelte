<script>
      import saveIcon from "$lib/public/images/save.png";
      import peopleorangeIcon from "$lib/public/images/peopleorange.png";
      import "../../app.css"
      import aprovedIcon from "$lib/public/images/aproved.png";
</script>

<div class="border border-gray-200 rounded-lg py-6 lg:46 w-full">
    <div class="px-5">
        <div class="flex flex-row space-x-5">
            <h2 class="text-lg font-semibold">Skills</h2>
        </div>
        <div class="flex py-6 text-white text-sm lg:text-base space-x-4">
            <p class="hover:bg-color-blue-highlight px-4 py-1 rounded-full text-black hover:text-white ease-in duration-200">All</p>
            <p class="hover:bg-color-blue-highlight px-4 py-1 rounded-full text-black hover:text-white ease-in duration-200">Industry Knowledge</p>
            <p class="hover:bg-color-blue-highlight px-4 py-1 rounded-full text-black hover:text-white ease-in duration-200">Tools & Technologies</p>
        </div>
        <div class="px-4 space-y-8">
            <div class="flex space-x-4 items-center">
                <img src={aprovedIcon} alt="" class="w-4 h-4">
                <h2>Design Software</h2>
                <div class="flex bg-color-purple-light rounded-full items-center text-xs px-3 py-1 space-x-1">
                    <img src={saveIcon} alt="" class="w-3 h-3">
                    <p class="text-color-purple-dark">5 Years of Exp</p>
                </div>
                <div class="flex bg-color-secondary rounded-full items-center text-xs px-3 py-1 space-x-1">
                    <img src={peopleorangeIcon} alt="" class="w-3 h-3">
                    <p class="text-color-secondary-highlight">20 Endorsements</p>
                </div>
            </div>

            <div class="flex space-x-4 items-center">
                <img src={aprovedIcon} alt="" class="w-4 h-4">
                <h2>NestJS</h2>
                <div class="flex bg-color-purple-light rounded-full items-center text-xs px-3 py-1 space-x-1">
                    <img src={saveIcon} alt="" class="w-3 h-3">
                    <p class="text-color-purple-dark">3 Years of Exp</p>
                </div>
                <div class="flex bg-color-secondary rounded-full items-center text-xs px-3 py-1 space-x-1">
                    <img src={peopleorangeIcon} alt="" class="w-3 h-3">
                    <p class="text-color-secondary-highlight">1 Endorsements</p>
                </div>
            </div>

            <div class="flex space-x-4 items-center">
                <img src={aprovedIcon} alt="" class="w-4 h-4">
                <h2>Typescript</h2>
                <div class="flex bg-color-purple-light rounded-full items-center text-xs px-3 py-1 space-x-1">
                    <img src={saveIcon} alt="" class="w-3 h-3">
                    <p class="text-color-purple-dark">3 Years of Exp</p>
                </div>
            </div>

            <div class="flex space-x-4 items-center">
                <img src={aprovedIcon} alt="" class="w-4 h-4">
                <h2>Kafka</h2>
                <div class="flex bg-color-purple-light rounded-full items-center text-xs px-3 py-1 space-x-1">
                    <img src={saveIcon} alt="" class="w-3 h-3">
                    <p class="text-color-purple-dark">5 Years of Exp</p>
                </div>
            </div>
        </div>
    </div>
</div>
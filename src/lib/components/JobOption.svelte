<script>
    import "../../app.css"
    import jobIcon from "$lib/public/images/trabajoIcon1.png"
    import homeIcon from "$lib/public/images/homeIcon.png"
    import locationIcon from "$lib/public/images/location_icon.png"
    import saveIcon from "$lib/public/images/save_b.png"
</script>

<div class="py-3">
    <div class="lg:w-96 focus:bg-color-blue-light border rounded-lg border-gray-300 ">
        <div class="flex justify-around items-center py-3">
            <div>
                <img src={jobIcon} alt="jobIcon">
            </div>
            <div>
                <p class="text-lg font-semibold">Ecommerce</p>
                <p>$110k-120k</p>
            </div>
            <div>
                <p class="bg-color-secondary px-2 py-1 text-color-secondary-highlight text-xs rounded-lg">Hot</p>
            </div>
        </div>
        <div class="flex lg:flex-col py-3">
            <div class="px-10 flex justify-around lg:justify-start items-center lg:items-start space-x-3 lg:space-x-0 lg:flex-col lg:space-y-3">
                <div class="flex items-center text-gray-300 text-xs space-x-3 space-y-2">
                    <img src={homeIcon} alt="" class="w-5 h-5">
                    <p>Laborum</p>
                </div>
                <div class="flex items-center text-gray-300 text-xs space-x-3">
                    <img src={locationIcon} alt="" class="w-4 h-4">
                    <p>Location</p>
                </div>
                <div class="flex items-center text-gray-300 text-xs space-x-3">
                    <img src={saveIcon} alt="" class="w-4 h-4">
                    <p>Save</p>
                </div>
            </div>
    
        </div>
    </div>
</div>
<script lang="ts">
    import profile from "$lib/public/images/profile.png";
    import next from "$lib/public/images/next.png";
    import "../../app.css";

    const handleFollowPerson = async () => {}
</script>

<div class="flex space-x-2 justify-between py-4">
    Proximamente...
    <div class="flex space-x-2 hidden">
        <div class="pt-1">
            <img src={profile} alt="profile" class="w-6 h-6 rounded-full" />
        </div>
        <div>
            <div class="font-secondary font-semibold text-slate-600 text-s">
                <span>Anthony Taylor</span>
            </div>
            <div class="font-secondary text-xs text-slate-700 pt-1">
                <span>3D modeling made easy</span>
            </div>
        </div>
    </div>

    <div>
        <div class="font-secondary text-s hidden"> 
            <button
                class="bg-color-purple-light text-color-purple-dark rounded px-2"
                on:click={handleFollowPerson}>
                Follow
            </button>
        </div>
    </div>
</div>


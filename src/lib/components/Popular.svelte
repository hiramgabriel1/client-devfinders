<script lang="ts">
    import save_b from "$lib/public/images/save_b.png";
    import profile from "$lib/public/images/profile.png";
    import "../../app.css";
</script>
<div class="py-2 font-secondary">
    <div>
        <div>
            <h1 class="font-semibold text-sm">
                #1: So, exactly at which point does productivity
                turn toxic?
            </h1>
        </div>
    </div>
    <div class="">
        <div class="flex justify-between">
            <div class="pt-1">
                <div class="flex text-xs space-x-2 pt-4">
                    <div
                        class="flex space-x-1 bg-slate-50 rounded-full px-2 text-slate-500"
                    >
                        <div><span>1.8M</span></div>
                        <div><span>4K</span></div>
                    </div>
                </div>
            </div>

            <div class="py-4 flex space-x-2">
                <div>
                    <button><img src={save_b} alt="save" /></button>
                </div>
                <div class="flex space-x-1">
                    <img
                        src={profile}
                        alt="profile"
                        class="w-6 h-6 rounded-full"
                    />
                    <div>
                        <span
                            class="font-secondary text-xs font-semibold text-slate-500"
                            >Benjamin Foster</span
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
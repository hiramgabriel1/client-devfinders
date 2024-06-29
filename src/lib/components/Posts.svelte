<script lang="ts">
    import save_b from "$lib/public/images/save_b.png";
    import people_2 from "$lib/public/images/people_2.png";
    import profile from "$lib/public/images/profile.png";
    import "../../app.css";
</script>

<div>
    <div class="py-1 lg:px-4">
        <div class="rounded-sm py-2 px-2 flex flex-col lg:py-4">
            <div class="flex space-x-2">
                <div class="flex flex-row-reverse w-1/2 pt-4">
                    <div class="flex flex-col">
                        <div
                            class="text-xs font-secondary font-semibold py-2 flex space-x-2 items-center lg:text-sm"
                        >
                            <h1>The economics behind unpaid intership</h1>
                        </div>
                        <div
                            class="flex font-secondary text-slate-600 space-x-2 text-xs lg:text-sm"
                        >
                            <p>
                                Corporates contend that unpaid internships serve
                                as a stepping stone towards future employment,
                                offering invaluable industry exposure...
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex items-center lg:items-start lg:py-2 w-1/2">
                    <img src={people_2} alt="people" class="w-60 h-30" />
                </div>
            </div>

            <div class="pt-3 lg:flex">
                <div class="flex text-xs space-x-2 justify-between">
                    <div>
                        <div class="flex space-x-2">
                            <div class="w-14">
                                <span class="border rounded-full px-2"
                                    >Popular</span
                                >
                            </div>
                            <div class="w-15">
                                <span
                                    class="border rounded-full bg-slate-300 border-transparent text-slate-500 px-2"
                                    >8 min read</span
                                >
                            </div>
                            <div
                                class="flex space-x-1 bg-slate-50 rounded-full px-2 text-slate-500"
                            >
                                <div><span>1.8M</span></div>
                                <div><span>4K</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="lg:pl-6 sm:pr-11">
                        <div class="flex">
                            <button
                                ><img
                                    src={save_b}
                                    alt="save"
                                    class="w-5 h-5"
                                /></button
                            >
                        </div>
                    </div>
                </div>

                <div class="lg:px-1">
                    <div class="py-3 flex space-x-2 lg:py-0">
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
    </div>
</div>

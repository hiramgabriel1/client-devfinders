<script lang="ts">
  import Navpro from "$lib/components/Navpro.svelte";
  import Posts from "$lib/components/Posts.svelte";
  import Popular from "$lib/components/Popular.svelte";
  import Followed from "$lib/components/Followed.svelte";
  import Publicity from "$lib/components/Publicity.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import settings from "$lib/public/images/settings.png";
  import save_b from "$lib/public/images/save_b.png";
  import people from "$lib/public/images/people.png";
  import write from "$lib/public/images/write.png";
  import increase from "$lib/public/images/increase.png";
  import pin from "$lib/public/images/pin.png";
  import next from "$lib/public/images/next.png";
  import close from "$lib/public/images/close.png";
  import explore from "$lib/public/images/explore.png";
  import shine from "$lib/public/images/shine.png";
  import menu from "$lib/public/images/hamburguer.png";
  import people_2 from "$lib/public/images/people_2.png";
  import profile from "$lib/public/images/profile.png";
  import { type PopularPostInterface } from "../../types/posts.interface";

  export let data: any;
  export let error: any;

  let act: boolean = false;
  let popularPosts = data.popularData;

  console.log(data);
  console.log(popularPosts);

  const paginationPosts = async (
    currentPage: number,
    nextPage: number,
    pageLimit: number
  ) => {};
</script>

<Navpro></Navpro>
<section class="border-t">
  <div class="container mx-auto flex flex-row lg:flex-row lg:space-x-6">
    <main class="w-full md:border-r md:px-3 lg:border-r lg:pb-6">
      <div class="flex flex-wrap py-6 lg:justify-between sm:justify-between">
        <div class="font-secondary flex flex-wrap text-sm space-x-3">
          <div class="">
            <button class="hover:font-bold hover:border-b">Para ti</button>
          </div>
          <div>
            <button class="hover:font-bold hover:border-b">Suscritos</button>
          </div>
          <div>
            <button class="hover:font-bold hover:border-b">Soluciones</button>
          </div>
          <div>
            <button class="hover:font-bold hover:border-b">Eventos</button>
          </div>
          <div>
            <button class="hover:font-bold hover:border-b">Novedades</button>
          </div>
        </div>
        <div class="flex py-2 lg:py-0 lg:px-8 sm:py-0 sm:px-6">
          <div class="">
            <div class="w-8 h-8">
              <button>
                <img src={settings} alt="settings" />
              </button>
            </div>
            <div class="lg:hidden md:hidden py-3 sm:pl-2">
              <button on:click={() => (act = true)}>
                <!-- menu -->
                <img src={menu} alt="menu" class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- todo:  Popular POST #1 -->
      {#if popularPosts && popularPosts.length > 0}
        {#each popularPosts as currentPost, index}
          <div>
            <div>
              <img src={people} alt="people" />
            </div>
            <div class="font-secondary py-4">
              <h1 class="font-bold text-xl">
                {currentPost.titlePost}
              </h1>
              <p class="py-2 text-xs lg:pr-6">
                {currentPost.descriptionPost}
              </p>
            </div>
            <div class="lg:flex lg:justify-between lg:pr-7">
              <div>
                <div class="flex text-xs space-x-2">
                  <div class="w-14">
                    <span class="border rounded-full px-2">Popular</span>
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
                    <div><span>{currentPost.createdAt}</span></div>
                    <div><span>{currentPost.likesCount}</span></div>
                  </div>
                </div>
              </div>

              <div class="py-4 flex space-x-2 lg:py-0">
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
        {/each}
      {/if}
      <!-- todo: popular #1 post close section -->

      <!-- posts -->
      <Posts {error} {data} />
    </main>
    <aside
      class="{act
        ? 'block'
        : 'hidden'} absolute pr-4 overflow-visible bg-white lg:flex lg:flex-col lg:w-[40%] lg:pt-0 lg:relative lg:pr-0 md:flex md:flex-col md:w-[50%] md:pt-0 md:relative md:pr-0 md:px-4"
    >
      <div class="border-b">
        <div class="py-4">
          <button
            class="bg-color-blue-highlight rounded-full font-secondary font-semibold text-white px-3 flex gap-2 text-sm pt-1"
            >Escribir artículo
            <div class="py-1">
              <img src={write} alt="write" class="w-4 h-4" />
            </div></button
          >
          <div class="lg:hidden md:hidden py-4">
            <button on:click={() => (act = true)}>
              <img src={menu} alt="menu" class="w-5 h-5" />
            </button>
          </div>
        </div>

        <div class="font-secondary py-3">
          <h1 class="flex gap-1 font-semibold text-slate-600">
            <div>
              <img src={increase} alt="increase" class="w-5 h-5" />
            </div>
            Popular
          </h1>
        </div>

        <!-- popular posts -->
        <Popular {error} {popularPosts} />
      </div>
      <div class="py-6 border-b">
        <div>
          <div class="font-secondary pt-4 pb-7">
            <h1 class="flex gap-1 font-semibold text-slate-600">
              <div>
                <img src={pin} alt="pin" class="w-5 h-5" />
              </div>
              Personas que comparten tus intereses
            </h1>
          </div>

          <Followed></Followed>
          <Followed></Followed>
          <Followed></Followed>

          <div
            class="font-secondary text-color-blue-highlight font-semibold py-7"
          >
            <button class="flex flex-row-reverse px-1 text-sm">
              <div class="px-2 pt-1">
                <img src={next} alt="next" class="w-5 h-5" />
              </div>
              See more suggestions</button
            >
          </div>
        </div>
        <div class="bg-color-secondary py-4 px-2 font-secondary md:">
          <div>
            <div
              class="flex flex-row justify-between font-semibold text-slate-600 md:px-4 lg:px-0"
            >
              <span class="lg:text-sm">Comienza a escribir artículos </span>
              <div class="pt-1">
                <button><img src={close} alt="close" class="w-4 h-4" /></button>
              </div>
            </div>
            <div class="text-slate-600 text-sm pt-2 pb-6">
              <span class="lg:text-sm">
                It's free to become an author on Quili.
              </span>
            </div>
            <div class="flex flex-col text-xs text-slate-600 pb-3">
              <span>Beginner FQA</span>
              <span>Writer's guidelines</span>
            </div>
            <div class="pt-2">
              <button
                class="bg-color-blue-highlight text-white font-semibold flex py-2 px-2 rounded text-sm"
                >Construye tu primer artículo
                <div class="px-1 py-1">
                  <img src={write} alt="write" class="w-4 h-4" />
                </div></button
              >
            </div>
          </div>
        </div>
      </div>
      <div class="border-b">
        <div class="font-secondary pt-4 pb-7">
          <h1 class="flex gap-1 font-semibold text-slate-600">
            <div class="pt-1">
              <img src={explore} alt="explore" class="w-4 h-4" />
            </div>
            Explorar temas
          </h1>
        </div>
        <div class="font-secondary text-sm flex flex-wrap gap-3">
          <button class="rounded-full bg-slate-200 py-1 px-2 hover:bg-slate-300"
            >Computer Science</button
          >
          <button class="rounded-full bg-slate-200 py-1 px-2 hover:bg-slate-300"
            >Art</button
          >
          <button class="rounded-full bg-slate-200 py-1 px-2 hover:bg-slate-300"
            >Blockbuster</button
          >
          <button class="rounded-full bg-slate-200 py-1 px-2 hover:bg-slate-300"
            >Technology</button
          >
          <button class="rounded-full bg-slate-200 py-1 px-2 hover:bg-slate-300"
            >Family Therary</button
          >
          <button class="rounded-full bg-slate-200 py-1 px-2 hover:bg-slate-300"
            >Career</button
          >
          <button class="rounded-full bg-slate-200 py-1 px-2 hover:bg-slate-300"
            >Writing Tips</button
          >
        </div>
        <div
          class="font-secondary text-color-blue-highlight font-semibold py-7"
        >
          <button class="flex flex-row-reverse px-1 text-sm">
            <div class="px-2 pt-1">
              <img src={next} alt="next" class="w-5 h-5" />
            </div>
            See all</button
          >
        </div>
      </div>
      <div class="">
        <div class="font-secondary pt-4 pb-7">
          <h1 class="flex gap-1 font-semibold text-slate-600">
            <div class="pt-1">
              <img src={shine} alt="shine" class="w-4 h-4" />
            </div>
            Publicidad
          </h1>
        </div>
        <Publicity></Publicity>
        <Publicity></Publicity>
      </div>
    </aside>
  </div>
</section>

<div class={act ? "hidden" : "block"}><Footer></Footer></div>

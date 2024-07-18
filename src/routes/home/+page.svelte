<script lang="ts">
  import Navpro from "$lib/components/common/Navpro.svelte";
  import Posts from "$lib/components/Posts.svelte";
  import Popular from "$lib/components/Popular.svelte";
  import Followed from "$lib/components/Followed.svelte";
  import Publicity from "$lib/components/Publicity.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import settings from "$lib/public/images/settings.png";
  import write from "$lib/public/images/write.png";
  import pin from "$lib/public/images/pin.png";
  import next from "$lib/public/images/next.png";
  import close from "$lib/public/images/close.png";
  import menu from "$lib/public/images/hamburguer.png";
  import CurrentPopularPost from "$lib/components/CurrentPopularPost.svelte";
  import ExploreThemes from "$lib/components/ExploreThemes.svelte";
  import { goto } from "$app/navigation";

  export let data: any;
  export let error: any;

  let act: boolean = false;
  let popularPosts = data.popularData;
  let user = data.user;

  console.log(data);
  console.log(popularPosts);
  console.log(user);

  const paginationPosts = async (
    currentPage: number,
    nextPage: number,
    pageLimit: number
  ) => {};

  let handleClick = () => goto("/profile");
</script>

<Navpro on:click={handleClick} />

<section class="border-t">
  <div class="container mx-auto flex flex-row lg:flex-row lg:space-x-6">
    <main class="w-full md:border-r md:px-3 lg:border-r lg:pb-6">
      <div class="flex flex-wrap py-6 lg:justify-between sm:justify-between">
        <div class="font-secondary flex flex-wrap text-sm space-x-3">
          <div class="">
            <a class="hover:font-bold hover:border-b" href="/for-you">
              Para ti
            </a>
          </div>
          <div>
            <a class="hover:font-bold hover:border-b" href="/"> Suscritos </a>
          </div>
          <div>
            <a class="hover:font-bold hover:border-b" href="/events">
              Eventos
            </a>
          </div>
          <div>
            <a class="hover:font-bold hover:border-b" href="/news">
              Novedades
            </a>
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
                <img src={menu} alt="menu" class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- todo:  Popular POST #1 -->
      <CurrentPopularPost {error} {popularPosts} />

      <!-- todo: normal posts -->
      <Posts {error} {data} />
      
    </main>
    <aside
      class="{act
        ? 'block'
        : 'hidden'} absolute pr-4 overflow-visible bg-white lg:flex lg:flex-col lg:w-[40%] lg:pt-0 lg:relative lg:pr-0 md:flex md:flex-col md:w-[50%] md:pt-0 md:relative md:pr-0 md:px-4"
    >
      <div class="border-b">
        <div class="py-4">
          <a
            class="bg-color-blue-highlight rounded-full font-secondary font-semibold text-white px-3 flex gap-2 text-sm pt-1"
            href="/home/posts/create/"
          >
            Escribir artículo
            <div class="py-1">
              <img src={write} alt="write" class="w-4 h-4" />
            </div>
          </a>
          <div class="lg:hidden md:hidden py-4">
            <button on:click={() => (act = true)}>
              <img src={menu} alt="menu" class="w-5 h-5" />
            </button>
          </div>
        </div>

        <!-- todo: popular posts -->
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

          <!-- todo: followed persons -->
          <Followed />

          <div
            class="font-secondary text-color-blue-highlight font-semibold py-7"
          >
            <button class="flex flex-row-reverse px-1 text-sm">
              <div class="px-2 pt-1">
                <img src={next} alt="next" class="w-5 h-5" />
              </div>
              See more suggestions
            </button>
          </div>
        </div>
        <div class="bg-color-secondary py-4 px-2 font-secondary md:">
          <div>
            <div
              class="flex flex-row justify-between font-semibold text-slate-600 md:px-4 lg:px-0"
            >
              <button
                class="lg:text-sm"
                on:click={() => goto("/home/posts/create")}
              >
                Comienza a escribir artículos
              </button>
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

      <!-- todo: explore themes -->
      <ExploreThemes />

      <!-- todo: publicity -->
      <Publicity />
    </aside>
  </div>
</section>

<div class={act ? "hidden" : "block"}>
  <Footer />
</div>

<script lang="ts">
  import Navpro from "$lib/components/common/Navpro.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import arrow_1 from "$lib/public/images/arrow_1.png";
  import arrow_2 from "$lib/public/images/arrow_2.png";
  import colab from "$lib/public/images/colab.png";
  import Candidates from "$lib/components/Candidates.svelte";

  export let data;
  const user = data.data;
  console.log(data.data);
</script>

<Navpro />
<section>
  <div class="container">
    <h1 class="font-secondary text-3xl font-bold sm:text-4xl">
      Lista de <span class="text-color-blue-highlight"
        >candidatos interesados en tu proyecto
      </span>
    </h1>
    <div class="lg:py-4">
      <div>
        <p
          class="font-secondary font-bold text-slate-600 py-2 text-s lg:text-2xl"
        >
          Search
        </p>
        <input
          class="block bg-slate-200 w-full rounded focus:border-color-blue-highlight placeholder:text-slate-800 placeholder:text-xs px-1 placeholder:lg:text-sm lg:h-6"
          placeholder="Designer"
        />
      </div>
      <div>
        <div class="flex justify-between">
          <p
            class="font-secondary font-bold text-slate-600 py-2 text-s lg:text-2xl"
          >
            Filter
          </p>
          <button
            class=" text-xs rounded-md
                border-0 text-color-blue-highlight font-bold sm:text-s
                hover:text-color-blue-light ease-in duration-200 lg:text-sm"
          >
            Clear filters
          </button>
        </div>

        <div class="flex place-content-between font-secondary">
          <select
            class="block bg-slate-200 rounded text-xs h-6 w-[23%] lg:h-6 lg:text-sm text-slate-600"
          >
            <option>Location</option>
          </select>
          <select
            class="block bg-slate-200 rounded text-xs h-6 w-[23%] lg:h-6 lg:text-sm text-slate-600"
          >
            <option>Experience level</option>
          </select>
          <select
            class="block bg-slate-200 rounded text-xs h-6 w-[23%] lg:h-6 lg:text-sm text-slate-600"
          >
            <option>Industry</option>
          </select>
          <select
            class="block bg-slate-200 rounded text-xs h-6 w-[23%] lg:h-6 lg:text-sm text-slate-600"
          >
            <option>Company type</option>
          </select>
        </div>
      </div>
    </div>
  </div>

  <div class="container py-4 mx-auto flex flex-col lg:flex-row lg:space-x-6">
    <main class="w-full">
      <div class="py-4">
        <div class="py-1">
          <p class="font-secondary text-xs lg:text-xl">
            {user.length}
            <span class="text-color-blue-highlight font-semibold">
              postulante encontradoxd
            </span>
          </p>
          <div class="flex flex-col py-4 space-y-6">
            <Candidates {user} />
          </div>
        </div>
      </div>
    </main>
    <aside class="lg:py-16">
      <div class="bg-color-secondary py-6">
        <div>
          <img src={colab} alt="colab" />
        </div>
        <div class="flex flex-col text-center font-secondary">
          <h3 class=" font-bold text-color-secondary-highlight">
            Incididunt et magna
          </h3>
          <p class="px-6 py-2">
            Incididunt et magna enim mollit quis ut ut enim do ex est irure
            irure in occaec
          </p>
          <div>
            <button
              class="bg-color-secondary-highlight text-white border-transparent rounded px-16"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </aside>
  </div>
</section>
<div class="flex justify-center text-xs text-slate-500 space-x-2 py-2">
  <button><img src={arrow_1} alt="arrow_1" /></button>
  <div class="py-3">
    <button
      class="border border-slate-300 rounded hover:bg-color-blue-highlight hover:text-white px-2 lg:p-2"
      >1</button
    >
  </div>
  <div class="py-3">
    <button
      class="border border-slate-300 rounded hover:bg-color-blue-highlight hover:text-white px-2 lg:p-2"
      >2</button
    >
  </div>
  <div class="py-3">
    <button
      class="border border-slate-300 rounded hover:bg-color-blue-highlight hover:text-white px-2 lg:p-2"
      >3</button
    >
  </div>
  <div class="py-3">
    <button
      class="border border-slate-300 rounded hover:bg-color-blue-highlight hover:text-white px-2 lg:p-2"
      >4</button
    >
  </div>
  <div class="py-3">
    <button
      class="border border-slate-300 rounded hover:bg-color-blue-highlight hover:text-white px-2 lg:p-2"
      >5</button
    >
  </div>
  <button><img src={arrow_2} alt="arrow_2" /></button>
</div>
<Footer></Footer>

<script>
  import colab from "$lib/public/images/colab.png";
  import arrow_1 from "$lib/public/images/arrow_1.png";
  import Footer from "$lib/components/Footer.svelte";
  import Reports from "$lib/components/Reports.svelte";
  import arrow_2 from "$lib/public/images/arrow_2.png";
  import Navpro from "$lib/components/common/Navpro.svelte";
  import "../../app.css";

  export let data;
  const myReports = data.data;

  console.log(myReports);
</script>

<Navpro />

<section>
  <div class="container">
    <div class="flex justify-between items-center py-6">
      <h1 class="font-secondary text-3xl font-bold sm:text-4xl">
        Mis reportes
      </h1>
      <button
        class="text-xs rounded-mdborder-0 text-color-blue-highlight font-bold sm:text-s hover:text-color-blue-light ease-in duration-200 lg:text-sm">
        Clear filters
      </button>
    </div>

    <div
      class="py-4 lg:py-0 grid grid-cols-1 lg:grid-cols-3 space-y-3 lg:space-y-0"
    >
      <div>
        <input
          class="block p-2 bg-slate-200 rounded w-full focus:border-color-blue-highlight placeholder:text-slate-800 placeholder:text-xs placeholder:lg:text-sm"
          placeholder="Buscar..."
        />
      </div>
      <div class="pl-2">
        <input
          class="block bg-slate-200 rounded text-xs lg:w-[70%] lg:text-sm text-slate-600 w-full p-2"
          type="date"
          placeholder="Fecha de creacion"
        />
      </div>
      <div>
        <select
          class="block bg-slate-200 rounded text-xs w-full lg:w-[50%]lg:text-sm text-slate-600 p-3"
        >
          <option>Nivel de relevancia</option>
          <option>Urgente</option>
          <option>Regular</option>
          <option>Poco importante</option>
        </select>
      </div>
    </div>
  </div>

  <div class="container py-4 mx-auto flex flex-col lg:flex-row lg:space-x-6">
    <main class="w-full lg:py-16 space-y-6 py-6">
      <Reports {myReports}/>
    </main>
    <aside class="lg:py-16">
      <div class="bg-color-secondary py-6">
        <div class="flex justify-center">
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

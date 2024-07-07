<script lang="ts">
  import publicity from "$lib/public/images/publicity.png";
  import shine from "$lib/public/images/shine.png";
  import "../../app.css";
</script>

<div class="">
  <div class="font-secondary pt-4 pb-7">
    <h1 class="flex gap-1 font-semibold text-slate-600">
      <div class="pt-1">
        <img src={shine} alt="shine" class="w-4 h-4" />
      </div>
      Publicidad
    </h1>
  </div>
  <div class=" bg-slate-200 mt-4 mb-8">
    <div>
      <img src={publicity} alt="publicity" class="w-full" />
    </div>
    <div
      class="font-secondary text-slate-800 py-2 font-semibold px-3 lg:text-sm"
    >
      <p>Everything Explained - E[24]:Inflation and Unemployment</p>
    </div>
  </div>
</div>

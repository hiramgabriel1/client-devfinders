<script>
  import "../../app.css";
  import explore from "$lib/public/images/explore.png";
  import next from "$lib/public/images/next.png";
</script>

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
  <div class="font-secondary text-color-blue-highlight font-semibold py-7">
    <button class="flex flex-row-reverse px-1 text-sm">
      <div class="px-2 pt-1">
        <img src={next} alt="next" class="w-5 h-5" />
      </div>
      See all</button
    >
  </div>
</div>

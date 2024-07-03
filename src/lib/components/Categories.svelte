<script>
  import zoom from "$lib/public/images/assets/vectors/zoom.svg";
  let categories = [
    "Featured Series",
    "Technology",
    "Blockbuster",
    "Writers' tips",
    "Fashion & Design",
    "Travel",
    "Comedy",
    "Culutre",
    "Art",
    "Music",
    "Business",
    "Food",
    "Health and Wellness",
    "Science",
    "News",
    "Sport",
    "History",
    "Literature"
  ];
</script>

<article class="flex gap-4 flex-wrap">
  {#each categories as category, index}
    <span class="capitalize py-1 px-2 rounded-full text-sm flex gap-1 items-center justify-center text-gray-500 bg-gray-100">
      {category} <img src={zoom} alt={zoom} class="opacity-50 size-4">
    </span>
  {/each}
</article>

<script>
  import recents from "$lib/public/images/recents.png";
  import recents2 from "$lib/public/images/recents_2.png";
  import recents3 from "$lib/public/images/recents_3.png";
  import recents4 from "$lib/public/images/recents_4.png";

  let recent = [
    { image: recents, title: 'Why the heck are Gen-Z flocking to retro digital cameras?' },
    { image: recents2, title: '10 food stylists from all over the world tell you how to become one' },
    { image: recents3, title: 'Emotional Well-being: Negative vs. Positive Motivation' },
    { image: recents4, title: 'Saving does not equal "smart" personal finance management' }
  ];
</script>

<article class="flex gap-4 flex-wrap">
  {#each recent as item, index}
    <div class="rounded overflow-hidden bg-[#f8f9fa] w-72">
      <img src={item.image} alt="{item.title}">
      <p class=" p-2.5 border font-semibold text-sm text-pretty">
        {item.title}
      </p>
    </div>
  {/each}
</article>

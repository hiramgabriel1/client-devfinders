<script>
  import arrow from "$lib/public/images/assets/vectors/arrow-up-right.svg";

  let topics = [
    "Conversational AI",
    "Data Engineering",
    "Generative Art",
    "Deep Learning",
    "Flutter",
    "Book Reviews",
    "Decentralized Finance",
    "Terraform",
    "Indie Game",
    "Creative Nonfiction",
    "Freelancing",
    "Elder Care",
    "Venture Capital",
    "Anxiety",
  ];

  let styles = [
    { color: "text-blue-500", bg: "bg-blue-100" },
    { color: "text-green-500", bg: "bg-green-100" },
    { color: "text-yellow-500", bg: "bg-yellow-100" },
    { color: "text-red-500", bg: "bg-red-100" },
    { color: "text-purple-500", bg: "bg-purple-100" },
  ];
</script>

<article class="flex gap-4 flex-wrap">
  {#each topics as topic, index}
    <span
      class="capitalize py-1 px-2 rounded-full text-sm flex gap-1 items-center justify-center {styles[
        index % styles.length
      ].color} {styles[index % styles.length].bg}"
    >
      {topic} <img src={arrow} alt={arrow} class="invert opacity-20" />
    </span>
  {/each}
</article>

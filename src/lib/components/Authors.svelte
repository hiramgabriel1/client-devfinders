<script>
  import author from "$lib/public/images/Author_1.png";
  import author2 from "$lib/public/images/Author_2.png";
  import author3 from "$lib/public/images/Author_3.png";
  import tag_sci_fi from "$lib/public/images/Tag_SCI-FI.png";
  import tag_fashion from "$lib/public/images/Tag_Fashion.png";
  import tag_tech from "$lib/public/images/Tag_Tech.png";
  import google from "$lib/public/images/google.png";
  import facebook from "$lib/public/images/facebook.png";
  import twitter from "$lib/public/images/twitter.png";
  import arrow from "$lib/public/images/assets/vectors/arrow-up-right.svg";

  let authors = [
    {
      image: author,
      tag: tag_sci_fi,
      name: "Gafete Hughes ",
      views: "300k views",
      description: "Me gusta comer berenjena por las mañanas y noches alaburguer."
    },
    {
      image: author2,
      tag: tag_fashion,
      name: "Cristopher Brown",
      views: "900k views",
      description: "Tech enthusiast & software engineer, passionate about technologies."
    },
    {
      image: author3,
      tag: tag_tech,
      name: "Cristopher Brown",
      views: "300k views",
      description: "Fashionista and stylist, guide to build your personal and sustainable closet."
    }
  ];

</script>
  <article class="size-72 bg-[#eefcfe] rounded flex flex-col justify-center text-sm px-5 gap-8">
    <div class="flex flex-col gap-4">
      <strong>
        Connect to your social media.
      </strong>
      <p class="text-pretty">
        Discover Quili writers you already follow on social media.
      </p>
    </div>
    <div class="flex gap-2">
      <a href="/">
        <img src={google} alt={google}>
      </a>
      <a href="/">
        <img src={facebook} alt={facebook}>
      </a>
      <a href="/">
        <img src={twitter} alt={twitter}>
      </a>
    </div>
  </article>
{#each authors as item, index}
  <article class="w-72 bg-[#f8f9fa] relative rounded overflow-hidden">
    <span class="rounded-full absolute top-4 left-4">
      <img src={item.tag} alt={item.tag}>
    </span>
    <img src={item.image} alt={item.name}>
    <div class="py-4 px-6 flex flex-col gap-6">
      <h3 class="font-bold text-lg flex items-center justify-between">
        {item.name}
        <span class="font-thin text-xs">
          {item.views}
        </span>
      </h3>
      <p class="text-xs">
        {item.description}
      </p>
      <button class="flex gap-2 font-semibold rounded-md bg-orange-500 py-2 w-full justify-center text-white">
        Visit Profile
        <img src={arrow} alt={arrow}>
      </button>
    </div>
  </article>
{/each}
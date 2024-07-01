<script lang="ts">
  import Navpro from "$lib/components/Navpro.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import previous from "$lib/public/images/previous.png";
  import view from "$lib/public/images/view.png";
  import comment from "$lib/public/images/comment.png";
  import share from "$lib/public/images/share.png";
  import dots from "$lib/public/images/dots.png";
  import save_b from "$lib/public/images/save_b.png";
  import dollar from "$lib/public/images/dollar.png";
  import bitcoin from "$lib/public/images/bitcoin.png";
  import reco_1 from "$lib/public/images/reco_1.png";
  import reco_2 from "$lib/public/images/reco_2.png";
  import reco_3 from "$lib/public/images/reco_3.png";
  import next_reco from "$lib/public/images/next_reco.png";

  // export const load = async ({ params }: any) => {
  //   const { postId } = params
  // };
</script>

<Navpro></Navpro>
<section>
  <div class="lg:absolute lg:top-55 lg:pt-7 lg:px-7">
    <div class="flex justify-start px-4">
      <button class="border border-gray-300 rounded-full px-2 py-2"
        ><img src={previous} alt="previous" class="w-4 h-4" /></button
      >
    </div>
  </div>
  <div class="container flex flex-col lg:px-20">
    <div class="flex flex-col">
      <div class="flex justify-start pt-6 pb-3 lg:px-20">
        <div class="flex justify-start font-secondary text-xs space-x-3 py-3">
          <div>
            <span class="border border-black rounded-xl py-1 px-2">Popular</span
            >
          </div>
          <div>
            <span class="bg-black text-white rounded-xl py-1 px-2"
              >Blockchain</span
            >
          </div>
          <div><span class="text-zinc-600">Jun 27,2023</span></div>
        </div>
      </div>
    </div>

    <div class="font-secondary font-bold pb-10 text-lg lg:px-20">
      <h1>Demystifying Blockchain: Was it intentionally made confusing?</h1>
    </div>
    <div class=" flex justify-between border-b pb-3 lg:px-20">
      <div class="flex space-x-1">
        <div class="flex space-x-1 items-center">
          <img src={view} alt="view" class="w-5 h-5" />
          <span class="font-secondary text-xs text-zinc-700">1.8M</span>
        </div>
        <div class="flex space-x-1 items-center">
          <img src={comment} alt="comment" class="w-5 h-5" />
          <span class="font-secondary text-xs text-zinc-700">4K</span>
        </div>
      </div>
      <div class="flex">
        <button class="px-1"
          ><img src={share} alt="share" class="w-5 h-5" /></button
        >
        <button><img src={save_b} alt="save_b" class="w-5 h-5" /></button>
        <button><img src={dots} alt="dots" class="w-5 h-5" /></button>
      </div>
    </div>
    <div class="pt-10 lg:px-20">
      <img src={dollar} alt="dollar" />
      <div class="pt-8 pb-5 font-secondary text-sm">
        <p>
          Blockchain technology has emerged as a groundbreaking innovation with
          the potential to revolutionize industries and transform our digital
          landscape. However, as we delve into the intricacies of blockchain, we
          often encounter a daunting array of technical terms, complex concepts,
          and seemingly impenetrable jargon.
        </p>
      </div>
      <div class="pb-12 font-secondary text-sm">
        <p>
          This raises an intriguing question: Was blockchain intentionally made
          confusing? In this article, we embark on a quest to demystify
          blockchain, exploring the motivations behind its perceived complexity
          and shedding light on how we can unravel its intricacies.
        </p>
      </div>
      <div class="font-secondary font-bold text-s">
        <h2>Unraveling the Complexy</h2>
      </div>
      <div class="py-8 font-secondary text-sm">
        <p>
          At first glance, blockchain can appear as a labyrinth of cryptographic
          algorithms, consensus mechanisms, and distributed ledgers. The
          technical nature of blockchain has led many to believe that it was
          intentionally designed to be confusing, keeping it exclusive to a
          select few. However, upon closer inspection, we discover that the
          complexity of blockchain arises from the inherent challenges it seeks
          to overcome.
        </p>
      </div>
      <div class="font-secondary pb-8">
        <h3 class="pb-4">1. Security and Trust:</h3>
        <img src={bitcoin} alt="bitcoin" class="pb-4" />
        <p class="text-sm">
          Blockchain aims to create a secure and trustworthy system for
          conducting transactions and storing information. Its complexity is a
          direct result of the robust security measures and cryptographic
          protocols it employs. By using advanced encryption techniques and
          decentralized consensus mechanisms, blockchain ensures the integrity
          of data and prevents tampering or fraud.
        </p>
        <h3 class="pt-12">2. Decentralization and Transparency:</h3>
        <p class="pt-4 pb-12 text-sm">
          Another key aspect of blockchain is its decentralized nature, removing
          the need for intermediaries and enabling peer-to-peer transactions.
          The complexity arises from the intricate web of nodes, consensus
          algorithms, and cryptographic puzzles that facilitate the validation
          and verification of transactions. This decentralized model fosters
          transparency and removes the reliance on centralized authorities
        </p>
        <h3 class="pb-4">3. Technical Challenges and Innovation:</h3>
        <p class="pb-12 text-sm">
          Blockchain technology is still relatively young, constantly evolving
          and pushing the boundaries of what is possible. As with any emerging
          technology, the initial stages involve experimentation, trial and
          error, and the exploration of various approaches. The complex nature
          of blockchain stems from the need to tackle technical challenges,
          improve scalability, and enhance interoperability.
        </p>
        <h2 class="font-secondary font-bold text-s pb-8">
          Demystifying Blockchain
        </h2>
        <p class="pb-8 text-sm">
          While the complexity of blockchain may initially appear intimidating,
          it is essential to emphasize that understanding. blockchain is within
          reach for anyone willing to explore it. Numerous educational
          resources, online courses, and communities have emerged to bridge the
          knowledge gap and make blockchain more accessible.
        </p>
        <p class="pb-12 text-sm">
          To demystify blockchain, breaking down complex concepts into
          digestible pieces is crucial. By explaining the underlying principles
          of cryptography, distributed consensus, and data structures, we can
          empower individuals to grasp the fundamentals. Visualizations,
          real-world examples, and simplified explanations can also play a vital
          role in demystifying blockchain and making it more approachable to a
          wider audience.
        </p>
      </div>
    </div>
  </div>
  <div class="px-3 lg:container">
    <h1 class="font-secondary font-bold text-lg md:px-14 px-5">
      Recomendados para ti
    </h1>
    <div class="container flex pt-6 space-x-2 items-center pb-20">
      <div class="bg-zinc-200 text-xs font-semibold text-zinc-700">
        <img src={reco_1} alt="reco_1" class="md:w-full" />
        <div class="px-1 md:py-1">
          <span>From Novice to Programmer: The Journey of Learning to Code</span
          >
        </div>
      </div>
      <div>
        <div class="bg-zinc-200 text-xs font-semibold text-zinc-700">
          <img src={reco_2} alt="reco_2" class="md:w-full" />
          <div class="px-1 md:py-2">
            <span class=""
              >Blocking to stay in hyperfocus and boost your productivity</span
            >
          </div>
        </div>
      </div>

      <div
        class="hidden lg:bg-zinc-200 lg:text-xs lg:font-semibold lg:block lg:text-zinc-700"
      >
        <img src={reco_3} alt="reco_3" class="md:w-full" />
        <div class="px-1 md:py-1">
          <span
            >Emotional Well-being - [E12]: Negative vs. Positive Motivation</span
          >
        </div>
      </div>
      <div class="lg:pl-4">
        <button><img src={next_reco} alt="next_reco" /></button>
      </div>
    </div>
  </div>
</section>
<Footer></Footer>

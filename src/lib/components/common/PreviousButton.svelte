<script>
    import { goto } from "$app/navigation";
    import previous from "$lib/public/images/previous.png"
</script>

<div class="flex justify-start px-4">
  <button
    class="border border-gray-300 rounded-full px-2 py-2"
    on:click={() => goto("/home")}
  >
    <img src={previous} alt="previous" class="w-4 h-4" />
  </button>
</div>

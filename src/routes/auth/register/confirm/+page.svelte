<script lang="ts">
  import "../../../../app.css";
  import ConfirmEmail from "$lib/components/ConfirmEmail.svelte";

  export let data

  console.log(data);
  
</script>
<ConfirmEmail { data }/>
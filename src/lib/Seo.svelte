<script>
  export let title;
  export let content;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" {content} />
</svelte:head>

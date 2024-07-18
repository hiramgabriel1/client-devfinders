<script>
  import icon from "$lib/public/images/icon.jpeg"
  export let title;
  export let content;
</script>

<svelte:head>
  <title>{title}</title>
  <link rel="shortcut icon" href={icon} type="image/x-icon">
  <meta name="description" {content} />
</svelte:head>

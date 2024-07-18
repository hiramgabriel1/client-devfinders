<script>
  import icon from "$lib/public/images/icon.jpeg"
  import { page } from "$app/stores";

  export let title;
  export let content;
  export let type;

  $: url = $page.url.href 
</script>

<svelte:head>
  <title>{title}</title>
  <link rel="shortcut icon" href={icon} type="image/x-icon">
  <meta name="description" {content} />
  {@html `<script type="application/ld+json">
  {
      "@context": "http://schema.org",
      "@type": "${type}",
        "name": "${title}",
        "description": "${content}",
        "url": "${url}",
      }
    </script>`}
</svelte:head>

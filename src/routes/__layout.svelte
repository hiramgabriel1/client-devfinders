<script context="module">
  export async function load() {
    return {
      title: "Tu Título de Página",
      meta: [
        { name: "description", content: "Nuvix es algo alaburguer" },
        { name: "keywords", content: "palabras clave, separadas, por, comas" },
        { name: "author", content: "Tu Nombre" },
        { property: "og:title", content: "Título para Open Graph" },
        { property: "og:description", content: "Descripción para Open Graph" },
        { property: "og:image", content: "URL de tu imagen" },
        { property: "og:url", content: "URL de tu página" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Título para Twitter" },
        { name: "twitter:description", content: "Descripción para Twitter" },
        { name: "twitter:image", content: "URL de tu imagen para Twitter" },
      ],
    };
  }
</script>

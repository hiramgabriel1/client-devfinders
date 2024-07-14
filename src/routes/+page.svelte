<script>
    import "../app.css";
    import Nav from "$lib/components/Nav.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import redis_icon from "$lib/public/images/redis.svg"
    import nest_icon from "$lib/public/images/nestjs.svg"
    import typescript_icon from "$lib/public/images/typescript.svg";
    import postgre_icon from "$lib/public/images/postgresql.svg"
    import docker_icon from "$lib/public/images/docker.svg"
    import svelt_icon from "$lib/public/images/svelte.svg"
    import tailwindcss_icon from "$lib/public/images/tailwindcss.svg"
    import Introduction from "$lib/components/Introduction.svelte";
    import Iconslide from "$lib/components/Iconslide.svelte";

</script>
<Nav></Nav>
<Introduction></Introduction>
<Iconslide></Iconslide>
<Footer></Footer>

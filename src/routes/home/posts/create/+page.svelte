<script lang="ts">
  import "../../../../style/style.css";
  import Navpro from "$lib/components/common/Navpro.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import previous from "$lib/public/images/previous.png";
  import type { PopularPostInterface } from "../../../../types/posts.interface";
  import toast, { Toaster } from "svelte-french-toast";
  import Editor from "@tinymce/tinymce-svelte";
  import { API_KEY_TINY_MICROSERVICE } from "../../../utils/config";

  let act: boolean = false;
  // let formData: PopularPostInterface = {
  //   date: "",
  //   length: 0,
  //   titlePost: "",
  //   descriptionPost: "",
  //   photoUrlWallpaper: "",
  //   imageUrlReference: "",
  //   likesCount: 0,
  //   categoryPost: "",
  //   creatorPost: {
  //     username: "",
  //   },
  //   creatorPostId: 0,
  //   createdAt: "",
  //   Comments: [],
  // };

  let content: string = "";
   const handleSubmit = async () => {
    try {
      const token = "";
      const API = await fetch("/api/posts/home-post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: content
      });

      if (!API.ok)
        toast.error("Error al intentar crear tu post. Intenta mas tarde");

      toast.success("Post creado!");
    } catch (error) {
      toast.error("error al crear tu post, intenta de nuevo");
    }
  };

</script>

<Toaster />
<Navpro />

<form class="container">
  <Editor apiKey={API_KEY_TINY_MICROSERVICE} bind:text={content} />
  <button
    class="border-t-neutral-950 bg-color-secondary-highlight p-5 border-spacing-4 ring-amber-100"
    on:click={() => {
      console.log(content);
    }}>

    guardar post
  </button>
</form>

<!-- <Footer /> -->

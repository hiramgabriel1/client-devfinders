<script lang="ts">
  import "../../../../style/style.css";
  import Navpro from "$lib/components/common/Navpro.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import type { PopularPostInterface } from "../../../../types/posts.interface";
  import toast, { Toaster } from "svelte-french-toast";
  // import Editor from "@tinymce/tinymce-svelte";
  // import { API_KEY_TINY_MICROSERVICE } from "../../../utils/config";
  import UploadFile from "$lib/components/Modal/UploadFile.svelte";
  
  let configEditorComponent = {
    height: 500,
    menubar: true,
    plugins: [
      "advlist autolink lists link image charmap print preview anchor",
      "searchreplace visualblocks code fullscreen",
      "insertdatetime media table paste code help wordcount",
    ],
    toolbar:
      "undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | help | image",
  };

  let act: boolean = false;
  let formData: PopularPostInterface = {
    date: "",
    length: 0,
    titlePost: "",
    descriptionPost: "",
    photoUrlWallpaper: "",
    imageUrlReference: "",
    likesCount: 0,
    categoryPost: "",
    creatorPost: {
      username: "",
    },
    creatorPostId: 0,
    createdAt: "",
    Comments: [],
  };

  let content: string = "";

  const handleSubmit = async () => {
    console.log(content);
    const data = content.replaceAll("\n\n", " ").replace("\n", " ");
    console.log(data);

    // try {
    //   const token = "";
    //   const API = await fetch("/api/posts/home-post/create", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },

    //     body: JSON.stringify(formData),
    //   });

    //   if (!API.ok)
    //     toast.error("Error al intentar crear tu post. Intenta mas tarde");

    //   toast.success("Post creado!");
    // } catch (error) {
    //   toast.error("error al crear tu post, intenta de nuevo");
    // }
  };
</script>

<Toaster />
<Navpro />

<form class="container">
  <h1 class="text-center text-black font-extrabold">
    Crear un nuevo post
  </h1>
  <UploadFile/>
</form>

<Footer />

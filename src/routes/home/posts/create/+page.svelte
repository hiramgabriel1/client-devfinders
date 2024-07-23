<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import previous from "$lib/public/images/previous.png";
  import view_2 from "$lib/public/images/view_2.png";
  import h from "$lib/public/images/h.png";
  import bold_2 from "$lib/public/images/bold_2.png";
  import italic from "$lib/public/images/italic.png";
  import link from "$lib/public/images/link.png";
  import numbered from "$lib/public/images/numbered.png";
  import code from "$lib/public/images/code.png";
  import img from "$lib/public/images/img.png";
  import diamond from "$lib/public/images/diamond.png";
  import triangle from "$lib/public/images/triangle.png";
  import Posts from "$lib/components/Posts.svelte";
  import toast, { Toaster } from "svelte-french-toast";
  // import { send } from "vite";
  // import { handle } from "../../../../hooks/hook.server";

  let files: any;
  let formData = {
    titlePost: "",
    descriptionPost: "",
    photoUrlWallpaper: files,
    imageUrlReference: "",
    likesCount: "",
    categoryPost: "",
  };

  $: if (files) {
    for (const file of files) {
      console.log(file);
    }
  }

  const changeWallpaperImage = (e: Event) => {
    console.log(encodeURIComponent);
  };

  const handleSubmit = async () => {
    try {
      console.log(formData);
      const sendData = await fetch("/api/posts/home-post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!sendData)
        toast.error("error al publicar, intenta de nuevo mas tarde");

      const response = await sendData.json();

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
</script>

<Toaster />

<section>
  <div class=" px-3 pt-3 lg:pl-10 lg:py-6">
    <button>
      <img src={previous} alt="previous" class="w-6 h-6 lg:w-8 lg:h-8" />
    </button>
  </div>
  <div class="container xl:px-[12rem] lg:my-4 sm:my-10 lg:w-[85%]">
    <div class="font-secondary flex justify-between py-8">
      <div class="font-semibold text-2xl lg:text-3xl">
        <h1>Crear publicacion</h1>
      </div>
      <div>
        <button
          class="bg-color-blue-light text-color-blue-highlight flex px-2 py-1 rounded-lg"
        >
          <img src={view_2} alt="view" class="mr-1" />
          Preview
        </button>
      </div>
    </div>

    <div class="flex justify-center pb-2 flex-col">
      <div
        class="border border-gray-300 rounded-md border-dashed px-3 py-1 flex justify-center lg:py-12 md:py-10"
      >
        <div>
          <!-- <img src={create_2} alt="create" class="rounded" /> -->
          <!-- <Uploads /> -->
          <main class="flex items-center justify-center bg-gray-100 font-sans">
            <label
              for="dropzone-file"
              class="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>

              <h2 class="mt-4 text-xl font-medium text-gray-700 tracking-wide">
                Subir portada
              </h2>

              <p class="mt-2 text-gray-500 tracking-wide">
                Sube o arrastra una imagen para tu portada de publicacion.
              </p>

              <input
                id="dropzone-file"
                name="wallpaper"
                type="file"
                class="hidden"
                bind:files
              />
            </label>
          </main>
        </div>
      </div>
      <div class="flex py-2 space-x-3 justify-end lg:pt-5">
        <div>
          <button
            class="bg-color-blue-light text-color-blue-highlight rounded-xl px-3 py-1"
            >Cambiar</button
          >
        </div>
        <div>
          <button class="bg-white text-red-500 rounded-xl px-3 py-1"
            >Eliminar</button
          >
        </div>
      </div>
    </div>
    <form on:submit|preventDefault={handleSubmit}>
      <div class="font-secondary py-4">
        <div class="flex">
          <h2 class="font-semibold text-lg lg:text-2xl">
            Titulo de la publicación
          </h2>
          <span class="text-red-500 font-semibold text-lg pl-1">*</span>
        </div>
        <div class="pb-2">
          <span class="text-sm text-gray-600"
            >Agrega un titulo para distinguirte de otras publicaciones</span
          >
        </div>
        <div class="w-full pb-1">
          <input
            type="text"
            bind:value={formData.titlePost}
            class="w-full rounded-lg bg-gray-200"
          />
        </div>
      </div>

      <div class="font-secondary py-6">
        <div>
          <h2 class="font-semibold text-lg lg:text-2xl">Descripción</h2>
        </div>
        <div class="pb-2">
          <span class="text-sm text-gray-600"
            >Añade el contenido de tu publicacion</span
          >
        </div>
        <div class="flex h-auto">
          <div class="w-full">
            <textarea bind:value={formData.descriptionPost} class="w-full py-12 rounded-lg bg-gray-200 h-[100%]"
            ></textarea>
          </div>
          <div class="flex-col pt-2 items-center">
            <div class="pl-2">
              <button><img src={h} alt="H" class="w-5 h-5" /></button>
            </div>
            <div class="pl-2">
              <button><img src={bold_2} alt="bold" /></button>
            </div>
            <div class="pl-2">
              <button><img src={italic} alt="italic" class="w-5 h-5" /></button>
            </div>
            <div class="pl-2">
              <button><img src={link} alt="link" class="w-5 h-5" /></button>
            </div>
            <div class="pl-2">
              <button><img src={numbered} alt="list" class="w-5 h-5" /></button>
            </div>
            <div class="pl-2">
              <button><img src={code} alt="code" class="w-5 h-5" /></button>
            </div>
            <div class="pl-2">
              <button><img src={img} alt="imagen" class="w-5 h-5" /></button>
            </div>
          </div>
        </div>
      </div>

      <div class="font-secondary my-6 border-b-2">
        <div class="flex">
          <h2 class="font-semibold text-lg lg:text-2xl">Hashtags</h2>
        </div>
        <div class="pb-2">
          <span class="text-sm text-gray-600"
            >Puedes añadir Hashtags para dar visibilidad a tu post</span
          >
        </div>
        <div class="w-full pb-4">
          <select class="w-full rounded-lg bg-gray-200 px-2"
            ><select />
          </select>
        </div>
      </div>

      <div class="font-secondary my-6 border-b-2">
        <div class="py-4">
          <div class="flex justify-between items-center">
            <h2 class="font-semibold text-lg lg:text-2xl">
              Permitir compartir
            </h2>
            <input type="radio" class="pr-4" />
          </div>
          <div class="pb-2">
            <span class="text-sm text-gray-600"
              >Permite que los usuarios puedan compartir tu publicación con
              otras personas</span
            >
          </div>
        </div>

        <div class="py-4">
          <div class="flex justify-between items-center">
            <h2 class="font-semibold text-lg lg:text-2xl">
              Permitir ver likes
            </h2>
            <input type="radio" class="pr-4" />
          </div>
          <div class="pb-2">
            <span class="text-sm text-gray-600"
              >Permite que los usuarios puedan ver la cantidad de likes que
              tiene tu publicación</span
            >
          </div>
        </div>

        <div class="py-4">
          <div class="flex justify-between items-center">
            <h2 class="font-semibold text-lg lg:text-2xl">
              Unlockable content
            </h2>
            <input type="radio" class="pr-4" />
          </div>
          <div class="pb-2">
            <span class="text-sm text-gray-600"
              >Duis consectetur adipisicing irure anim incididunt ex Lorem
              ullamco fugiat</span
            >
          </div>
        </div>

        <div class="pb-4">
          <textarea class="w-full py-12 rounded-lg bg-gray-200 h-[100%]"
          ></textarea>
        </div>
      </div>

      <div class="font-secondary my-6 border-b-2">
        <div>
          <div class="flex">
            <h2 class="font-semibold text-lg lg:text-2xl">Categoria</h2>
          </div>
          <div class="pb-2">
            <span class="text-sm text-gray-600"
              >Añade una categoria para tu publicación</span
            >
          </div>
          <div class="w-full pb-4">
            <input
              type="text"
              bind:value={formData.categoryPost}
              placeholder="Desarrollo backend..."
              class="w-full rounded-lg bg-gray-200 px-2 placeholder:text-sm"
            />
          </div>
        </div>

        <div>
          <div class="flex">
            <h2 class="font-semibold text-lg lg:text-2xl">Promocionar</h2>
          </div>

          <div class="pb-2">
            <span class="text-sm text-gray-600"
              >Puedes aumentar las visitas a tu publicacion y ponerla en primera
              vista</span
            >
          </div>

          <div class="font-secondary pb-4 flex space-x-2">
            <div
              class="flex border hover:border-color-blue-highlight hover:bg-color-blue-light pl-3 rounded-lg w-[50%] py-2"
            >
              <input type="radio" />
              <div class="flex items-center pl-4 space-x-1">
                <img src={diamond} alt="diamond" />
                <span class="text-sm">Diamante</span>
              </div>
            </div>

            <div
              class="flex border hover:border-color-secondary-highlight hover:bg-color-secondary pl-3 rounded-lg w-[50%]"
            >
              <input type="radio" />
              <div class="flex items-center pl-4 space-x-1">
                <img src={triangle} alt="triangle" class="w-3 h-3" />
                <span class="text-sm">Básico</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="font-secondary pb-12">
        <button
          class="bg-color-blue-highlight rounded-xl text-white px-3 py-2"
          type="submit">Publicar</button
        >
      </div>
    </form>
  </div>
</section>
<Footer></Footer>

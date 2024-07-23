<script lang="ts">
  import toast, { Toaster } from "svelte-french-toast";
  import "../../app.css";

  let formData = {
    username: "",
    lastname: "",
    email: "",
    role: "",
    reasons: "",
    isAccepted: false,
  };

  const resetForm = () => {
    formData = {
      username: "",
      lastname: "",
      email: "",
      role: "",
      reasons: "",
      isAccepted: false,
    };
  };

  const handleSubmit = async () => {
    console.log("Form data:", formData);

    try {
      const response = await fetch("/api/beta/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", response.status);

      const result = await response.json();
      console.log("API Response:", result);

      console.log(response.ok);

      if (!response.ok) {
        resetForm();

        toast.success(
          "Gracias. Recibiras un correo en caso de ser aceptado como tester!"
        );
      }
      
      resetForm();

      console.log("User successfully added:", result);
    } catch (error) {
      resetForm();

      console.error("Catch error:", error);
    }
  };
</script>

<Toaster />

<div
  class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
>
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <img
      class="mx-auto h-10 w-auto"
      src="https://www.svgrepo.com/show/301692/login.svg"
      alt="Workflow"
    />
    <h2
      class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"
    >
      Convertirme en beta tester de Nuvix
    </h2>
    <p class="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
      Tendras acceso anticipado a novedades de la plataforma y en desarrollo
      antes que todos
    </p>
  </div>

  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form on:submit|preventDefault={handleSubmit}>
        <div>
          <label
            for="name"
            class="block text-sm font-medium leading-5 text-gray-700"
            >Nombre</label
          >
          <div class="mt-1 relative rounded-md shadow-sm">
            <input
              id="name"
              name="nombre"
              placeholder="Jafet"
              type="text"
              bind:value={formData.username}
              required
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>
        </div>

        <div class="mt-6">
          <label
            for="username"
            class="block text-sm font-medium leading-5 text-gray-700"
            >Apellido</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <input
              id="username"
              name="lastname"
              placeholder="Doe"
              type="text"
              bind:value={formData.lastname}
              required
              class="flex-1 border border-gray-300 form-input pl-3 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>
        </div>

        <div class="mt-6">
          <label
            for="email"
            class="block text-sm font-medium leading-5 text-gray-700"
            >Email address</label
          >
          <div class="mt-1 relative rounded-md shadow-sm">
            <input
              id="email"
              name="email"
              placeholder="user@example.com"
              type="email"
              bind:value={formData.email}
              required
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>
        </div>

        <div class="mt-6">
          <label
            for="role"
            class="block text-sm font-medium leading-5 text-gray-700">Rol</label
          >
          <div class="mt-1 rounded-md shadow-sm">
            <input
              id="role"
              name="role"
              type="text"
              bind:value={formData.role}
              placeholder="Backend senior"
              required
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>
        </div>

        <div class="mt-6">
          <label
            for="reasons"
            class="block text-sm font-medium leading-5 text-gray-700"
            >Motivos de entrar</label
          >
          <div class="mt-1 rounded-md shadow-sm">
            <input
              id="reasons"
              name="reasons"
              type="text"
              placeholder="Para conocer antes las novedades de nuvix..."
              bind:value={formData.reasons}
              required
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>
        </div>

        <div class="mt-6">
          <span class="block w-full rounded-md shadow-sm">
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Enviar
            </button>
          </span>
        </div>
      </form>
    </div>
  </div>
</div>

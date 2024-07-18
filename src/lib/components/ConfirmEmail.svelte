<script lang="ts">
    export let data

    const email = ''
</script>

<div
  class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white"
>
  <div class="max-w-xl px-5 text-center">
    <h2 class="mb-2 text-[42px] font-bold text-zinc-800">
        Verifica tu cuenta
    </h2>
    <p class="mb-2 text-lg text-zinc-500">
      We are glad, that you’re with us ? We’ve sent you a verification link to
      the email address 
      <span class="font-medium text-indigo-500">
        {email}
      </span>.
    </p>
    <a
      href="/login"
      class="mt-3 inline-block w-96 rounded bg-indigo-600 px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700">
      Abrir la aplicacion
    </a>
  </div>
</div>

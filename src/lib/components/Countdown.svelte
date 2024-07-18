<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  const countdownDate = new Date("August 31, 2024 23:59:59").getTime();
  const timeLeft = writable({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  onMount(() => {
    const interval = setInterval(() => {
      timeLeft.set(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  });
  
</script>

<div class="relative mx-auto mt-10 max-w-lg flex justify-center py-20">
  <div class="grid auto-cols-max grid-flow-col gap-5 text-center">
    <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
      <span class="countdown font-mono text-5xl lg:text-8xl">
        <span style="--value:15;">{$timeLeft.days}:</span>
      </span>
    </div>
    <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
      <span class="countdown font-mono text-5xl lg:text-8xl">
        <span style="--value:10;">{$timeLeft.hours}:</span>
      </span>
    </div>
    <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
      <span class="countdown font-mono text-5xl lg:text-8xl">
        <span style="--value:24;">{$timeLeft.minutes}:</span>
      </span>
    </div>
    <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
      <span class="countdown font-mono text-5xl lg:text-8xl">
        <span>{$timeLeft.seconds}</span>
      </span>
    </div>
  </div>
</div>

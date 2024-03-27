<script setup lang="ts">
import TransitionLayout from "@/components/TransitionLayout.vue";
import { Button } from "@/components/ui/button";
</script>

<template>
  <TransitionLayout class="min-h-screen flex justify-evenly w-full items-center flex-col">
    <div class="flex flex-col-reverse md:flex-row justify-evenly w-full items-center">
      <div class="w-full md:w-[350px] lg:w-[500px] xl:w-[600px] mt-6 md:mt-0">
        <h1 class="text-4xl font-extrabold uppercase">Sucikan hati, bersihkan diri</h1>
        <p class="my-4">
          Al-Hasanah adalah sebuah Website yang bertujuan untuk menyajikan konten-konten berkualitas
          dengan pendekatan islami. Dengan fokus pada nilai-nilai kebaikan dan kebenaran, Al-Hasanah
          memberikan akses kepada pembaca untuk memperoleh informasi yang menginspirasi, mendidik,
          dan memberdayakan.
        </p>
        <RouterLink to="/asmaul-husna">
          <Button class="font-bold"> Explore</Button>
        </RouterLink>
      </div>
      <img
        src="/mosque.jpg"
        class="rounded-lg w-full h-[300px] md:w-[350px] md:hs-[350px] lg:w-[450px] lg:h-[450px] aspect-square"
      />
    </div>
  </TransitionLayout>
</template>

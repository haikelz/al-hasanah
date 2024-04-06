<script setup lang="ts">
import TransitionLayout from "~/components/TransitionLayout.vue";

useSeoMeta({
  title: "About",
  description: "About Al-Hasanah",
  ogImage: "./public/mosque.jpg",
  ogDescription: "About Al-Hasanah",
});
</script>

<template>
  <TransitionLayout
    class="pt-24 pb-12 flex flex-col justify-center items-center"
  >
    <h1 class="text-3xl font-extrabold">About</h1>
    <p class="mt-3 text-center">
      This Website is just for learning purpose. The data are obtained from
      <NuxtLink
        href="https://github.com/haikelz/asmaul-husna-api"
        rel="noopener noreferrer"
        target="_blank"
        class="font-bold underline underline-offset-4"
        >Asma'ul Husna API</NuxtLink
      >
      and
      <NuxtLink
        href="https://github.com/renomureza/api-berita-indonesia"
        rel="noopener noreferrer"
        target="_blank"
        class="font-bold underline underline-offset-4"
      >
        Berita API</NuxtLink
      >. <br class="md:block hidden" />
      And this Website is not affiliated with any company.
    </p>
  </TransitionLayout>
</template>

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
      Website ini dibuat untuk tujuan pembelajaran
      <NuxtLink
        href="https://nuxt.com"
        rel="noopener noreferrer"
        target="_blank"
        class="font-bold underline underline-offset-4"
        >Nuxt JS</NuxtLink
      >. Data Asma'ul Husna didapat dari
      <NuxtLink
        href="https://github.com/haikelz/asmaul-husna-api"
        rel="noopener noreferrer"
        target="_blank"
        class="font-bold underline underline-offset-4"
        >Asma'ul Husna API</NuxtLink
      >, dan untuk data berita didapat dari
      <NuxtLink
        href="https://github.com/renomureza/api-berita-indonesia"
        rel="noopener noreferrer"
        target="_blank"
        class="font-bold underline underline-offset-4"
      >
        Berita API</NuxtLink
      >. Website ini tidak berafiliasi dengan perusahaan manapun.
      <br class="md:block hidden" />
    </p>
  </TransitionLayout>
</template>

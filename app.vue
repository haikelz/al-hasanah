<script setup lang="ts">
import { ArrowUpIcon } from "lucide-vue-next";
import Header from "~/components/Header.vue";
import { Button } from "~/components/ui/button";
import { useScroll } from "./composables";

const scroll = useScroll();

function backToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

useSeoMeta({
  title: "Al-Hasanah",
  description: "Sucikan hati, bersihkan diri",
  ogImage: "./public/mosque.jpg",
  ogDescription: "Sucikan hati, bersihkan diri",
});
</script>

<template>
  <Header />
  <main class="w-full flex justify-center items-center px-4">
    <section class="w-full max-w-7xl flex justify-center items-center flex-col">
      <NuxtPage />
    </section>
  </main>
  <Button
    size="icon"
    class="fixed right-4 bottom-4"
    v-if="scroll > 50"
    @click="backToTop"
  >
    <ArrowUpIcon />
  </Button>
</template>

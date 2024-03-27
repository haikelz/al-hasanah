<script setup lang="ts">
import Header from "@/components/Header.vue";
import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "lucide-vue-next";
import { RouterView } from "vue-router";
import { useScroll } from "./composables";

const scroll = useScroll();

function backToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<template>
  <Header />
  <main class="w-full flex justify-center items-center px-4">
    <section class="w-full max-w-7xl flex justify-center items-center flex-col">
      <RouterView />
    </section>
  </main>
  <Button class="fixed right-4 bottom-4" v-if="scroll > 50" @click="backToTop">
    <ArrowUpIcon />
  </Button>
</template>

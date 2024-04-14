<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import TransitionLayout from "~/components/TransitionLayout.vue";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { decodeHtml } from "~/lib/utils";
import { useStore } from "~/store";

useSeoMeta({
  title: "Berita",
  description: "Lihat daftar berita dari berbagai sumber disini",
  ogImage: "./public/mosque.jpg",
  ogDescription: "Lihat daftar berita dari berbagai sumber disini",
});

const state = useStore();

const { data, isPending, isError, error, isRefetching, refetch } = useQuery({
  queryKey: [state.berita.providerBerita],
  queryFn: () => state.getBerita(),
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
});

function setProviderBerita(e: Event) {
  state.berita.providerBerita = (e.target as HTMLSelectElement).value;
  refetch();
}

function setFallbackImage(e: Event) {
  (e.target as HTMLImageElement).src = "/placeholder.svg";
}
</script>

<template>
  <TransitionLayout
    class="min-h-screen flex justify-start w-full items-center pt-24 pb-12 flex-col"
  >
    <div class="flex flex-col justify-center w-full items-center">
      <div class="w-full flex mb-4 justify-end items-center">
        <span class="mr-3 font-medium">Select provider</span>
        <select
          name="provider-berita"
          @change="setProviderBerita"
          v-model="state.berita.providerBerita"
          class="text-neutral-950"
        >
          <option v-for="item in state.berita.listProviderBerita" :value="item">
            {{ item }}
          </option>
        </select>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 grid-rows-1 gap-4 w-full"
        v-if="data?.length && !isError && !isRefetching && !isPending"
      >
        <NuxtLink
          v-for="(item, index) in data"
          :href="item.link"
          :key="index + 1"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Card class="h-full w-full pb-5">
            <NuxtImg
              :src="item.thumbnail"
              :alt="item.title"
              class="rounded-t-md max-h-[250px] h-full w-full"
              loading="lazy"
              @error="setFallbackImage"
            />
            <CardHeader>
              <CardTitle>
                {{ item.title }}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {{ decodeHtml(item.description) }}
              </CardDescription>
            </CardContent>
          </Card>
        </NuxtLink>
      </div>
    </div>
    <span class="font-bold text-xl" v-if="isPending || isRefetching"
      >Loading....</span
    >
    <span class="font-bold text-xl" v-if="isError && !isRefetching">{{
      error?.message
    }}</span>
  </TransitionLayout>
</template>

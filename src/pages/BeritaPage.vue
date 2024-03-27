<script setup lang="ts">
import TransitionLayout from "@/components/TransitionLayout.vue";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useStore } from "@/store";
import { useQuery } from "@tanstack/vue-query";

const state = useStore();

const { data, isPending, isError, error, isRefetching, refetch } = useQuery({
  queryKey: [state.berita.providerBerita],
  queryFn: () => state.getBerita(),
  refetchOnWindowFocus: false,
  refetchOnReconnect: false
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
    class="min-h-screen flex justify-center w-full items-center pt-24 pb-12 flex-col"
  >
    <span class="font-bold text-xl" v-if="isPending || isRefetching">Loading....</span>
    <span class="font-bold text-xl" v-if="isError">{{ error?.message }}</span>
    <div
      class="flex flex-col justify-center items-center"
      v-if="data?.length && !isError && !isRefetching && !isPending"
    >
      <div class="w-full flex mb-4 justify-end items-center">
        <span class="mr-3 font-medium">Select provider</span>
        <select
          name="provider-berita"
          @change="setProviderBerita"
          v-model="state.berita.providerBerita"
          class="text-neutral-950"
        >
          <option v-for="item in state.berita.listProviderBerita" :value="item">{{ item }}</option>
        </select>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 grid-rows-1 gap-4 w-full">
        <a
          v-for="(item, index) in data"
          :href="item.link"
          :key="index + 1"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Card class="h-full">
            <img
              :src="item.thumbnail"
              :alt="item.title"
              class="rounded-t-md w-full"
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
                {{ item.description }}
              </CardDescription>
            </CardContent>
          </Card>
        </a>
      </div>
    </div>
  </TransitionLayout>
</template>

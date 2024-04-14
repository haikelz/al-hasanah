<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import slugify from "slugify";
import TransitionLayout from "~/components/TransitionLayout.vue";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { useStore } from "~/store";

useSeoMeta({
  title: "Asma'ul Husna",
  description: "Lihat daftar Asma'ul Husna disini",
  ogImage: "./public/mosque.jpg",
  ogDescription: "Lihat daftar Asma'ul Husna disini",
});

const state = useStore();

const { refetch, isPending, isError, data, error, isRefetching } = useQuery({
  queryKey: [state.asmaulHusna.page, state.asmaulHusna.limit],
  queryFn: () => state.getAsmaulHusna(),
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
});

function setPage(item: number) {
  state.asmaulHusna.page = item;
  refetch();
}

function setLimit(e: Event) {
  state.asmaulHusna.limit = Number((e.target as HTMLSelectElement).value);
  refetch();
}
</script>

<template>
  <TransitionLayout
    class="w-full min-h-screen pt-24 pb-12 flex justify-start items-center flex-col"
  >
    <div class="flex w-full flex-col justify-center items-center">
      <div class="w-full flex justify-end items-center mb-4">
        <div>
          <span class="mr-3 font-medium">Select limit per page</span>
          <select
            name="asmaul-husna"
            @change="setLimit"
            v-model="state.asmaulHusna.limit"
            class="text-neutral-950"
          >
            <option :value="20">20</option>
            <option :value="30">30</option>
            <option :value="40">40</option>
            <option :value="50">50</option>
          </select>
        </div>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 grid-rows-1 gap-4 w-full"
        v-if="data?.length && !isRefetching && !isError && !isPending"
      >
        <NuxtLink
          v-for="item in data"
          :to="
            '/asmaul-husna/' + slugify(item.urutan.toString(), { lower: true })
          "
          :key="item.urutan"
        >
          <Card class="h-full">
            <CardHeader>
              <p>{{ item.urutan }}</p>
              <CardTitle>
                <p>{{ item.arab }}</p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription class="font-bold text-lg">
                {{ item.latin }}
              </CardDescription>
              <CardDescription>{{ item.arti }}</CardDescription>
            </CardContent>
          </Card>
        </NuxtLink>
      </div>
      <div
        class="flex justify-center items-center space-x-3 flex-wrap mt-8"
        v-if="data?.length && !isRefetching && !isError && !isPending"
      >
        <Button
          v-bind:variant="
            state.asmaulHusna.page === item ? 'default' : 'outline'
          "
          v-for="item in state.asmaulHusna.pagesList"
          @click="setPage(item)"
          >{{ item }}</Button
        >
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

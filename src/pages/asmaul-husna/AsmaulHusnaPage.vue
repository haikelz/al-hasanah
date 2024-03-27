<script setup lang="ts">
import TransitionLayout from "@/components/TransitionLayout.vue";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useStore } from "@/store";
import { useQuery } from "@tanstack/vue-query";
import slugify from "slugify";
import { RouterLink } from "vue-router";

const state = useStore();

const { refetch, isPending, isError, data, error, isRefetching } = useQuery({
  queryKey: [state.asmaulHusna.page, state.asmaulHusna.limit],
  queryFn: () => state.getAsmaulHusna(),
  refetchOnWindowFocus: false,
  refetchOnReconnect: false
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
    class="w-full min-h-screen pt-24 pb-12 flex justify-center items-center flex-col"
  >
    <span class="font-bold text-xl" v-if="isPending || isRefetching">Loading....</span>
    <span class="font-bold text-xl" v-if="isError">{{ error?.message }}</span>
    <div
      v-if="data?.length && !isRefetching && !isError && !isPending"
      class="flex flex-col justify-center items-center"
    >
      <div class="w-full flex justify-end items-center mb-4">
        <div>
          <span class="mr-3 font-medium">Select limit per page</span>
          <select
            name="fruit"
            @change="setLimit"
            v-model="state.asmaulHusna.limit"
            class="text-neutral-950"
          >
            <option :value="10">10</option>
            <option :value="20">20</option>
            <option :value="30">30</option>
            <option :value="40">40</option>
            <option :value="50">50</option>
          </select>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 grid-rows-1 gap-4 w-full">
        <RouterLink
          v-for="item in data"
          :to="'/asmaul-husna/' + slugify(item.urutan.toString())"
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
        </RouterLink>
      </div>
      <div class="space-x-3 mt-8">
        <Button
          v-bind:variant="state.asmaulHusna.page === item ? 'default' : 'outline'"
          v-for="item in state.asmaulHusna.pagesList"
          @click="setPage(item)"
          >{{ item }}</Button
        >
      </div>
    </div>
  </TransitionLayout>
</template>

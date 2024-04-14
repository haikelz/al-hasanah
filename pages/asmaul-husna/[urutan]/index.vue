<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { CheckIcon, LinkIcon } from "lucide-vue-next";
import { useRoute } from "vue-router";
import TransitionLayout from "~/components/TransitionLayout.vue";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { useCopyClipboard } from "~/composables";
import { useStore } from "~/store";

useSeoMeta({
  title: "Detail",
  description: "Lihat detail Asma'ul Husna disini",
  ogImage: "./public/mosque.jpg",
  ogDescription: "Lihat detail Asma'ul Husna disini",
});

const route = useRoute();
const state = useStore();

const { data, isPending, isError, error } = useQuery({
  queryKey: [Number(route.params.urutan)],
  queryFn: () => state.getDetail(Number(route.params.urutan)),
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
});

const { isSuccess, copyText } = useCopyClipboard();
</script>

<template>
  <TransitionLayout
    class="flex justify-center flex-col items-center w-full pt-24 pb-12"
  >
    <span class="font-bold text-xl" v-if="isPending">Loading....</span>
    <span class="font-bold text-xl" v-if="isError">{{ error?.message }}</span>
    <div v-if="data">
      <Card class="h-full">
        <CardHeader>
          {{ data.urutan }}
          <CardTitle>
            {{ data.arab }}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription class="font-bold text-lg">
            {{ data.latin }}
          </CardDescription>
          <CardDescription>{{ data.arti }}</CardDescription>
        </CardContent>
      </Card>
      <div class="mt-4 flex justify-center items-center">
        <Button
          class="flex justify-center items-center space-x-2"
          @click="
            copyText(`https://al-hasanah.pages.dev/detail/${data.urutan}`)
          "
        >
          <span class="font-bold" v-if="isSuccess"> Success! </span>
          <span class="font-bold" v-else> Copy URL </span>
          <CheckIcon v-if="isSuccess" />
          <LinkIcon v-else />
        </Button>
      </div>
    </div>
  </TransitionLayout>
</template>

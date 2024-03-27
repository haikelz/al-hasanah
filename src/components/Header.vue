<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { RouterLink } from "vue-router";
import DarkMode from "./DarkMode.vue";
import { useScroll } from "@/composables";
import { cn } from "@/lib/helpers";

const scroll = useScroll();
</script>

<template>
  <header
    :class="
      cn(
        'w-full fixed top-0 z-50 px-4 flex justify-center items-center',
        scroll >= 90
          ? 'border-b bg-white/80 dark:bg-neutral-950 backdrop-blur-md border-neutral-300 dark:border-neutral-600'
          : ''
      )
    "
  >
    <nav class="w-full md:max-w-7xl flex justify-between py-4 items-center">
      <div>
        <RouterLink to="/" class="font-bold text-2xl"> Al-Hasanah </RouterLink>
      </div>
      <div class="flex justify-center items-center w-fit space-x-3">
        <DarkMode />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button class="font-bold">Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <RouterLink to="/about" class="font-semibold">
              <DropdownMenuItem> About </DropdownMenuItem>
            </RouterLink>
            <RouterLink to="/asmaul-husna" class="font-semibold">
              <DropdownMenuItem> Asma'ul Husna </DropdownMenuItem>
            </RouterLink>
            <RouterLink to="/berita" class="font-semibold">
              <DropdownMenuItem> Berita </DropdownMenuItem>
            </RouterLink>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  </header>
</template>

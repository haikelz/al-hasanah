<script lang="ts" setup>
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useColorMode } from "@vueuse/core";
import { MoonIcon, SunIcon } from "lucide-vue-next";

const mode = useColorMode();
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" size="icon">
        <SunIcon
          v-if="mode === 'light'"
          className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <MoonIcon
          v-if="mode === 'dark'"
          className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem :onclick="() => (mode = 'auto')" class="font-semibold">
        Auto
      </DropdownMenuItem>
      <DropdownMenuItem :onclick="() => (mode = 'light')" class="font-semibold">
        Light
      </DropdownMenuItem>
      <DropdownMenuItem :onclick="() => (mode = 'dark')" class="font-semibold">
        Dark
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

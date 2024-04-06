import { expect, it, test } from "vitest";
import DarkMode from "../../components/DarkMode.vue";
import { mountSuspended } from "@nuxt/test-utils/runtime";

test("dark mode component", async () => {
  const darkMode = await mountSuspended(DarkMode);
  expect(darkMode).toBeDefined();
});

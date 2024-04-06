import { expect, test } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Header from "../../components/Header.vue";

test("header component", async () => {
  const header = await mountSuspended(Header);
  expect(header).toBeDefined();
});

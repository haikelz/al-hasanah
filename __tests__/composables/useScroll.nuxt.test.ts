import { expect, test } from "vitest";
import { useScroll } from "../../composables/useScroll";

test("Value from useScroll must be either 0 or greater", () => {
  const scrollValue = useScroll();
  expect(scrollValue.value).toBeGreaterThanOrEqual(0);
});

import { test, expect } from "vitest";

test("useCopyClipboard test", async () => {
  const { copyText } = useCopyClipboard();
  const copy = copyText("Anu mase");

  expect(copy).toBeDefined();
});

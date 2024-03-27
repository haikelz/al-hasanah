import { useScroll } from "../../src/composables";

describe("useScroll", () => {
  it("listen to user's scroll", () => {
    const scroll = useScroll();

    expect(scroll.value).toBeDefined();
    expect(scroll.value).toBeGreaterThanOrEqual(0);
  });
});

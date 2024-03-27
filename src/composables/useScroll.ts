import { onMounted, onUnmounted, ref } from "vue";

export function useScroll() {
  const scroll = ref<number>(0);

  function handleScroll() {
    scroll.value = window.scrollY;
  }

  onMounted(() => window.addEventListener("scroll", handleScroll, { passive: true }));
  onUnmounted(() => window.removeEventListener("scroll", handleScroll));

  return scroll;
}

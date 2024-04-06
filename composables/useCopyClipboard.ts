import { ref } from "vue";

const isSuccess = ref<boolean>(false);

export function useCopyClipboard() {
  async function copyText(text: string) {
    try {
      await navigator.clipboard.writeText(text).then(() => {
        isSuccess.value = true;

        setTimeout(() => {
          isSuccess.value = false;
        }, 800);
      });
    } catch (err) {
      console.error(err);
    }
  }

  return {
    isSuccess,
    copyText,
  };
}

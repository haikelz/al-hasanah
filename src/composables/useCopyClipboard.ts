import { ref } from "vue";

const isSuccess = ref<boolean>(false);
const textFromClipboard = ref<string>("");

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

  async function readTextFromClipboard() {
    try {
      await navigator.clipboard.readText().then((value) => {
        textFromClipboard.value = value;
      });
    } catch (err) {
      console.error(err);
    }
  }

  readTextFromClipboard();

  return {
    isSuccess,
    copyText,
    textFromClipboard
  };
}

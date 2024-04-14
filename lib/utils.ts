import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function decodeHtml(html: string) {
  let txt = document.createElement("textarea");
  txt.innerHTML = html;

  return txt.value;
}

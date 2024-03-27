import type { AsmaulHusnaProps, BeritaProps } from "@/interfaces";
import { ASMAUL_HUSNA_API, BERITA_API } from "@/lib/utils/constants";
import { ofetch } from "ofetch";
import { defineStore } from "pinia";
import { ref } from "vue";

type ListProviderBeritaProps =
  | "antara"
  | "cnbc"
  | "cnn"
  | "jpnn"
  | "kumparan"
  | "merdeka"
  | "okezon"
  | "republika"
  | "sindonews"
  | "suara"
  | "tempo"
  | "tribun";

export const useStore = defineStore("store", {
  state: () => ({
    berita: {
      providerBerita: ref<string>("antara"),
      listProviderBerita: ref<ListProviderBeritaProps[]>([
        "antara",
        "cnbc",
        "cnn",
        "jpnn",
        "kumparan",
        "merdeka",
        "okezon",
        "republika",
        "sindonews",
        "suara",
        "tempo",
        "tribun"
      ])
    },
    asmaulHusna: {
      pagesList: ref<number[] | null>(null),
      limit: ref<number>(20),
      page: ref<number>(1)
    }
  }),
  actions: {
    async getAsmaulHusna(): Promise<AsmaulHusnaProps[] | undefined> {
      try {
        const response = await ofetch(
          `${ASMAUL_HUSNA_API}/api/all?page=${this.asmaulHusna.page}&limit=${this.asmaulHusna.limit}`,
          {
            method: "GET",
            parseResponse: JSON.parse,
            responseType: "json"
          }
        );

        this.asmaulHusna.pagesList = new Array(Math.round(99 / this.asmaulHusna.limit))
          .fill(null)
          .map((_, index) => index + 1);

        return response.data;
      } catch (err) {
        console.error(err);
      }
    },
    async getBerita(): Promise<BeritaProps[] | undefined> {
      try {
        const response = await ofetch(
          `${BERITA_API}/${this.berita.providerBerita}/${
            this.berita.providerBerita === "tempo" ? "nasional" : "terbaru"
          }/`,
          {
            method: "GET",
            responseType: "json",
            parseResponse: JSON.parse,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            }
          }
        );

        return response.data.posts;
      } catch (err) {
        console.error(err);
      }
    },
    async getDetail(urutan: number): Promise<AsmaulHusnaProps | undefined> {
      try {
        const response = await ofetch(`${ASMAUL_HUSNA_API}/api/${urutan}`, {
          method: "GET",
          parseResponse: JSON.parse,
          responseType: "json"
        });

        return response.data;
      } catch (err) {
        console.error(err);
      }
    }
  }
});
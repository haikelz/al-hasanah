import { ofetch } from "ofetch";
import { defineStore } from "pinia";
import type { AsmaulHusnaProps, BeritaProps } from "~/interfaces";

type ListProviderBeritaProps =
  | "antara"
  | "cnbc"
  | "cnn"
  | "jpnn"
  | "kumparan"
  | "republika"
  | "sindonews"
  | "tribun";

export const useStore = defineStore("store", {
  state: () => ({
    berita: {
      providerBerita: "kumparan",
      listProviderBerita: [
        "antara",
        "cnbc",
        "cnn",
        "jpnn",
        "kumparan",
        "republika",
        "sindonews",
        "tribun",
      ] as ListProviderBeritaProps[],
    },
    asmaulHusna: {
      pagesList: null as number[] | null,
      limit: 20,
      page: 1,
    },
  }),
  actions: {
    async getAsmaulHusna(): Promise<AsmaulHusnaProps[] | undefined> {
      try {
        const response = await ofetch(
          `https://asmaul-husna-api.vercel.app/api/all?page=${
            /**
             * Detect if the user's page is not synchron with the page value from API
             * And change the user's page value to default(1)
             */
            this.asmaulHusna.limit === 20 && this.asmaulHusna.page > 5
              ? (this.asmaulHusna.page = 1)
              : this.asmaulHusna.limit === 30 && this.asmaulHusna.page > 4
              ? (this.asmaulHusna.page = 1)
              : this.asmaulHusna.limit === 40 && this.asmaulHusna.page > 3
              ? (this.asmaulHusna.page = 1)
              : this.asmaulHusna.limit === 50 && this.asmaulHusna.page > 2
              ? (this.asmaulHusna.page = 1)
              : this.asmaulHusna.page
          }&limit=${this.asmaulHusna.limit}`,
          {
            method: "GET",
            parseResponse: JSON.parse,
            responseType: "json",
          }
        );

        this.asmaulHusna.pagesList = new Array(
          Math.ceil(99 / this.asmaulHusna.limit)
        )
          .fill(null)
          .map((_, index) => index + 1);

        return response.data;
      } catch (err: any) {
        throw new Error(`Gagal mendapatkan data!`);
      }
    },
    async getBerita(): Promise<BeritaProps[] | undefined> {
      try {
        const response = await ofetch(
          `https://api-berita-indonesia.vercel.app/${
            this.berita.providerBerita
          }/${
            this.berita.providerBerita === "tempo" ? "nasional" : "terbaru"
          }/`,
          {
            method: "GET",
            responseType: "json",
            parseResponse: JSON.parse,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );

        return response.data.posts;
      } catch (err: any) {
        throw new Error(`Gagal mendapatkan data!`);
      }
    },
    async getDetail(urutan: number): Promise<AsmaulHusnaProps | undefined> {
      try {
        const response = await ofetch(
          `https://asmaul-husna-api.vercel.app/api/${urutan}`,
          {
            method: "GET",
            parseResponse: JSON.parse,
            responseType: "json",
          }
        );

        return response.data;
      } catch (err: any) {
        throw new Error(`Gagal mendapatkan data!`);
      }
    },
  },
});

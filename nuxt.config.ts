// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/styles/main.css"],
  modules: [
    "shadcn-nuxt",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@hebilicious/vue-query-nuxt",
    "@vueuse/motion/nuxt",
    "@nuxt/image",
    "@nuxt/test-utils/module",
  ],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
});

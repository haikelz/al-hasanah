import { VueQueryPlugin } from "@tanstack/vue-query";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "./styles/main.css";
import AboutPage from "./pages/AboutPage.vue";
import BeritaPage from "./pages/BeritaPage.vue";
import HomePage from "./pages/HomePage.vue";
import AsmaulHusnaPage from "./pages/asmaul-husna/AsmaulHusnaPage.vue";
import DetailAsmaulHusnaPage from "./pages/asmaul-husna/detail/DetailAsmaulHusnaPage.vue";
import { createPinia } from "pinia";
import { MotionPlugin } from "@vueuse/motion";

const pinia = createPinia();
const app = createApp(App);

app.use(MotionPlugin);
app.use(pinia);
app.use(VueQueryPlugin);
app.use(
  createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: "/",
        name: "home",
        component: HomePage
      },
      {
        path: "/asmaul-husna",
        name: "asmaul-husna",
        component: AsmaulHusnaPage
      },
      {
        path: "/asmaul-husna/:urutan",
        name: "detail",
        component: DetailAsmaulHusnaPage
      },
      {
        path: "/about",
        name: "about",
        component: AboutPage
      },
      {
        path: "/berita",
        name: "berita",
        component: BeritaPage
      }
    ]
  })
);

app.mount("#app");

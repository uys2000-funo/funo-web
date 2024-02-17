// https://nuxt.com/docs/api/configuration/nuxt-config
import { pinia } from "./nuxt.modules";
import routeRules from "./configs/RouteRules";

export default defineNuxtConfig({
  srcDir: "src/",
  ssr: true,
  modules: [pinia],
  imports: {
    dirs: ["stores", "server/errors", "server/types"],
  },
  css: ["~/assets/style/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    firebase: {
      nodeVersion: "18",
    },
    preset: "firebase",
  },
  routeRules: routeRules,
});

// https://nuxt.com/docs/api/configuration/nuxt-config
import { pinia } from "./nuxt.modules";

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
});

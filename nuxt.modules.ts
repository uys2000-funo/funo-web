import { NuxtModule } from "nuxt/schema";

export const pinia = [
  "@pinia/nuxt",
  {
    autoImports: [
      "defineStore",
      ["defineStore", "definePiniaStore"],
      "acceptHMRUpdate",
    ],
  },
] as [NuxtModule | string, Record<string, any>];

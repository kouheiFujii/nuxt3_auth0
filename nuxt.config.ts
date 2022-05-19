import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      NUXT_APP_AUTH0_DOMAIN: process.env.NUXT_APP_AUTH0_DOMAIN,
      NUXT_APP_AUTH0_CLIENT_ID: process.env.NUXT_APP_AUTH0_CLIENT_ID,
    },
  },
});

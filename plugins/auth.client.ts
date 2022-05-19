import { Auth0 } from "~~/services/auth0";

export default defineNuxtPlugin(async () => {
  const domain = useRuntimeConfig().NUXT_APP_AUTH0_DOMAIN;
  const client_id = useRuntimeConfig().NUXT_APP_AUTH0_CLIENT_ID;

  await Auth0.createClient({
    domain,
    client_id,
    redirect_uri: window.location.href,
  });
  return {
    provide: {
      auth: Auth0.authPlugin,
    },
  };
});

import { useBody } from "h3";
import { encrypted } from "~~/server/utils/rsa";

export default defineEventHandler(async (event) => {
  const body = await useBody<{ text: string }>(event.req);

  const encryptText = encrypted(body.text);

  return {
    text: encryptText,
  };
});

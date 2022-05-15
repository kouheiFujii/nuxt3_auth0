import { useBody } from "h3";
import { decrypted } from "~~/server/utils/rsa";

export default defineEventHandler(async (event) => {
  const body = await useBody<{ text: string }>(event.req);

  const decryptText = decrypted(body.text);

  return {
    text: decryptText,
  };
});

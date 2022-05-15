import NodeRSA from "node-rsa";

const key = new NodeRSA({ b: 512 });

export const encrypted = (text: string): string => key.encrypt(text, "base64");

export const decrypted = (encrypted: string): string =>
  key.decrypt(encrypted, "utf8");

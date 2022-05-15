<script lang="ts" setup>
// 型宣言されている
const mountain = await $fetch("/api/mountain");
const colors = await $fetch("/api/colors");

const getRes = await $fetch("/api/test/test", { method: "GET" });
const text = ref("");
const encrypted = ref<string>();
const decrypted = ref<string>();

const encryptedText = async (e: Event) => {
  e.preventDefault();
  const res = await $fetch<{ text: string }>("/api/encrypt/encrypt", {
    method: "POST",
    body: { text: text.value },
  });

  encrypted.value = res.text;
};

const decryptedText = async (e: Event) => {
  e.preventDefault();
  const res = await $fetch<{ text: string }>("/api/decrypt/decrypt", {
    method: "POST",
    body: { text: encrypted.value },
  });

  decrypted.value = res.text;
};
</script>

<template>
  <div>
    <h2>/api/mountain response</h2>
    <div>
      <h3>{{ mountain.title }}</h3>
      <p>
        {{ mountain.description }}
      </p>
      <img :src="mountain.image" alt="" width="200" height="200" />
    </div>

    <h2>/api/mountain response</h2>
    <div v-for="c in colors">
      <p :style="{ color: c.value }">
        {{ c.color }}
      </p>
    </div>

    <h2>/api/test/test.get response</h2>
    <div>
      <p>{{ getRes }}</p>
    </div>

    <h2>/api/test/test.post</h2>
    <form @submit="encryptedText">
      <input type="text" v-model="text" />
      <button type="submit">encrypt</button>
    </form>
    <div>
      <h3>encrypted:</h3>
      <p>{{ encrypted }}</p>
    </div>
    <div v-if="encrypted">
      <button @click="decryptedText">decrypt</button>
      <h3>decrypted:</h3>
      <p>{{ decrypted }}</p>
    </div>
  </div>
</template>

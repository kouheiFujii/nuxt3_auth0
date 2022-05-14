<script setup>
const router = useRouter();
const name = ref("");
const type = ref(1);

const inc = () => type.value++;
const dec = () => type.value--;

function navigate() {
  return navigateTo({
    path: "/search",
    query: {
      name: name.value,
      type: type.value,
    },
  });
}
</script>

<template>
  <div>
    <h1>I am navigation page</h1>
    <div>name: <input type="text" v-model="name" /></div>
    <div>
      {{ type }}
      <button @click="inc">+</button>
      <button @click="dec">-</button>
    </div>

    <button @click="navigate">search</button>
  </div>
</template>

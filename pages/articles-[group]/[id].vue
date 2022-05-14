<script lang="ts" setup>
const route = useRoute();
</script>

<template>
  <div>
    <!-- http://localhost:3000/articles-nuxt/99 -->
    <p>{{ route.params.group }}</p>
    <!-- <p>nuxt</p> -->
    <p>{{ route.params.id }}</p>
    <!-- <p>99</p> -->
  </div>
</template>

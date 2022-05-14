<script lang="ts" setup>
const route = useRoute();
</script>

<template>
  <div>
    <h1>serach result</h1>
    <p>input name: {{ route.query.name }}</p>
    <p>type num: {{ route.query.type }}</p>
  </div>
</template>

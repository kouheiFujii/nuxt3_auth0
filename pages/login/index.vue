<script lang="ts" setup>
const { $auth } = useNuxtApp();
const login = () => {
  $auth.login();
};

const logout = () => {
  $auth.logout();
};
</script>

<template>
  <div>
    ログイン状態：{{ $auth.isAuthenticated }}
    <h1>ログインページ</h1>
    <div v-if="!$auth.isAuthenticated.value">
      <button @click="login">ログイン</button>
    </div>

    <div v-if="$auth.isAuthenticated.value">
      <button @click="logout">ログアウト</button>
    </div>
  </div>
</template>

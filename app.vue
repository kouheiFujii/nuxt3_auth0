<template>
  <div>
    <ClientOnly>
      <NuxtPage />
      <template #fallback>
        <p>Loading...</p>
      </template>
    </ClientOnly>
  </div>
</template>


<script setup lang="ts">
  import { RouterView } from 'vue-router'
</script>

<template>
  <main class="w-screen h-screen overflow-hidden bg-black hidden sm:block">
    <RouterView class="w-full h-full flex flex-col justify-center items-center *:screen-1920p" />
  </main>
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import Navigation from './components/Navigation.vue';
  import Footer from '@views/Footer.vue';
</script>

<template>
  <main id="scrollRoot" class="w-screen h-screen overflow-x-hidden bg-black scrollbar">
    <Navigation />
    <RouterView class="w-full flex flex-col justify-center items-center" />
    <Footer />
  </main>
</template>


<style>
  .scrollbar::-webkit-scrollbar-thumb {
    @apply bg-orange-400;
    @apply rounded-lg;
  }
  .scrollbar::-webkit-scrollbar {
    @apply bg-slate-700;
    @apply w-[0.5em];
  }
</style>
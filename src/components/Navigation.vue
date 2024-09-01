<script setup lang="ts">
  import router from '../router';
  import NavigationLink from '@components/NavigationLink.vue';
  import {
    HomeIcon,
  } from '@assets/icons';

</script>

<template>
  <section 
    :class="[
      {'opacity-0 pointer-events-none' : router.currentRoute.value.name === 'init'},
      'w-full h-10 px-4 transition-opacity duration-300',
      'bg-slate-700 glass-sm ',
      'top-0 sticky flex justify-between',
      'z-menu',
    ]"
  >
    <div class="flex">
      <NavigationLink to="/landing"><HomeIcon /></NavigationLink>
    </div>
    <div class="flex justify-end gap-x-6">
      <NavigationLink to="/projects">Personal Projects</NavigationLink>
      <NavigationLink to="/pastworks">Past Work</NavigationLink>
    </div>
  </section>
</template>
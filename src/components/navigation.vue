<script setup lang="ts">
  import router from '../router';

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
      <RouterLink to="/landing" class="hover:text-orange-400 self-center">=</RouterLink>
    </div>
    <div class="flex justify-end gap-x-6">
      <RouterLink to="/projects" class="hover:text-orange-400 self-center">Personal Projects</RouterLink>
      <RouterLink to="/pastworks" class="hover:text-orange-400 self-center">Past Work</RouterLink>
    </div>
  </section>
</template>
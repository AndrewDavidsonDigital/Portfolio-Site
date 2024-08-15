<script setup lang="ts">

</script>

<template>
  <section class="w-full h-10 bg-slate-700 glass-sm sticky flex justify-between px-4">
    <div class="flex">
      <RouterLink to="/landing" class="hover:text-orange-400 self-center">=</RouterLink>
    </div>
    <div class="flex justify-end gap-x-6">
      <RouterLink to="/projects" class="hover:text-orange-400 self-center">Personal Projects</RouterLink>
      <RouterLink to="/pastworks" class="hover:text-orange-400 self-center">Past Work</RouterLink>
    </div>
  </section>
</template>
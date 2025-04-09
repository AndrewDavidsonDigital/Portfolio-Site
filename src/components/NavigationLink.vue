<script setup lang="ts">

  interface Props {
    to: string;
  }

  const props = defineProps<Props>();
</script>

<template>
  <RouterLink
    t
    :to="props.to" 
    class="
      self-center 
      hover:text-orange-400 transition-all duration-300
      hover:[&>svg]:stroke-orange-400 [&>svg]:transition-all [&>svg]:duration-300 
    "
    active-class="text-orange-400 [&>svg]:stroke-orange-400 opacity-80 [&>svg]:opacity-80 underline underline-offset-4 pointer-events-none"
  >
    <slot />
  </RouterLink>
</template>
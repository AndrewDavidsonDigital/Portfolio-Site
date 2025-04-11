<script setup lang="ts">

  interface Props {
    to: string;
  }

  const props = defineProps<Props>();
</script>

<template>
  <RouterLink
    :to="props.to" 
    class="
      self-center 
      hover:text-orange-300 transition-all duration-300
      hover:[&>svg]:stroke-orange-300 [&>svg]:transition-all [&>svg]:duration-300 
    "
    active-class="text-orange-300 [&>svg]:stroke-orange-300 opacity-80 [&>svg]:opacity-80 underline underline-offset-4 pointer-events-none"
  >
    <slot />
  </RouterLink>
</template>
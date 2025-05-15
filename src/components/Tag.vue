<script setup lang="ts">
  interface Props {
    copy: string;
  }

  const props = defineProps<Props>();
</script>

<template>
  <div 
    class="
      px-2
      bg-white/50 text-black 
      w-fit h-fit
      rounded-xl  
      glass-sm 
      text-sm text-center
      moz-text-center
    "
  >
    {{ props.copy }}
  </div>
</template>

<style lang="css" scoped>
  @supports (-moz-appearance:none) {
    .moz-text-center {
      @apply pb-0.5;
    }
  }
</style>
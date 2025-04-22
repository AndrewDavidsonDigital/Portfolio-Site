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
      
    "
  >
    {{ props.copy }}
  </div>
</template>
<script setup lang="ts">
interface Props {
  copy: string;
}

const props = defineProps<Props>();

</script>

<template>
  <div class="px-2 py-0.5 bg-white/50 text-black w-fit rounded-xl text-sm glass-sm">
    {{ props.copy }}
  </div>
</template>
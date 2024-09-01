<script setup lang="ts">
  export interface ITab {
    key: string;
    title: string;
  };
  interface Props {
    tabs: ITab[];
  }

  const props = defineProps<Props>();
  ;
</script>

<template>
  <section class="flex gap-4">
    <template v-for="(tab, index) in props.tabs" :key="`tabIndex_${index}`">
      <div @click="$emit('setActive', tab.key)">{{ tab.title }}</div>
    </template>
  </section>
  <slot></slot>
</template>
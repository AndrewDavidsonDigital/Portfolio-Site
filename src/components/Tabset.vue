<script setup lang="ts">
import { ref } from 'vue';

  export interface ITab {
    key: string;
    title: string;
  };
  interface Props {
    tabs: ITab[];
  }

  const props = defineProps<Props>();
  const $emit = defineEmits(['setActive']);
  
  const currentlyActive = ref<string>(props.tabs[0].key);

  function setActive(key: string){
    currentlyActive.value = key;
    $emit('setActive', key);
    document.getElementById('scrollRoot')?.scrollTo({ top: 0, behavior: 'smooth' });
  }

</script>

<template>
  <section class="flex gap-4 py-2 sticky top-[2.5rem] w-screen justify-center bg-black z-menu">
    <template v-for="(tab, index) in props.tabs" :key="`tabIndex_${index}`">
      <button 
        :class="[
          'transition-colors duration-300',
          { 'text-orange-400 pointer-events-none' : currentlyActive === tab.key},
        ]"
        @click="setActive(tab.key)"
      >{{ tab.title }}</button>
    </template>
  </section>
  <slot></slot>
</template>
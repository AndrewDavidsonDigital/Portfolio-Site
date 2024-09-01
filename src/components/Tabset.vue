<script setup lang="ts">
import { onMounted, ref } from 'vue';
import router from '../router';

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
    router.push({ path: router.currentRoute.value.path ,hash: `#${key}` });
  }

  onMounted(() => {
    let routeHash = router.currentRoute.value.hash;
    if (routeHash){
      routeHash = routeHash.slice(1);
      const isValidHash = props.tabs.findIndex((el) => el.key === routeHash) !== -1;
      if (isValidHash){
        setActive(routeHash);
      }
    }else{
      document.getElementById('scrollRoot')?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

</script>

<template>
  <section v-if="props.tabs.length > 1" class="flex gap-4 py-2 sticky top-[2.5rem] w-screen justify-center bg-black z-menu border-b-2 border-slate-900">
    <template v-for="(tab, index) in props.tabs" :key="`tabIndex_${index}`">
      <button
        :class="[
          'transition-colors duration-300',
          { 'text-orange-400 underline underline-offset-4 pointer-events-none' : currentlyActive === tab.key},
          { '' : index === -1} // BS check here since TSC complains about index not being used but is used in key on own template
        ]"
        @click="setActive(tab.key)"
      >{{ tab.title }}</button>
    </template>
  </section>
  <slot></slot>
</template>
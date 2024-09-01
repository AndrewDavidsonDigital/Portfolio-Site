<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  const timeElement = ref<HTMLParagraphElement>();
  const WORDS_PER_MINUTE_ADULT = 265;

  onMounted(() => {
    if (timeElement.value){
      // need to go 2 parents deep for some reason
      const text = timeElement.value.parentElement?.parentElement?.innerText || '';
      const words = text.trim().split(/\s+/).length;
      const time = Math.ceil(words / WORDS_PER_MINUTE_ADULT);
      timeElement.value.innerText = `${time}`;
    }
  });

</script>

<template>
  <p 
    class="py-2 w-full max-w-content 3xl:max-w-lg-content 4xl:max-w-xl-content mx-auto px-4 md:px-10 text-slate-300 italic"
  ><span ref="timeElement"></span> min read</p>
</template>
<script setup lang="ts">

  interface Props {
    content: string;
    language?: string;
    caption?: string;
  }

  const props = defineProps<Props>();

</script>

<template>
  <section class="flex flex-col items-center w-screen px-2 pb-2 md:w-fit md:max-w-[60rem] mx-auto overflow-hidden [&>pre>code]:whitespace-pre-wrap [&>pre>code]:rounded-lg">
    <highlightjs :autodetect="props?.language ? false : true" :code="props.content" :language="props.language"/>
    <div v-if="props?.caption" class="italic font-normal text-center text-balance">{{ props.caption }}</div>
  </section>
</template>

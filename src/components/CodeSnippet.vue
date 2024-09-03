<script setup lang="ts">

  interface Props {
    content: string;
    language?: string;
  }

  const props = defineProps<Props>();

</script>

<template>
  <section class="w-screen px-2 md:w-fit md:max-w-[60rem] mx-auto overflow-hidden [&>pre>code]:whitespace-pre-wrap [&>pre>code]:rounded-lg">
    <highlightjs :autodetect="props?.language ? false : true" :code="props.content" :language="props.language"/>
  </section>
</template>

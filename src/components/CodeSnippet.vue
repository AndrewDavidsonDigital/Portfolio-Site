<script setup lang="ts">

  interface Props {
    content: string;
  }

  const props = defineProps<Props>();

</script>

<template>
  <section class="w-fit md:max-w-[60rem] mx-auto rounded-lg overflow-hidden [&>pre>code]:whitespace-pre-wrap">
    <highlightjs autodetect :code="props.content" />
  </section>
</template>

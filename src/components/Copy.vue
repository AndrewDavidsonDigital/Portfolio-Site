<script setup lang="ts">

  interface Props {
    paragraph: string;
  }

  const props = defineProps<Props>();

</script>

<template>
  <section class="py-2 w-full max-w-content 3xl:max-w-lg-content mx-auto px-4 md:px-10 text-slate-300 firstParaChar">
    <p>{{ props.paragraph }}</p>
  </section>
</template>

<style scoped>
  .firstParaChar > p::first-letter {
    @apply text-orange-300;
    @apply px-1 mr-1 py-2;
    @apply float-left;
    font-size: 270%;
  }
</style>

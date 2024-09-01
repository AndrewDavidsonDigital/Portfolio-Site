<script setup lang="ts">

  interface Props {
    paragraph?: string;
    paragraphs?: string[];
    disableFirstChar?: boolean;
  }

  const props = defineProps<Props>();

</script>

<template>
  <section 
    :class="[
      'py-2 w-full max-w-content 3xl:max-w-lg-content mx-auto px-4 md:px-10 text-slate-300',
      { 'firstParaChar' : !(props.disableFirstChar) }
    ]"
  >
    <p v-if="props.paragraph">{{ props.paragraph }}</p>
    <template v-if="props.paragraphs && props.paragraphs.length > 0" v-for="para in props.paragraphs" >
      <p class="mb-2">{{ para }}</p>
    </template>
  </section>
</template>

<style scoped>
  .firstParaChar > p:first-of-type::first-letter {
    @apply text-orange-300;
    @apply px-1 mr-1 py-2;
    @apply float-left;
    font-size: 270%;
  }
</style>

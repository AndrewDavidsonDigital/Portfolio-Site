<script setup lang="ts">
  import VisualHighlight from '@components/VisualHighlight.vue';

</script>

<template>
  <VisualHighlight
    title="Marketing Websites - Vocus"
    subTitle="Past Work"
    copy="Development and rollout of Atomic Design, from CMS authoring down to React rendering and deployment." 
    :media="{
      src: ['/image/marketing_2_0.webp', '/image/marketing_2_1.webp'], 
      type: 'imageCollection',
    }"
    :tags="[
      'React', 
      'NextJS', 
      'Typescript',
      'Craft CMS',
      'CI/CD',
      'GraphQL',
    ]"
    colour="red"
  />
</template>
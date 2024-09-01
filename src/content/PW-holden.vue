<script setup lang="ts">
  import VisualHighlight from '@components/VisualHighlight.vue';

</script>

<template>
  <VisualHighlight
    title="Marketing Websites - Holden"
    subTitle="Past Work"
    copy="Development and support of Back End APIs for supporting both the Front End and ensuring CI/CD flows correctly."
    :media="{
      src: ['/image/marketing_1_0.jpeg', '/image/marketing_1_1.jpeg'], 
      type: 'imageCollection',
    }"
    :tags="[
      'Vue', 
      'Java',
      'Oracle Webcenter Sites',
      'CI/CD',
      'CMS',
      'REST',
      'SOAP',
    ]"
    colour="blue"
    leftAligned
  />
</template>
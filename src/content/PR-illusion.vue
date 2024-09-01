<script setup lang="ts">
  import VisualHighlight from '@components/VisualHighlight.vue';

</script>

<template>
  <VisualHighlight
    title="Visual Novel Game Engine"
    subTitle="Personal Project"
    copy="As an avid gamer it's always interesting to see what I can replicate from various game elements, this is a POC to showcase both how much much is replicable and to what extent." 
    :media="{
      src: '/video/bg-menu.mp4', 
      type: 'video',
    }"
    :tags="[
      'Vue', 
      'Typescript',
      'Scripting',
      'Gaming',
    ]"
    colour="red"
  />
</template>
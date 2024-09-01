<script setup lang="ts">
  import VisualHighlight from '@components/VisualHighlight.vue';

</script>

<template>
  <VisualHighlight
    title="Problem Solving"
    subTitle="Personal Project"
    copy="Over the past decade of work there are a myriad of technical / functional / logical problems that are discovered. This a collection of some of the more interesting / abstract of these problems." 
    :media="{
      src: '/video/bg-menu.mp4', 
      type: 'video',
    }"
    :tags="[
      'Vue',
      'Problem Solving',
      'Logic',
    ]"
    colour="blue"
    leftAligned
  />
</template>
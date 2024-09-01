<script setup lang="ts">
  import {
    VisualHighlight,
    Copy,
  } from '@components/index';

</script>

<template>
  <section>
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
  </section>
</template>
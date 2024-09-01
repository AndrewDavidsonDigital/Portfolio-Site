<script setup lang="ts">
  import {
    VisualHighlight,
    Copy,
    TimeToRead,
  } from '@components/index';

</script>

<template>
  <section class="flex flex-col gap-y-2">
    <VisualHighlight
      isHero
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
    <TimeToRead/>
    <Copy
      paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    />
  </section>
</template>
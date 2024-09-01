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
    <TimeToRead/>
    <Copy
      paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    />
  </section>
</template>
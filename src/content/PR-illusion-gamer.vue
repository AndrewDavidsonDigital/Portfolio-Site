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
      :paragraphs="[
        'Lets just get this out in the open straight away, under NO circumstances would I recommend building a game engine in JavaScript let alone a framework on top of it. This is purely an instance of curiosity to see to what extent replication could be possible within modern(circa 2024) JavaScript.',
        'Now that thats out of the way, where do we even begin here. I\'ll be breaking this section in two to describe different aspect / focuses. For now lets go into some more gamer specific related aspects.',
      ]"
    />
    <Copy paragraph="TBD." />
  </section>
</template>
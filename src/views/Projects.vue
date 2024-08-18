
<script setup lang="ts">
import VisualHighlight from '../components/VisualHighlight.vue';


</script>

<template>
  <section class="bg-black text-white min-h-[100%]">
    <VisualHighlight 
      title="Internal Warehouse & Order Managment System"
      subTitle="Past Work"
      copy=""
      :media="{
        src: '', 
        type: 'image',
      }"
      :tags="[
        'React', 
        'NextJS', 
        'Typescript',
        'CMS',
      ]"
      colour="blue"
      leftAligned
    />
    <VisualHighlight 
      title="Visual Novel Game Engine"
      subTitle="Personal Project"
      copy="foo bar baz" 
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
  </section>
</template>


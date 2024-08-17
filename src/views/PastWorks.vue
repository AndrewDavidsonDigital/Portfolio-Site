
<script setup lang="ts">
import VisualHighlight from '../components/VisualHighlight.vue';


</script>

<template>
  <section class="bg-black text-white min-h-[100%]">
    <VisualHighlight copy="foo bar baz" colour="red" />
    <VisualHighlight copy="thingi-2" colour="blue" leftAligned />
    <VisualHighlight copy="another one" colour="red" />
  </section>
</template>


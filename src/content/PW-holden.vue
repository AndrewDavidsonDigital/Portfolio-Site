<script setup lang="ts">
  import {
    VisualHighlight,
    Copy,
  } from '@components/index';

</script>

<template>
  <section class="flex flex-col gap-y-2 mb-4">
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
      colour="red"
      leftAligned
    />
    <Copy
      paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    />
  </section>
</template>
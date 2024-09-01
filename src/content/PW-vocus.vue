<script setup lang="ts">
  import {
    VisualHighlight,
    Copy,
  } from '@components/index';

</script>

<template>
  <section class="flex flex-col gap-y-2">
    <VisualHighlight
      title="Marketing Websites - Vocus"
      subTitle="Past Work"
      copy="Development and rollout of Atomic Design, from CMS authoring down to React rendering and deployment." 
      :media="{
        src: ['/image/marketing_2_0.webp', '/image/marketing_2_1.webp'], 
        type: 'imageCollection',
      }"
      :tags="[
        'React', 
        'NextJS', 
        'Typescript',
        'Craft CMS',
        'CI/CD',
        'GraphQL',
      ]"
      colour="red"
      leftAligned
    />
    <Copy
      paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    />
  </section>
</template>
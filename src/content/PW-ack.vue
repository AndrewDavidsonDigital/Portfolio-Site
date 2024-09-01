<script setup lang="ts">
  import {
    VisualHighlight,
    Copy,
  } from '@components/index';

</script>

<template>
  <section>
    <VisualHighlight
      title="Internal Warehouse & Order Management System"
      subTitle="Past Work"
      copy="Developing, Supporting and Leading the development team on rolling out order-management flow and document integration bi-directional into Xero."
      :media="{
        src: ['/image/delivery_1.webp', '/image/delivery_2.webp'], 
        type: 'imageCollection',
      }"
      :tags="[
        'Vue', 
        'PHP', 
        'Xero',
        'Typescript',
        'CRM',
      ]"
      colour="blue"
      leftAligned
    />
    <Copy
      paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    />
  </section>
</template>
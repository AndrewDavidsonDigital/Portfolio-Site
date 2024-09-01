<script setup lang="ts">
  import VisualHighlight from '@components/VisualHighlight.vue';

</script>

<template>
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
</template>

<script setup lang="ts">
  import { VisualHighlight } from '@components/index';

</script>

<template>
  <section class="bg-black text-white">
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
      :hashLink="{
        title: 'More details about the complexities of maintaining a singular service that would traditionally be 3 distinct services',
        link: {
          path: '/pastworks',
          hash: '#ack',
        }
      }"
    />
    <VisualHighlight 
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
      :hashLink="{
        title: 'Read about some of the obscure issues that I encountered.',
        link: {
          path: '/projects',
          hash: '#illusionEngineDev',
        }
      }"
    />
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
      colour="blue"
      leftAligned
      :hashLink="{
        title: 'How did I achieve ~70% reduction on CICD build time',
        link: {
          path: '/pastworks',
          hash: '#holden',
        }
      }"
    />
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
      :hashLink="{
        title: 'Read more on our solutions',
        link: {
          path: '/pastworks',
          hash: '#vocus',
        }
      }"
    />
  </section>
</template>



<script setup lang="ts">
  import VisualHighlight from '@components/VisualHighlight.vue';
  import Tabset, { ITab } from '@components/Tabset.vue';
  import PWAck from '@content/PW-ack.vue';
  import PRIllusion from '@content/PR-illusion.vue';
  import { ref } from 'vue';

  const tabs: ITab[] = [
    { 
      title: 'Inventory CRM',
      key: 'ack',
    },
    { 
      title: 'Game Engine',
      key: 'illusionEngine',
    },
  ]

  const activeKey = ref<string>(tabs[0].key);


</script>

<template>
  <section class="bg-black text-white min-h-[100%] !justify-start">
    <Tabset 
      :tabs="tabs"
      @setActive="(key: string) => activeKey = key"
    >
      <div class="grid-area-stack">
        <TransitionGroup>
          <PWAck v-if="activeKey === tabs[0].key"/>
          <PRIllusion v-if="activeKey === tabs[1].key"/>
        </TransitionGroup>
      </div>
    </Tabset>
  </section>
</template>

<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 1s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>

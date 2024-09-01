
<script setup lang="ts">
  import Tabset, { ITab } from '@components/Tabset.vue';
  import PWAck from '@content/PW-ack.vue';
  import PWHolden from '@content/PW-holden.vue';
  import PWVocus from '@content/PW-vocus.vue';
  import { ref } from 'vue';

  const tabs: ITab[] = [
    { 
      title: 'Inventory CRM',
      key: 'ack',
    },
    { 
      title: 'Vocus',
      key: 'vocus',
    },
    { 
      title: 'Holden',
      key: 'holden',
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
          <PWVocus v-if="activeKey === tabs[1].key"/>
          <PWHolden v-if="activeKey === tabs[2].key"/>
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

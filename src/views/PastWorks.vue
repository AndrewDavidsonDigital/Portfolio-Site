
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

const mountedTime = Date.now();

</script>

<template>
  <section class="bg-black text-white min-h-[100%] !justify-start">
    <Tabset 
      :tabs="tabs"
      @set-active="(key: string) => activeKey = key"
    >
      <div class="grid-area-stack w-full">
        <TransitionGroup>
          <PWAck
            v-show="activeKey === tabs[0].key"
            :key="`tab_${tabs[0].key}_${mountedTime}`"
            :class="{ 'opacity-0' : activeKey !== tabs[0].key}"
          />
          <PWVocus
            v-show="activeKey === tabs[1].key"
            :key="`tab_${tabs[1].key}_${mountedTime}`"
            :class="{ 'opacity-0' : activeKey !== tabs[1].key}"
          />
          <PWHolden
            v-show="activeKey === tabs[2].key"
            :key="`tab_${tabs[2].key}_${mountedTime}`"
            :class="{ 'opacity-0' : activeKey !== tabs[2].key}"
          />
        </TransitionGroup>
      </div>
    </Tabset>
  </section>
</template>

<style scoped>
/* Currently intermittent child opacity issues on safari */

  .v-enter-active,
  .v-leave-active {
    transition: all 2s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>

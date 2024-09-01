
<script setup lang="ts">
  import Tabset, { ITab } from '@components/Tabset.vue';
  import PRConsidreations from '@content/PR-considreations.vue';
  import PRIllusionDev from '@content/PR-illusion-dev.vue';
  import PRIllusionGamer from '@content/PR-illusion-gamer.vue';
  import { ref } from 'vue';

  const tabs: ITab[] = [
    { 
      title: 'Game Engine (Outline)',
      key: 'illusionEngineDev',
    },
    { 
      title: 'Game Engine (Gamerwords)',
      key: 'illusionEngineGamer',
    },
    { 
      title: 'Problem Solving',
      key: 'considerations',
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
          <PRIllusionDev v-if="activeKey === tabs[0].key"/>
          <PRIllusionGamer v-if="activeKey === tabs[1].key"/>
          <PRConsidreations v-if="activeKey === tabs[2].key"/>
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

<script setup lang="ts">
  interface Props {
    media: { 
      src: string[], 
      type: 'imageCollection',
    } 
  }

  const props = defineProps<Props>();

  const DELAY_DURATION = '2000ms';

</script>

<template>
  <div class="grid-area-stack animation-chain-staggered">
    <template v-for="(src, index) in props.media.src">
      <img
        class="object-contain animate-fadeInOut self-center w-full opacity-0 mask"
        :src="src"
        :data-index="index"
      />
    </template>
  </div>
</template>

<style scoped>
  .animation-chain-staggered {

    img {
      animation-delay: var(--animation-delay);
    }
    :nth-child(1){
      --animation-delay: calc(0 * v-bind(DELAY_DURATION));
    }
    :nth-child(2){
      --animation-delay: calc(1 * v-bind(DELAY_DURATION));
    }
    :nth-child(3){
      --animation-delay: calc(2 * v-bind(DELAY_DURATION));
    }
    :nth-child(4){
      --animation-delay: calc(3 * v-bind(DELAY_DURATION));
    }
  }


  .mask {
    --mask-y: linear-gradient(to bottom, 
      rgba(0,0,0, 0) 0,   rgba(0,0,0, 1) 4%, 
      rgba(0,0,0, 0) 96%, rgba(0,0,0, 0) 0
    ) 100% 50% / 100% 100% repeat-x;
    
    -webkit-mask: var(--mask-y); 
    mask: var(--mask-y);
  }
</style>
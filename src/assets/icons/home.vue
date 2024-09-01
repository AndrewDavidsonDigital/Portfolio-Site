<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue';

  interface ICustomFontCSSStyleValue {
    value: number;
    unit: string;
  }

  const el = ref<SVGElement>();
  const bouncing = ref<boolean>(false);

  function reScale(){
    if (bouncing.value === true) {
      console.log('bounced')
      return;
    };

    setTimeout(
      () => {
        console.log('rescale\t', Date.now());
        if (el.value){
          const fontSize = (el.value.computedStyleMap().get('font-size')) as undefined | ICustomFontCSSStyleValue; // value seems to be always in px'
          if (fontSize){
            const scaleSize = (fontSize.value / 16).toPrecision(4);
            el.value.style.setProperty('--scale-value', scaleSize)
          }
        }
        if (bouncing.value === true){
          bouncing.value = false;
          reScale();
        }
      },
      800,
    );
    // need to wait here since 
  };

  function scaler(){
    reScale();
    setTimeout(() => bouncing.value = true, 50);
  }

  onMounted(() => {
    reScale();
    window.addEventListener('resize', scaler);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', scaler);
  });



</script>

<template>
  <svg 
    ref="el"
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round"
    class="scale-dynamic"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
</template>
<style scoped>
  .scale-dynamic {
    scale: var(--scale-value);
  }
</style>

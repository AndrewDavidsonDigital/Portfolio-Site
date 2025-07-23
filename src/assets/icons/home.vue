<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue';
  import { isFirefox } from '@lib/browsers';

  interface ICustomFontCSSStyleValue {
    value: number;
    unit: string;
  }

  const el = ref<SVGElement>();
  const bouncing = ref<boolean>(false);

  function reScale(){
    if (bouncing.value === true) {
      // console.log('bounced');
      return;
    }

    setTimeout(
      () => {
        // console.log('rescale\t', Date.now());
        if (el.value){
          let fontSize:undefined | ICustomFontCSSStyleValue = undefined;
          if (isFirefox){
            const fontELement = `${window.getComputedStyle(el.value).fontSize}`;
            fontSize  = {
              value: Number(fontELement.slice(0, fontELement.length - 2)), // assume we are always in px here hence drop last 2 chars
              unit: 'px',
            }
          }else{
            fontSize = (el.value.computedStyleMap().get('font-size')) as undefined | ICustomFontCSSStyleValue; // value seems to be always in px'
          }
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
  }

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
    <line x1="5" y1="16" x2="10" y2="16" />
    <line x1="13" y1="17" x2="19" y2="5" />
  </svg>
</template>
<style scoped>
  .scale-dynamic {
    scale: var(--scale-value);
  }
</style>


<script setup lang="ts">
  import router from '../router';
  import { ref } from 'vue'

  // flow: off -> in -> static -> out -> off
  type LayerState = "in" | "out" | "static" | "off"
  interface ILayer {
    state: LayerState,
  }
  
  let layers = ref<ILayer[]>([{ state: "in" }, { state: "off"}])
  let activeLayer = ref(0)
  const interval = 6000;
  // duration            1000   |  3000  | 1000 
  // timings             1000   |  4000  | 5000
  // flow:    off -> in   -> static ->  out  -> off

  // iterate and create timers per layer
  layers.value.forEach((val, i) => {
    if (i !== 0){
      setTimeout(() => {
        val.state = "in";
        activeLayer.value = i;
      }, (interval * i));
    }
    setTimeout(() => {
      val.state = "static";
    }, ((interval * i) + 1000));
    setTimeout(() => {
      val.state = "out";
    }, ((interval * i) + 4000));
    setTimeout(() => {
      val.state = "off";
    }, ((interval * i) + 5000));
  });

  // scene transition timer
  setTimeout(() => {
    router.push({name: 'landing'});
  }, 11000);
  // magic number the timings here as it should be a function
  // of of animations * durations but isn't mathing-out atm

</script>

<template>
  <section class="bg-black text-white absolute w-full h-screen px-4">
    <article 
      v-if="activeLayer === 0"
      :class="[
        'flex flex-col justify-around items-center',
        'h-full opacity-0',
        { 'animate-fadeIn' : layers[0].state === 'in' },
        { 'opacity-100' : layers[0].state === 'static' },
        { 'animate-fadeOut': layers[0].state === 'out' },
        { 'opacity-0' : layers[0].state === 'off' },
      ]"
    >
      <div class="max-w-[1000px] text-center *:text-lg *:text-gray-500">
        <p>This site is brought to you by Indices out of Bounds & Segmentation Faults</p>
      </div>
    </article>
    <article 
      v-if="activeLayer === 1"
      :class="[
        'flex flex-col justify-around items-center',
        'h-full opacity-0',
        { 'animate-fadeIn' : layers[1].state === 'in' },
        { 'opacity-100' : layers[1].state === 'static' },
        { 'animate-fadeOut': layers[1].state === 'out' },
        { 'opacity-0' : layers[1].state === 'off' },
      ]"
    >
      <div class="max-w-[1000px] text-center  *:text-lg *:text-gray-500">
        <p class="pb-2">
          WARNING: PHOTOSENSITIVITY/EPILEPSY SEIZURES
        </p>
        <p>A very small percentage of people may experience epileptic seizures or blackouts when exposed to certain kinds of flashing lights or light patterns. These persons, or even people who have no history of seizures or epilepsy, may experience epileptic symptoms or seizures while viewing certain websites. If you or any of your relatives has an epileptic condition or has had seizures of any kind, consult your physician before viewing this site.</p>
      </div>
    </article>
  </section>
</template>


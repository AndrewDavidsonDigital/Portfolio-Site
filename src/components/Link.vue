<script setup lang="ts">
  import {  RouteLocationRaw } from 'vue-router';
  import { Colours } from './VisualHighlight.vue';

  interface Props {
    link: RouteLocationRaw;
    title: string;
    colour: Colours;
  }

  const props = defineProps<Props>();

  const linkId = `link_id_${Date.now()}`

  function innerClick(){
    document.getElementById(linkId)?.click();
  }

  function resolveColour(c:Colours){
    let retval = "oklch(82.8% 0.189 84.429)";
    switch (c) {
      case 'blue':
        retval = "white";
        break;
      case 'red':
        retval = "orange";
        break;
      case 'teal':
        break;
    
      default:
        break;
    }
    return retval
  }

</script>

<template>
  <button 
    class="
      mt-2
      px-2 py-1 w-fit
      rounded-xl
      group-hover:bg-slate-800 
      max-w-[30rem]
      cursor-pointer
      duration-0
      text-left

      snake-border
      group-hover:before:block group-hover:after:block
      after:hidden before:hidden

      !text-slate-700 group-hover:!text-slate-300
    "
    :style="[
      `--color-snake-head:${resolveColour(props.colour)}`,
    ]"
    @click="() => innerClick()"
    @keydown="() => innerClick()"
    @keyup="() => innerClick()"
  >
    <RouterLink
      :id="linkId"
      :to="props.link"
      class="italic transition-colors duration-300 text-trim"
    >
      {{ props.title }}
    </RouterLink> 
  </button>
</template>

<style lang="css" scoped>

  *{
    --color-snake-head: oklch(82.8% 0.189 84.429);
    --color-snake-body-1: oklch(69.6% 0.17 162.48);
    --color-transparent: oklch(0% 0 0 / 0);
  }

  @property --gradient-angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }

  @keyframes rotation {
    0%   { --gradient-angle: 0deg; }
    100% { --gradient-angle: 360deg; }
  }

  .snake-border{
    @apply border-2 border-transparent;
    @apply relative;
  }

  /* add track */
  .snake-border::before{
    @apply bg-slate-700/20;
  }
  /* add gradient colour, as we are using conic we will need to backfill with transparency */
  .snake-border::after {
    background: conic-gradient(
      from var(--gradient-angle),

      var(--color-transparent),
      var(--color-transparent),
      var(--color-transparent),
      var(--color-transparent),
      var(--color-transparent),
      var(--color-transparent),
      var(--color-transparent),
      var(--color-transparent),
      var(--color-transparent),
      var(--color-transparent),
      var(--color-transparent),
      var(--color-transparent),
      var(--color-transparent),
      var(--color-transparent),
      var(--color-transparent),
      var(--color-transparent),
      var(--color-transparent),
      var(--color-transparent),
      var(--color-transparent),

      var(--color-snake-body-1),
      var(--color-snake-head)
    );
    animation: rotation 10s linear infinite;
  }
  /* create our placement for both the track and runner */
  .snake-border::before,
  .snake-border::after {
    position: absolute;
    inset: calc(var(--spacing) * -1);
    content:"";
    border-radius: inherit;
    z-index: -1;
  }
</style>
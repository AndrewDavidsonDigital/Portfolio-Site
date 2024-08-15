<script setup lang="ts">

  type Colours = 'red' | 'blue';
  interface Props {
    copy: string,
    colour: Colours,
    leftAligned?: boolean,
  }

  const props = withDefaults(defineProps<Props>(), {
    leftAligned: false,
  });

</script>

<template>
  <section class="grid-area-stack w-full min-h-[80vh]">
    <div :class="[
      {'bg-red-400' : props.colour === 'red'},
      {'bg-blue-400' : props.colour === 'blue'},
      ]"></div>
    <div :class="[ 
      'px-20 py-5',
      'self-center',
      {'place-self-end' : !(props.leftAligned) },
    ]">{{props.copy}}</div>
  </section>
</template>

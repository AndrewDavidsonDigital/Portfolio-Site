<script setup lang="ts">
 import Tag from '@components/Tag.vue';

  type Colours = 'red' | 'blue';
  type Media = 'video' | 'image';
  interface Props {
    title: string,
    subTitle?: string,
    copy: string,
    media: {
      src: string,
      type: Media,
    },
    tags: string[],
    colour: Colours,
    leftAligned?: boolean,
  }

  const props = withDefaults(defineProps<Props>(), {
    leftAligned: false,
  });

</script>

<template>
  <section class="grid-area-stack w-full min-h-[80vh]">
    <video 
      v-if="props.media.type === 'video'"
      class="w-full object-center"
      autoplay
      muted
      loop
      :src="props.media.src"
    >
    </video>
    <div :class="[
      'bg-gradient-to-r to-65%',
      {'!bg-gradient-to-l' : props.leftAligned },
      {'from-red-400/20 to-red-400' : props.colour === 'red'},
      {'from-blue-400/20 to-blue-400' : props.colour === 'blue'},
      ]"></div>
    <div :class="[ 
      'px-20 py-5',
      'self-center',
      'z-10',
      {'place-self-end' : !(props.leftAligned) },
    ]">
      <h2>{{ props.title }}</h2>
      <h3 v-if="props.subTitle">{{ props.subTitle}}</h3>
      <p>{{props.copy}}</p>
      <section 
        v-if="props.tags.length > 0" 
        class="flex gap-2"
      >
        <template v-for="tag in props.tags">
          <Tag :copy="tag" />
        </template>
      </section>
    </div>
  </section>
</template>

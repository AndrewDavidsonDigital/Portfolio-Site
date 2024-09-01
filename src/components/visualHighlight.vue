<script setup lang="ts">
  import Tag from '@components/Tag.vue';
  import ItemCollection from '@components/ItemCollection.vue';

  type Colours = 'red' | 'blue';
  type Media = { src: string, type: 'video' | 'image' } | { src: string[], type: 'imageCollection' } 

  interface Props {
    title: string,
    subTitle?: string,
    copy: string,
    media: Media,
    tags: string[],
    colour: Colours,
    leftAligned?: boolean,
  }

  const props = withDefaults(defineProps<Props>(), {
    leftAligned: false,
  });

</script>

<template>
  <section class="grid-area-stack w-full max-h-[85vh] md:aspect-16/9 overflow-hidden w-screen">
    <video 
      v-if="props.media.type === 'video'"
      class="w-full object-center animate-fadeIn duration-150"
      autoplay
      muted
      loop
      :src="props.media.src"
    >
    </video>
    <img v-if="props.media.type === 'image'" :src="props.media.src" class="w-full object-center animate-fadeIn duration-150"/>
    <template v-if="props.media.type === 'imageCollection'" class="grid-area-stack ">
      <ItemCollection :media="props.media"/>
    </template>
    <div :class="[
      'bg-gradient-to-r to-65% z-10',
      {'!bg-gradient-to-l' : props.leftAligned },
      {'from-red-400/20 to-red-400' : props.colour === 'red'},
      {'from-blue-400/20 to-blue-400' : props.colour === 'blue'},
      ]"></div>
    <div :class="[ 
      'px-4 md:px-10 lg:px-20 py-5',
      'max-w-[50rem]',
      'self-center',
      'z-10',
      {'place-self-end text-end' : !(props.leftAligned) },
    ]">
      <h2>{{ props.title }}</h2>
      <h3 v-if="props.subTitle">{{ props.subTitle}}</h3>
      <p>{{props.copy}}</p>
      <section 
        v-if="props.tags.length > 0" 
        :class="[
          'flex flex-wrap gap-2 pt-2',
          {'justify-end' : !(props.leftAligned) },
        ]"
      >
        <template v-for="tag in props.tags">
          <Tag :copy="tag" />
        </template>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
  import Tag from '@components/Tag.vue';
  import Link from '@components/Link.vue';
  import ItemCollection from '@components/ItemCollection.vue';
  import { RouteLocationRaw } from 'vue-router';

  export type Colours = 'red' | 'blue' | 'teal';
  type Media = { src: string, type: 'video' | 'image' } | { src: string[], type: 'imageCollection' } 

  interface Props {
    title: string,
    subTitle?: string,
    copy: string,
    media: Media,
    tags: string[],
    colour: Colours,
    leftAligned?: boolean,
    hashLink?: {
      title: string;
      link: RouteLocationRaw;
    },
    isHero?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    leftAligned: false,
    isHero: false,
    subTitle: undefined,
    hashLink: undefined,
  });

  const instantiationDate = Date.now();

</script>

<template>
  <article 
    :class="[
      'grid-area-stack md:aspect-16/9 overflow-hidden w-full group',
      props.isHero ? 'max-h-[65dvh]' : 'max-h-[85dvh]'
    ]"
  >
    <video 
      v-if="props.media.type === 'video'"
      class="w-full object-center animate-fadeIn duration-150"
      autoplay
      muted
      loop
      playsinline
      :src="props.media.src"
      tabindex="-1"
      role="presentation"
      aria-label="Background Media"
      alt="Background Media"
    />
    <img
      v-if="props.media.type === 'image'"
      :src="props.media.src"
      class="w-full object-center animate-fadeIn duration-150"
      tabindex="-1"
      role="presentation"
      aria-label="Background Media"
      alt="Background Media"
    >
    <template v-if="props.media.type === 'imageCollection'">
      <ItemCollection
        :media="props.media"
        class="grid-area-stack"
      />
    </template>
    <div
      :class="[
        'bg-gradient-to-br md:bg-gradient-to-r to-65% from-20% z-10',
        {'!bg-gradient-to-bl md:!bg-gradient-to-l' : props.leftAligned },
        {'from-red-400/50 md:from-red-400/20 !to-red-400' : props.colour === 'red'},
        {'from-blue-400/50 md:from-blue-400/20 !to-blue-400' : props.colour === 'blue'},
        {'!from-0% from-teal-400/20 to-teal-400' : props.colour === 'teal'},
      ]"
    />
    <div
      :class="[ 
        'px-4 md:px-10 lg:px-20 py-5',
        'max-w-[50rem]',
        'my-auto 2xl:mt-[10%]',
        'z-10',
        '[&>*]:text-slate-900 [&>h3]:text-neutral-700',
        {'place-self-end text-end' : !(props.leftAligned) },
      ]"
    >
      <h2>{{ props.title }}</h2>
      <h3 v-if="props.subTitle">
        {{ props.subTitle }}
      </h3>
      <p class="text-balance">{{ props.copy }}</p>
      <section 
        v-if="props.tags.length > 0" 
        :class="[
          'flex flex-wrap gap-2 pt-2',
          {'justify-end' : !(props.leftAligned) },
        ]"
      >
        <template
          v-for="(tag, i) in props.tags"
          :key="`tag_${i}__${instantiationDate}`"
        >
          <Tag :copy="tag" />
        </template>
      </section>
      <Link
        v-if="props.hashLink"
        :link="props.hashLink.link"
        :title="props.hashLink.title"
        :colour="props.colour"
        :class="[
          {'place-self-end text-end' : !(props.leftAligned) },
        ]"
      />
    </div>
  </article>
</template>

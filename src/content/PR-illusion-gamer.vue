<script setup lang="ts">
  import {
    VisualHighlight,
    Copy,
    TimeToRead,
    CodeSnippet,
  } from '@components/index';

  const customPointer = {
    html: '<style>\n\n\t*{\n\t\t@apply !cursor-none;\n\t}\n\n\n\tdiv#cursor svg[data-icon="navigation"]{\n\t\t@apply transition-colors duration-500;\n\t\t&> polygon[data-layer="inner"] {\n\t\t\t@apply transition-colors;\n\t\t}\n\t}\n\tdiv#cursor.default svg[data-icon="navigation"] {\n\t\t@apply stroke-red-500;\n\t\t@apply fill-red-500;\n\t\t&> polygon[data-layer="inner"] {\n\t\t\t@apply stroke-orange-500;\n\t\t\t@apply fill-orange-500;\n\t\t}\n\t}\n\tdiv#cursor.pointer > svg[data-icon="navigation"] {\n\t\t@apply stroke-blue-500;\n\t\t@apply fill-blue-500;\n\t\t& polygon[data-layer="inner"] {\n\t\t\t@apply stroke-green-500;\n\t\t\t@apply fill-green-500;\n\t\t}\n\t}\n\n\tdiv#cursor.pointer > svg[data-icon="navigation"] {\n\t\t@apply origin-bottom-right;\n\t\tanimation: rotate 0.75s linear infinite alternate;\n\t}\n\n\t@keyframes rotate {\n\t\tto {\n\t\t\ttransform: rotate(10deg);\n\t\t}\n\t\tfrom {\n\t\t\ttransform: rotate(-10deg);\n\t\t}\n\t}\n</style>',
    js: "const customCursor = useCustomCursor();\nconst shouldAnimate = ref(false);\n\nonMounted(() => {\n\n\tconst cursorEl = document.getElementById('cursor') as HTMLDivElement;\n\tcustomCursor.init(cursorEl);\n\n\tdocument.addEventListener('mousemove', (e: MouseEvent) => {\n\t\tconst cursorEl = document.getElementById('cursor') as HTMLDivElement;\n\t\tconst curX = e.clientX - cursorEl.offsetWidth / 2;\n\t\tconst curY = e.clientY - cursorEl.offsetHeight / 2;\n\n\t\tcursorEl.style.left = `${curX}px`\n\t\tcursorEl.style.top = `${curY}px`\n\t});\n\n\tdocument.addEventListener('click', (e: MouseEvent) => {\n\t\tshouldAnimate.value = true;\n\t\tsetTimeout(() => {\n\t\t\tshouldAnimate.value = false;\n\t\t}, 500);\n\t});\n\tdocument.addEventListener('inner-click', (e: any) => {\n\t\tshouldAnimate.value = true;\n\t\tsetTimeout(() => {\n\t\t\tshouldAnimate.value = false;\n\t\t}, 500);\n\t});\n});",
    storeJs: `<template>\n\t<div v-if="!(props.inline)"\n\t\t@mouseenter="customCursor.updateTo('pointer')"\n\t\t@mouseleave="customCursor.clear()"\n\t><slot></slot></div>\n\t<span v-else\n\t\t@mouseenter="customCursor.updateTo('pointer')"\n\t\t@mouseleave="customCursor.clear()"\n\t><slot></slot></span>\n</template>`,
  };
  const audioEngine = {
    html: '<template>\n\t<audio id="_audio_bgm" class="pointer-events-none" playsinline autoplay loop></audio>\n\t<audio id="_audio_sfx" class="pointer-events-none" playsinline autoplay></audio>\n\t<audio id="_audio_interaction" class="pointer-events-none" playsinline autoplay></audio>\n\t<audio id="_audio_voice" class="pointer-events-none" playsinline autoplay></audio>\n</template>',
    js: `const bgmEngine = useBgmEngine();\nconst sfxEngine = useSfxEngine();\nconst voiceEngine = useVoiceEngine();\nconst interactionEngine = useInteractionEngine();\n\nconst config = useConfiguration();\n\nonMounted(() => {\n\t// need small delay to ensure config has been loaded & init'd \n\t// by the time we grab audio levels\n\tsetTimeout(() => {\n\t\tconsole.log('config:', config.audio)\n\n\t\tbgmEngine.init('_audio_bgm');\n\t\tbgmEngine.setVolume(config.audio.bgm);\n\t\tbgmEngine.setTrack('/audio/bgm/bgm.m4a');\n\t\t\n\t\tsfxEngine.init('_audio_sfx');\n\t\tsfxEngine.setVolume(config.audio.sfx);\n\t\tinteractionEngine.init('_audio_interaction');\n\t\tinteractionEngine.setVolume(config.audio.sfx);\n\t\tvoiceEngine.init('_audio_voice');\n\t\tvoiceEngine.setVolume(config.audio.voice);\n\t}, 100);\n});`,
    storeJs: '',
  };
  const scriptingEngine = {
    html: `<div class='grid [grid-template-areas:_"stack"] *:[grid-area:_stack] overflow-hidden w-fit'>\n\t<!-- Backdrop (AKA Background Layer) -->\n\t<Backdrop .../>\n\t<!-- Interactions / Effects Layer -->\n\t<Effectslay \n\t\t:effect="effectName" \n\t\t:data-attributes="['animateLeft', 'animateRight']"\n\t\t:visible="visibleEffectsToggle"\n\t\t:extra-data="effectExtraData"\n\t/>\n\t<!-- char layer -->\n\t<Characterlay ... />\n\t<!-- Overlay -->\n\t<Overlay\t\n\t\t:text="textInstance.text"\n\t\t:speaker="textInstance.speaker"\n\t\t:trigger="triggerToggle"\n\t\t:choices="scriptEngine.getChoices"\n\t\t:decisions="decisions"\n\t\t@skip="() => skipScene()"\n\t\t@progress="() => handleProgress()"\n\t\t@toggle-backdrop="(toggleTo) => toggleEffects(toggleTo)"\n\t\t@choose="(data) => handleChoice(data)"\n\t/>\n</div>`,
    js: '',
    storeJs: '',
  };

</script>

<template>
  <section class="flex flex-col gap-y-2">
    <VisualHighlight
      is-hero
      title="Visual Novel Game Engine"
      sub-title="Personal Project"
      copy="As an avid gamer it's always interesting to see what I can replicate from various game elements, this is a POC to showcase both how much much is replicable and to what extent." 
      :media="{
        src: '/video/bg-menu.mp4', 
        type: 'video',
      }"
      :tags="[
        'Vue', 
        'Typescript',
        'Scripting',
        'Gaming',
      ]"
      colour="red"
    />
    <TimeToRead />
    <Copy
      :paragraphs="[
        'Lets just get this out in the open straight away, under NO circumstances would I recommend building a game engine in JavaScript let alone a framework on top of it. This is purely an instance of curiosity to see to what extent replication could be possible within modern(circa 2024) JavaScript.',
        'Now that thats out of the way, where do we even begin here. I\'ll be breaking this section in two to describe different aspect / focuses. For now lets go into some more game specific related aspects.',
      ]"
    />
    <Copy
      :paragraphs="[
        'To kick things off lets talk about one of the least mentioned aspects of games... they all have unique custom mouse cursors. As such this is clearly something we\'d need to achieve but the only customization / animation that is technically supported is via defining an external image to replace the browsers default one. This would not really be extensible as since its external you are limited to what aspects of css your can actually support here. ',
        'Now this leaves us with a problem, its relatively simple to create a html div that follows the mouse and we can then style this however we wan\'t, but this means we would now be restricted to never using the `#top-layer` aspect of more modern html from the Dialog tag or the css `position-anchor:` property as these are always going to be at a higher z-index than anything in the base html document. Luckily we can still use the Dialog modal with `.show()` rather than `.showModal()`.',
        'Additionally we would need to implement custom hooks for understanding if what our cursor is on is clickable.',
      ]"
    />
    <CodeSnippet
      :content="customPointer.js"
      caption="Initiation of the required hooks for moving the custom cursor and for animating any `click` interactions "
    />
    <CodeSnippet
      :content="customPointer.storeJs"
      caption="Wrapper component needed to support understanding that an element (the slot) should be considered hover-able"
    />
    <Copy paragraph="We'd also need to program the specific effects that we desire, in this case custom styling and animations for both hovering on clickable entities and the click action itself." />
    <CodeSnippet
      :content="customPointer.html"
      caption="Custom animations for base state and hover"
    />
    <Copy
      :paragraphs="[
        'One core difference between other media and games is that games allow for choice, and one thing this leads to is an ever-branching path of ways the game can be completed. What this means is that you cant just have 1 static audio track that encompasses all track types. As such we would need a collection of audio engines to be running at the same time. i.e: to support a sound effect going off while the background music is still playing.',
        'This was surprisingly easy we can state manage n top-level html audio elements, each responsible for different tracks and just pass tracks to them to start playing. This allows us to manipulate all aspects independent of each other, such as volume.',
      ]"
    />
    <CodeSnippet
      :content="audioEngine.html"
      caption="The different audio track elements instantiated html state"
    />
    <CodeSnippet
      :content="audioEngine.js"
      language="javascript"
      caption="The instantiation and loading of the users audio game settings"
    />
    <Copy
      :paragraphs="[
        'For a Visual Novel type game, the entire game-state can be considered just that a singular state. As such we can use a singular overarching state-machine for the game state, and act reactively triggering events when the states progress. This allows for a singular source of truth about where the game is at, and a singular entry for enacting the actual changes requested by the game engine.',
        'You can consider a Visual Novel as just that a visual representation of a novel, and the game itself is the user reading a page / chapter at a time with the ability to bypass a page when presented the option. Each page in the game would be represented as a scene with any dialog being visually represented by the actor speaking and likewise any effects / cues being rendered in either audio or visual fashion. i.e: if the primary user is wounded, you might get a red-tinted overlay and screen edge effects. or rather than text explain a volcano erupting you could have the audio play that sound effect with some screen-shake effect.',
        'Any of these effects would be caught a change in the scene updating the store\'s `effect` value to something like `wounded` and thus enabling that effect. Likewise the volcano example would set the stores `effect` to say `screenShake_small` AND the stores `interactionSound` to the asset path for playing the desired sound effect.',
      ]"
    />
    <CodeSnippet
      :content="scriptingEngine.html"
      caption="A truncated version of the ScenePlayer stack, highlighting the different layers"
    />
    <Copy paragraph="There are multitudes more interesting aspects of this codebase, including the issues of the overlay component needing to interact to some of its sibling components only under certain confines, but those are all discussion points for another time." />
    <span class="text-center"><Copy
      paragraph="Full code is visible under the `IllusionEngine` repo"
      disable-first-char
    /></span>
  </section>
</template>
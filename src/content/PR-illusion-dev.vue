<script setup lang="ts">
  import {
    VisualHighlight,
    CodeSnippet,
    Copy,
    TimeToRead,
  } from '@components/index';

  const titlescreenCode = {
    html: '<template>\n\t<nav class="flex flex-col gap-5">\n\t\t<Clickable>\n\t\t\t<RouterLink to="/new-game" class="hover:text-orange-400">New Game</RouterLink>\n\t\t</Clickable>\n\t\t<Clickable>\n\t\t\t<RouterLink to="/continue" class="hover:text-orange-400">Continue</RouterLink>\n\t\t</Clickable>\n\t\t<Clickable>\n\t\t\t<RouterLink to="/load" class="hover:text-orange-400">Load Game</RouterLink>\n\t\t</Clickable>\n\t\t<Clickable>\n\t\t\t<RouterLink to="/options" class="hover:text-orange-400">Options</RouterLink>\n\t\t</Clickable>\n\t\t<Clickable>\n\t\t\t<RouterLink to="/exit" class="hover:text-orange-400">Exit</RouterLink>\n\t\t</Clickable>\n\t</nav>\n</template>',
  };

</script>

<template>
  <section class="flex flex-col gap-y-2">
    <VisualHighlight
      isHero
      title="Visual Novel Game Engine"
      subTitle="Personal Project"
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
      leftAligned
    />
    <TimeToRead/>
    <Copy
      :paragraphs="[
        'Lets just get this out in the open straight away, under NO circumstances would I recommend building a game engine in JavaScript let alone a framework on top of it. This is purely an instance of curiosity to see to what extent replication could be possible within modern(circa 2024) JavaScript.',
        'Now that thats out of the way, where do we even begin here. I\'ll be breaking this section in two to describe different aspect / focuses. For now lets assume your a dev without any gaming specific knowledge / understanding of how they work / play.',
      ]"
    />
    <Copy
      :paragraphs="[
        'Games, like any current form of entertainment media, are just that, entertainment. Some might even argue they are a form of art, but thats neither here or now. The vast majority of games, wether they be from the SNES back in the 80-90\'s or todays multi-billion industry juggernauts, follow a similar flow. Usually the game boots up, displays some information, then lands the user on whats termed as a title screen. ',
        'Those splash information is similar to what movies do where they might have a `Warner Brothers` or `20th Century Fox` and any disclaimer that might need to be added i.e: this is work of fiction and any depictions to real life people is purely coincidence.',
      ]"
    />
    <Copy
      :paragraphs="[
        'The Title screen on the other hand is really where the game it self will start from and is usually where the game `state` is reset to. From a title screen you\'d usually have a multitude of selections / action to take, mainly; options/settings, New Game, Continue from last Save, Load a Specific Save, Exit Game, etc.',
        'From here Options/Settings is relatively easily understood, this is where you would tweak features of the game engine to your personal desire, maybe lower the volume of sound-effects and increase the volume of the in-game music.',
        'Likewise: Exit Game should straight-up just do what it says, clean up any parallel threads and close down the game.',
        'Both Continue and Load Game should set the game-state to be a specific state that was recorded previously (in the case of continue, that\'d normally be the most recent save file). Once the state is loaded the game-loop would then be started and the scripting engine / manager would render the state from the one we have just loaded into memory.',
        'New Game, similar to Load and Continue, would set the game-sate before initiating the game-loop, but would have ensured that the game-state is reset instead of being set.',
      ]"
    />
    <CodeSnippet :content="titlescreenCode.html" />
    <Copy
      :paragraphs="[
        'The actual playing of the game in itself would be down to the specific nature of what type of game is being programmed. For examples sake, and code-referencing, consider a `choose-your-own-adventure` book but in game form, this fundamentally what VNs (Visual Novels) are all about. As such you could consider the script-engine in this case as turning a page or reading a paragraph. In essence it is exactly that, synchronously load the current chapter, and then programmatically present to the user content one paragraph / interaction at a time. i.e: if you are presenting a conversation, each progression would be the sentence(s) provided by one speaker to the next.',
        'I\'ve used the term presented here a bit and this refers to the act of displaying information and then stopping until the user indicates that they are ready to continue, this in itself is something that usually would have an automatic progression toggle along with its own settings for text reveal speed and breathing-time, (time after once a paragraph has been fully revealed until when the game should automatically progress).',
      ]"
    />
    <Copy paragraph="Visual Novels are a bit of an oddity in the gaming industry as they are less of an active game and more just of an experience, similar to audio books, they bridge a gap / niche between reading and gaming." />
    <span class="text-center"><Copy paragraph="Full code is visible under the `IllusionEngine` repo" disableFirstChar/></span>
  </section>
</template>
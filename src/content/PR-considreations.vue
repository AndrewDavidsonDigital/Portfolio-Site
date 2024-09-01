<script setup lang="ts">
  import {
    VisualHighlight,
    Copy,
    CodeSnippet,
    TimeToRead,
  } from '@components/index';

  const truncationCode = {
    js: "function calculateMu(fontSize, lineWidth, charCount){\n\tconsole.debug(`Calculating Mu: \n\t\tFontSize: ${fontSize}px\n\t\tLineWidth: ${lineWidth}\n\t\tCharCount: ${charCount}`);\n\t return (fontSize / (lineWidth / charCount));\n };\n\nfunction calculateCPL(fontSize, charConstant, tagWidth){\n\tconsole.debug(`Calculating CPL: \n\t\tFontSize: ${fontSize}px\n\t\tMu: ${charConstant}\n\t\tElementWidth: ${tagWidth}`);\n\treturn (tagWidth / (fontSize / charConstant));\n};\n",
    html: `<article>\n\t<h2>N Seperate Paragraph tags, only 2nd para has hover of all other <Highlight content="Complete"/></h2>\n\t<div class="border-orange-500 border-dashed border rounded line-clamp-3">\n\t\t<template v-for="line, index in baseHTML.split(NEW_LINE_DELIMITER)">\n\t\t\t<p \n\t\t\t\tclass="max-w-[20rem]"\n\t\t\t\tv-html="line"\n\t\t\t\t:title="index >= firstTruncated ? generateTitle(index) : ''"\n\t\t\t></p>\n\t\t</template>\n\t</div>\n</article>`,
  }

</script>

<template>
  <section class="flex flex-col gap-y-2 pb-2">
    <VisualHighlight
      isHero
      title="Problem Solving"
      subTitle="Personal Project"
      copy="Over the past decade of work there are a myriad of technical / functional / logical problems that are discovered. This a collection of some of the more interesting / abstract of these problems." 
      :media="{
        src: '/video/bg-menu.mp4', 
        type: 'video',
      }"
      :tags="[
        'Vue',
        'Problem Solving',
        'Logic',
      ]"
      colour="blue"
      leftAligned
    />
    <TimeToRead/>
    <Copy paragraph="As a developer your always learning new things, and throughout this process there are times when either yourself or a colleague are just stumped about how to implement a certain feature or functionality, wether thats by its novel nature, its complexity or just an code that should just work but doesn't due to design decisions."/>
    <Copy :paragraphs="[
      'I have found that for most of these `considerations` usually have at least one novel information nugget within them and there is nothing worse than remembering that you solved this problem last year but cant remember the specifics. ',
      'Considerations is essentially my scratch-note for preserving these novel / overly complicated / obscure solutions.',
    ]"/>
    <Copy :paragraphs="[
      'For example, how can a user download a image of a current subset of the active webpage from within itself. How many times have you needed to consider something this obscure?',
      'Solution wise this was more on the convoluted than complex route, as in principle it was just rendering the current instance into a canvas and then saving / copying to clipboard said canvas. The core of which has a handy module existing for it curtesy of `html2canvas`.',
    ]"/>
    <Copy :paragraphs="[
      'Another more niche problem was one where you have a table cell with multiple paragraphs within it, but can only show the first X lines. Simple right? just line-clamp to X lines. The complexity here is more around how can we add a hover effect / title popover to display the content that was truncated off. Once again simple right? just set the parent wrapper for the `<p>` tag collection to be the join of all `<p>` tag contents with `\n\r` separators as the glue. Ok maybe getting a little more convoluted but still relatively simple. The kicker here is that this hover need to NOT have any paragraph copy that was wholly displayed within the cell. I called BS on the design requirement at this stage, but still wanted to know if it even was achievable. Turns out it is, but is damn computationally costly.',
      'Firstly you need to consider the font-face char-constant which is the given average, of the number of chars over all chars relative to their commonality / occurrence in the langue, which would be rendered in one font-size element. This would then be used to divide the cell width to get the average number of chars to fill out one line completely. From this its just a matter of scaling to number of lines we are clamping at, less some amount of chars to consider for word-wrapping since you almost never will have a full line.',
      'After all this we can now find the index from which `<p>` tags contents starts being truncated. Finally its now just doing our same naive approach of paragraph concatenation but starting from the index we just identified.',
    ]"/>
    <CodeSnippet :content="truncationCode.html" />
    <CodeSnippet :content="truncationCode.js" />
    <span class="text-center"><Copy paragraph="Full code is visible under the `considerations` repo at `/views/OddTruncations.vue`" disableFirstChar/></span>
  </section>
</template>
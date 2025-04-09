<script setup lang="ts">
  import {
    VisualHighlight,
    Copy,
    TimeToRead,
  } from '@components/index';

</script>

<template>
  <section class="flex flex-col gap-y-2 mb-4">
    <VisualHighlight
      is-hero
      title="Marketing Websites - Vocus"
      sub-title="Past Work"
      copy="Development and rollout of Atomic Design, from CMS authoring down to React rendering and deployment." 
      :media="{
        src: ['/image/marketing_2_0.webp', '/image/marketing_2_1.webp'], 
        type: 'imageCollection',
      }"
      :tags="[
        'React', 
        'NextJS', 
        'Typescript',
        'Craft CMS',
        'CI/CD',
        'GraphQL',
      ]"
      colour="blue"
      left-aligned
    />
    <TimeToRead />
    <Copy
      :paragraphs="[
        'Marketing websites are pretty much a fundamental of the current landscape. Building and supporting these within the various confines of the client your working for is one of the more complicated aspects these days. ',
        'For Vocus this meant re-working an existing code base to support various underdeveloped features; standardized content authoring within their CMS, creating system/process for multi-site support from within this singular CMS instance.',
      ]"
    />
    <Copy
      :paragraphs="[
        'For some CMS\'s, in this case Craft CMS, out-of-the-box there is no real support for shared / deep component structuring; i.e: I need to have a standard Card component and have this Card exist in multiple parent types (i.e: 3-up card banner, Recent News). As this was an inherited codebase and there was no inherent atomic-structure within the CMS, we needed to migrate the exist the existing designed components to use new atomic design structures at the code layer prior to rolling out the new authoring experience within the CMS.',
        'These changes allowed for initially an update to the underlying code to be future compatible with most if not all future atomic components while rolling out a new design style which would be predominantly featured in their sibling sites.',
      ]"
    />
    <Copy
      :paragraphs="[
        'Now that there was a code based atomic structure we could roll-out the updated authoring experience starting with their sibling sites. These others sites would only need a small subset of all the current non-atomic components but would need to be compiled to a separate CSS base for their own branding styles and themes all from the singular CMS. These stylings would need to be injected at compile time and still be represented generically from within the authoring experience. As such a solution of using a tailwind import at compile time to dynamically generate colour classes for the colour vars defined within within a scoped JSON object where the scope was resolved via the specific build in the CI.',
        'This allowed for an infinity(within reason) scalable site-specific less tailwind implementation with classes such as `text-primary` or `bg-secondary-inverted` and all that would be needed from a design perspective is the colour definitions to be added to that singular JSON for any new sibling site.',
      ]"
    />
    <Copy paragraph="Branding was not the only complexity here, as the CI would need to be pivoted and electively run as a fork per sibling site, with corresponding test and destinations for deployment. Fortunately this is easily done by having custom parallel test, build and then release pipelines to support deploying changes either to a subset of individual sites, or all sites (in the case of new features / logic)." />
  </section>
</template>
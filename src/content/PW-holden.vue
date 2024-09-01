<script setup lang="ts">
  import {
    VisualHighlight,
    Copy,
  } from '@components/index';

</script>

<template>
  <section class="flex flex-col gap-y-2 mb-4">
    <VisualHighlight
      isHero
      title="Marketing Websites - Holden"
      subTitle="Past Work"
      copy="Development and support of Back End APIs for supporting both the Front End and ensuring CI/CD flows correctly."
      :media="{
        src: ['/image/marketing_1_0.jpeg', '/image/marketing_1_1.jpeg'], 
        type: 'imageCollection',
      }"
      :tags="[
        'Vue', 
        'Java',
        'Oracle Webcenter Sites',
        'CI/CD',
        'CMS',
        'REST',
        'SOAP',
      ]"
      colour="red"
      leftAligned
    />
    <Copy paragraph="Now I know what your thinking, What the actual F, how can a CI/CD process be so cooked that a ~70% improvement is even possible. Well its actually really simple, step 1 enterprise restrictions, step 2 implementation creep/bloat and tech-debt. Over my tenure working on the Holden website I eventual ended up supporting the devops team with the specific requirements of our website solution." />
    <Copy paragraph="To set the stage, the front end CI was previously on a self-hosted Jenkins instance, and through the wisdom of centralizing resources was migrated to run using a teamcity instance, shared throughout the company. The only issue here is that this was a bring-your-own image and was to be shared with teams that have a wildly different tech stack, and this being the relatively earlier days of npm, `n` or `nvm` weren't widely available solutions at the time." />
    <Copy 
      :paragraphs="[
        'As such, since we were not the pioneers for this build image, our builds would first need to load up the image, run a script to uninstall npm, run another script to install the specific version we required, then run our multiple build processes (more on this issue later), we\'d then need to through our compiled resources over to the managed hosting service, and finally clean up by removing our npm version and resetting to the image base node version, as Teamcity would keep the image alive for a few minutes before closing it.',
        'As you can imagine this wasn\'t the speediest as of the 8 steps we are doing, 4 of these are maintenance / housekeeping tasks eating into the so-called build-time.',
        'Additionally, at this time the code-base had just migrated the majority of the code from one framework to another, and as such we had to support both the old legacy styling / build and the new implementation. As such we had 2 distinct separate build flows that needed to be executed, both a `gulp` and a `grunt`, one of which also had sass compiled via ruby.',
      ]"
    />
    <Copy 
      :paragraphs="[
        'By now I\'m sure your able to see where a lot of this unneeded time was being spent. As luck would have it, at this time we were in another of those `centralizing resources` migrating a bunch Atlassian services over to Azure, primarily bitbucket over to Microsoft\'s Azure-Repo\'s not be confused with Microsoft\'s Github. This allowed for me to have my go at hand rolling a new CICD pipeline for the Front End.',
        'Just Azure Devops being bundled here allowed for the 1st issue to be resolved of mismatched node versions as we could spool the instance up with whatever major version was needed (and we needed 2).',
        'Secondly the grunt and gulp runners (which each needed different node versions) could be run in parallel from a parent wrapper job. This alleviated the second issue of running various steps in series as neither of these flows were dependent on each other.',
        'Lastly given how Azure Devops worked, its agent existed on the destination location and was listening for triggers from the CI, so rather than the CI pushing the data down to the server, the agent itself was able to pull down the data it requested. Obviously this only works depending on the lee-way of your hosting platform as this is effectively pushing anything from the CI into the server. But this path, likely due to less hops/handling of the data, also lent to reducing the CICD pipeline run duration.',
      ]"
    />
  </section>
</template>
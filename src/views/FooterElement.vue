<script setup lang="ts">
import router from '@router/index';
</script>

<template>
  <footer
    class="
      bg-slate-600 text-white flex flex-col items-center gap-x-2 justify-center pb-4 pt-2 px-2
      delay-[1s] transition-opacity opacity-0 duration-[1s]
    "
    :class="[
      {'opacity-100' : router.currentRoute.value.path !== '/'},
      {'!opacity-0 delay-[0s] duration-[100ms]' : router.currentRoute.value.path === '/'}
    ]"
  >
    <div>© {{ (new Date()).getFullYear() }}</div>
    <div>
      Contact: 
      <a 
        href="mailto:andrew.davidson.digital@gmail.com" 
        class="transition-all duration-300 hover:text-orange-300 underline underline-offset-4 decoration-transparent hover:decoration-orange-300"
      >andrew.davidson.digital@gmail.com</a>
    </div>
    <div>
      GitHub:
      <a 
        href="https://github.com/AndrewDavidsonDigital" 
        class="transition-all duration-300 hover:text-orange-300 underline underline-offset-4 decoration-transparent hover:decoration-orange-300"
        target="_blank"
      >github.com/AndrewDavidsonDigital</a>
    </div>
  </footer>
</template>


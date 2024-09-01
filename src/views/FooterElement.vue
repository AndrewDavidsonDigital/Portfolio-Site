<template>
  <footer class="bg-slate-700 text-white flex flex-col items-center gap-x-2 justify-center pb-4 pt-2 px-2">
    <div>© {{ (new Date()).getFullYear()  }}</div>
    <div>Contact: 
      <a 
        href="mailto:andrew.davidson.digital@gmail.com" 
        class="transition-colors duration-300 hover:text-orange-300 hover:underline underline-offset-4"
      >andrew.davidson.digital@gmail.com</a>
    </div>
    <div>GitHub:
      <a 
        href="https://github.com/AndrewDavidsonDigital" 
        class="transition-colors duration-300 hover:text-orange-300 hover:underline underline-offset-4"
        target="_blank"
      >github.com/AndrewDavidsonDigital</a>
    </div>
  </footer>
</template>


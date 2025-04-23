import './style.css'

import { createApp } from 'vue';
import App from './App.vue'
import router from './router'

import 'highlight.js/styles/stackoverflow-dark.css'
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";

import { animate } from './three/galaxy-backdrop'

animate();

const app = createApp(App)

app.use(router)
app.use(hljsVuePlugin)

app.mount('#app');

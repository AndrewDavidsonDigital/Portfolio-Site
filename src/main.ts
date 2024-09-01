import { createApp } from 'vue';

import './style.css'

import App from './App.vue'
import router from './router'

import 'highlight.js/styles/stackoverflow-dark.css'
import 'highlight.js/lib/common';

import hljsVuePlugin from "@highlightjs/vue-plugin";

const app = createApp(App)

app.use(router)
app.use(hljsVuePlugin)

app.mount('#app');

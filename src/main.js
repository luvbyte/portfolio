import { createApp } from 'vue'
import App from './App.vue'
import AosVue from "aos-vue";

import router from './router'

import './style.css'

const app = createApp(App)
app.use(router).use(AosVue)
app.mount('#app')

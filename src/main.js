import { createApp } from "vue";
import App from "./App.vue";
import AosVue from "aos-vue";

import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";

import router from "./router";

import "./style.css";

const app = createApp(App);


app.use(router).use(AosVue);

app.use(Particles, {
  init: async engine => {
    await loadSlim(engine);
  }
});

app.mount("#app");

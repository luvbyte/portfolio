import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";

const routes = [
  { path: "/", component: Home, name: "home" },
  {
    path: "/projects",
    component: () => import("./views/Projects.vue"),
    name: "projects"
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

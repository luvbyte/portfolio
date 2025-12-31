<script setup>
  import Hero from "@/components/Hero.vue";
  import Projects from "@/components/Projects.vue";
  import Skills from "@/components/Skills.vue";
  import About from "@/components/About.vue";
  import Contact from "@/components/Contact.vue";
  import TechStack from "@/components/TechStack.vue";
  import Footer from "@/components/Footer.vue";

  import { projectsList } from "@/projects";
</script>

<template>
  <main class="p-4 flex flex-col overflow-x-hidden">
    <Hero />
    <Projects :projects="projectsList.slice(0, 5)" :showMore="true" />
    <Skills />
    <TechStack />
    <About />
    <Contact />
  </main>
</template>

```vue
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import Hero from '@/components/Hero.vue'
import Projects from '@/components/Projects.vue'
import Skills from '@/components/Skills.vue'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import TechStack from '@/components/TechStack.vue'

import { projectsList } from '@/projects'

const isDesktop = ref(false)

const updateScreen = () => {
  isDesktop.value = window.innerWidth >= 768
}

onMounted(() => {
  updateScreen()
  window.addEventListener('resize', updateScreen)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreen)
})
</script>

<template>
  <main class="p-4 flex flex-col overflow-x-hidden">
    <Hero />
    <Projects :projects="projectsList.slice(0, isDesktop ? 9 : 8)" :showMore="true" />
    <Skills />
    <TechStack />
    <About />
    <Contact />
  </main>
</template>
```

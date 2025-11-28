<template>
  <div class="p-8">
    <Projects :projects="projectsList" />
  </div>
</template>
<script setup>
import Projects from '@/components/Projects.vue'
import { projectsList } from '@/projects'
</script>

<script setup>
const skills = [
  { name: 'Python', icon: '🐍' },
  { name: 'Vue.js', icon: '💚' },
  { name: 'JavaScript', icon: '🔥' },
  { name: 'TailwindCSS', icon: '🎨' },
  { name: 'FastAPI', icon: '⚡' },
  { name: 'Git', icon: '🔧' },
  { name: 'SQL', icon: '🗄️' },
  { name: 'Automation', icon: '🤖' },
]
</script>

<template>
  <section id="skills" class="py-6 font-heading mt-10">
    <!-- TITLE -->
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold tracking-wide">🛠 Skills</h2>
      <p class="text-gray-500 mt-2 font-mono">Technologies I work with</p>
    </div>

    <!-- SKILLS -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div
        v-for="s in skills"
        :key="s.name"
        class="flex flex-col items-center justify-center gap-2 border rounded-lg p-4 bg-base-200 cursor-pointer hover:shadow-lg hover:scale-[1.03] transition-transform duration-300"
      >
        <div class="text-3xl">{{ s.icon }}</div>
        <span class="font-medium">{{ s.name }}</span>
      </div>
    </div>
  </section>
</template>

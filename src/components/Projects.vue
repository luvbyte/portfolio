<script setup>
import Image from '@/components/Image.vue'
import Box from '@/components/Box.vue'

const props = defineProps({
  projects: Array,
  showMore: Boolean,
})
</script>

<template>
  <section id="projects" class="py-10 mt-10">
    <div class="text-center mb-10">
      <h2 class="text-3xl font-bold tracking-wide font-heading">
        🚀 {{ showMore ? 'Projects' : 'All Projects' }}
      </h2>
      <p class="text-gray-500 max-w-md mx-auto font-mono">
        A selection of projects I've worked on.
      </p>
    </div>

    <!-- GRID -->
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
      <Box
        v-for="p in projects"
        :key="p.title"
        class="hover:scale-[1.02] transition-transform duration-300 shadow-lg hover:shadow-xl rounded-xl p-4 bg-base-200 flex flex-col h-full"
      >
        <div class="relative w-full aspect-video overflow-hidden rounded-lg">
          <Image :src="p.img" :alt="p.title" imgClass="hover:scale-110" />
        </div>

        <!-- TITLE -->
        <div class="mt-4 flex-grow">
          <h3 class="text-xl font-semibold font-heading">{{ p.title }}</h3>
          <p class="text-sm text-gray-500 mt-2">{{ p.desc }}</p>
        </div>

        <!-- BOTTOM -->
        <div class="mt-6">
          <!-- TECH -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="t in p.tech"
              :key="t"
              class="badge badge-primary badge-sm font-heading italic"
            >
              {{ t }}
            </span>
          </div>

          <!-- BOTTOM BUTTONS -->
          <div class="flex gap-2 justify-end font-heading">
            <a v-if="p.repo" :href="p.repo" target="_blank" class="btn btn-sm btn-outline">
              GitHub
            </a>
            <a v-if="p.link" :href="p.link" target="_blank" class="btn btn-sm btn-secondary">
              Demo →
            </a>
          </div>
        </div>
      </Box>
    </div>

    <!-- MORE BUTTON -->
    <div v-if="showMore" class="mt-10 flex justify-center">
      <a href="/#/projects" class="btn btn-primary btn-wide font-heading text-lg">
        More Projects →
      </a>
    </div>
  </section>
</template>

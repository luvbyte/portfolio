<script setup>
import { ref } from 'vue'

const props = defineProps({
  src: { type: String, default: null },
  alt: { type: String, default: '' },
  imgClass: { type: String, default: '' }, // FIXED
  showFallback: { type: Boolean, default: true },
})

const loaded = ref(false)
</script>

<template>
  <div class="relative w-full h-full overflow-hidden rounded-lg">
    <!-- SPINNER -->
    <div v-if="!loaded && src" class="absolute inset-0 flex items-center justify-center">
      <svg
        class="animate-spin h-10 w-10 text-primary"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
      </svg>
    </div>
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      :class="[
        'object-cover w-full h-full transition-all duration-500',
        loaded ? 'opacity-100' : 'opacity-0',
        imgClass,
      ]"
      @load="loaded = true"
    />

    <div
      v-else-if="showFallback"
      class="absolute inset-0 flex items-center justify-center text-gray-400 text-sm italic"
    >
      No Image Available
    </div>
  </div>
</template>

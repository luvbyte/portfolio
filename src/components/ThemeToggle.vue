<script setup>
import { ref, onMounted } from 'vue'

const theme = ref('dark')

onMounted(() => {
  const saved = localStorage.getItem('theme')
  theme.value = saved || 'dark'
  document.documentElement.setAttribute('data-theme', theme.value)
})

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme.value)
  localStorage.setItem('theme', theme.value)
}
</script>

<template>
  <button
    @click="toggleTheme"
    class="p-1 rounded-lg text-white font-medium hover:opacity-90 transition-all duration-300"
  >
    <div v-if="theme === 'dark'" class="flex gap-1 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <g fill="currentColor" fill-opacity="0">
          <path
            d="M15.22 6.03l2.53 -1.94l-3.19 -0.09l-1.06 -3l-1.06 3l-3.19 0.09l2.53 1.94l-0.91 3.06l2.63 -1.81l2.63 1.81l-0.91 -3.06Z"
          >
            <animate
              fill="freeze"
              attributeName="fill-opacity"
              begin="0.7s"
              dur="0.4s"
              values="0;1"
            />
          </path>
          <path
            d="M19.61 12.25l1.64 -1.25l-2.06 -0.05l-0.69 -1.95l-0.69 1.95l-2.06 0.05l1.64 1.25l-0.59 1.98l1.7 -1.17l1.7 1.17l-0.59 -1.98Z"
          >
            <animate
              fill="freeze"
              attributeName="fill-opacity"
              begin="1.1s"
              dur="0.4s"
              values="0;1"
            />
          </path>
        </g>
        <path
          fill="currentColor"
          fill-opacity="0"
          stroke="currentColor"
          stroke-dasharray="56"
          stroke-dashoffset="56"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M7 6c0 6.08 4.92 11 11 11c0.53 0 1.05 -0.04 1.56 -0.11c-1.61 2.47 -4.39 4.11 -7.56 4.11c-4.97 0 -9 -4.03 -9 -9c0 -3.17 1.64 -5.95 4.11 -7.56c-0.07 0.51 -0.11 1.03 -0.11 1.56Z"
        >
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="1.5s"
            dur="0.15s"
            values="0;0.3"
          />
          <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0" />
        </path>
      </svg>
      <span>Dark</span>
    </div>
    <div v-else class="flex gap-1 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="6" />
          <path
            stroke-linecap="round"
            d="M12 2v1m0 18v1m10-10h-1M3 12H2m17.07-7.07l-.392.393M5.322 18.678l-.393.393m14.141-.001l-.392-.393M5.322 5.322l-.393-.393"
          />
        </g>
      </svg>
      <span>Light</span>
    </div>
  </button>
</template>

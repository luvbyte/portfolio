<template>
  <nav
    class="w-full p-4 shadow-xl flex justify-between items-center bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-heading"
  >
    <div class="font-bold text-xl">
      <router-link to="/" class="hover:underline"> Kikku </router-link>
    </div>

    <!-- RIGHT -->
    <div class="flex items-center gap-4">
      <ul class="gap-4 items-center">
        <li>
          <router-link to="/projects" class="hover:underline">
            Projects
          </router-link>
        </li>
      </ul>
      <ThemeToggle />
    </div>
  </nav>
</template>

<script setup>
  import { ref } from "vue";
  import ThemeToggle from "@/components/ThemeToggle.vue";

  const isOpen = ref(false);
</script>

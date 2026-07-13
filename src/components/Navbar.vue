<template>
  <nav
    :class="[
      'sticky top-0 z-50 w-full p-3 flex justify-between items-center border-white/20 text-white font-heading transition-colors duration-600',
      isScrolled
        ? 'bg-white/20 backdrop-blur-md shadow-lg border-y '
        : 'bg-transparent'
    ]"
  >
    <!-- Logo -->
    <div class="font-bold text-xl">
      <router-link to="/" class="hover:underline"> Kikku </router-link>
    </div>

    <!-- Navigation -->
    <ul class="flex gap-4 items-center">
      <li>
        <router-link to="/projects" class="hover:underline">
          Projects
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from "vue";

  const isScrolled = ref(false);

  const handleScroll = () => {
    console.log(window.scrollY);
    isScrolled.value = window.scrollY > 10;
  };

  onMounted(() => {
    handleScroll(); // Initial state
    window.addEventListener("scroll", handleScroll, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
</script>

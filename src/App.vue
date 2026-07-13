<template>
  <div class="font-body bg-black text-white">
    <BgEffects />
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
  import Navbar from "@/components/Navbar.vue";
  import Footer from "@/components/Footer.vue";
  import BgEffects from "@/components/BgEffects.vue";
</script>

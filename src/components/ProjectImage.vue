<script setup>
  import { ref, computed } from "vue";
  import Image from "@/components/Image.vue";

  const props = defineProps({
    images: {
      type: [String, Array],
      required: true
    },
    alt: String
  });

  const current = ref(0);
  let timer;

  function startSlideshow() {
    if (imgs.value.length <= 1) return;

    timer = setInterval(() => {
      current.value = (current.value + 1) % imgs.value.length;
    }, 2000);
  }

  function stopSlideshow() {
    clearInterval(timer);
  }

  const imgs = computed(() =>
    Array.isArray(props.images) ? props.images : [props.images]
  );

  function nextImage() {
    if (imgs.value.length <= 1) return;

    current.value = (current.value + 1) % imgs.value.length;
  }
</script>

<template>
  <div
    class="relative w-full aspect-video overflow-hidden rounded-lg cursor-pointer"
    @mouseenter="startSlideshow"
    @mouseleave="stopSlideshow"
    @pointerdown="nextImage"
  >
    <Transition name="fade" mode="out-in">
      <Image
        :key="imgs[current]"
        :src="imgs[current]"
        :alt="alt"
        imgClass="w-full h-full object-cover"
      />
    </Transition>

    <div
      v-if="imgs.length > 1"
      class="absolute bottom-2 right-2 badge badge-sm badge-neutral opacity-40"
    >
      {{ current + 1 }}/{{ imgs.length }}
    </div>
  </div>
</template>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.35s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>

<template>
  <div
    class="border border-base-content/60 w-full rounded flex flex-col h-full"
  >
    <div
      v-if="title"
      class="w-full border-b border-base-content/60 p-1 text-center"
    >
      {{ title }}
    </div>

    <!-- Slot -->
    <div class="p-2 flex-grow flex flex-col">
      <aos-vue animation="flip-left" :once="true">
        <slot />
      </aos-vue>
    </div>
  </div>
</template>

<script setup>
  defineProps(["title"]);
</script>

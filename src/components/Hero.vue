<template>
  <section
    class="mt-10 flex flex-col md:flex-row items-center justify-stretch gap-4 md:gap-4"
  >
    <!-- LEFT -->
    <div>
      <pre class="hidden sm:block text-2xl flex">
┳┻| 
┻┳|  
┳|ヘ∧ ? 
┻┳|•.•)
┳⊂ ノ
┻┳|Ｊ   
</pre
      >
    </div>

    <div class="flex-1 flex justify-center items-center">
      <aos-vue animation="slide-down">
        <p class="text-center text-lg md:text-2xl font-heading">
          HI.. I am
          <span class="neon-text text-3xl px-1 font-normal">kikku</span>
          I create web apps & Python projects
        </p>
      </aos-vue>
    </div>

    <!-- RIGHT -->
    <aos-vue animation="slide-left" :once="true">
      <div class="relative w-64 h-64 md:w-52 md:h-52 overflow-hidden">
        <Image
          src="/images/profile-hero.png"
          class="w-full h-full object-cover shadow-2xl"
        />
      </div>
    </aos-vue>
  </section>
  <aos-vue animation="flip-up" :once="true" :offset="-100">
    <Quote />
  </aos-vue>
</template>

<script setup>
  import Quote from "@/components/Quote.vue";
  import Image from "@/components/Image.vue";
</script>

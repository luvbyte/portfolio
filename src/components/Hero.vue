<template>
  <section
    class="min-h-[85vh] flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16 px-6 sm:px-10 lg:px-20 py-10"
  >
    <!-- LEFT CONTENT -->
    <div
      class="w-full md:flex-1 max-w-2xl mx-auto text-center md:text-left order-1"
    >
      <div class="hero-item hero-1">
        <p
          class="uppercase tracking-[0.3em] text-gray-400 text-xs sm:text-sm mb-3"
        >
          Full Stack Developer
        </p>
      </div>

      <div class="hero-item hero-2">
        <h1
          class="font-heading font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Hi, I'm
          <span class="neon-text">Kikku</span>
        </h1>
      </div>

      <div class="hero-item hero-3">
        <p
          class="mt-6 text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed"
        >
          I create modern web applications, Python projects, automation tools,
          and beautiful user experiences.
        </p>
      </div>

      <div
        class="hero-item hero-4 mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4"
      >
        <router-link
          to="/projects"
          class="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:scale-105 hover:-translate-y-1 transition-all duration-300"
        >
          View Projects
        </router-link>

        <a
          href="https://github.com/luvbyte"
          target="_blank"
          class="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
        >
          GitHub
        </a>
      </div>
    </div>

    <!-- RIGHT IMAGE -->
    <div class="md:block hidden flex-1 flex justify-center order-1 md:order-2">
      <aos-vue animation="zoom-in" :once="true">
        <div class="relative w-96 h-96">
          <svg
            class="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 100 100"
          >
            <!-- Base ring -->
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="rgba(255,255,255,.15)"
              stroke-width="1.5"
            />

            <defs>
              <linearGradient id="ring">
                <stop offset="0%" stop-color="#8b5cf6" />
                <stop offset="50%" stop-color="#3b82f6" />
                <stop offset="100%" stop-color="#8b5cf6" />
              </linearGradient>

              <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <!-- Animated arc -->
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="url(#ring)"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-dasharray="55 247"
              filter="url(#glow)"
              class="spin-ring"
            />
          </svg>

          <img
            src="/pp.jpg"
            class="absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] rounded-full object-cover z-10"
          />
        </div>
      </aos-vue>
    </div>
  </section>
</template>

<script setup>
  import Image from "@/components/Image.vue";
</script>

<style scoped>
  .spin-ring {
    transform-origin: center;
    animation: orbit 6s linear infinite;

    filter: drop-shadow(0 0 6px #8b5cf6) drop-shadow(0 0 12px #8b5cf6)
      drop-shadow(0 0 20px #3b82f6);
  }

  svg {
    overflow: visible;
  }

  @keyframes orbit {
    to {
      transform: rotate(360deg);
    }
  }

  .hero-item {
    opacity: 0;
    transform: translateY(30px);
    animation: heroReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .hero-1 {
    animation-delay: 0.1s;
  }

  .hero-2 {
    animation-delay: 0.3s;
  }

  .hero-3 {
    animation-delay: 0.5s;
  }

  .hero-4 {
    animation-delay: 0.7s;
  }

  @keyframes heroReveal {
    from {
      opacity: 0;
      transform: translateY(30px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>

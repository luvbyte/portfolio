<template>
  <section class="hero-shell min-h-[85vh] relative isolate overflow-hidden">
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.2),transparent_30%)]"
    />

    <div
      class="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col-reverse items-center justify-center gap-12 px-6 py-14 sm:px-10 lg:flex-row lg:gap-16 lg:px-20"
    >
      <!-- LEFT CONTENT -->
      <div class="order-1 w-full max-w-2xl text-center md:text-left lg:flex-1">
        <div
          class="hero-item hero-1 mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.25em] text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
        >
          <span
            class="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]"
          ></span>
          Available for work
        </div>

        <div class="hero-item hero-2">
          <h1
            class="font-heading text-4xl font-bold leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Hi, I'm
            <span class="neon-text inline-block">Kikku</span>
          </h1>
        </div>

        <div class="hero-item hero-3">
          <p class="mt-6 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
            I build modern web apps, Python tools, and automation systems that feel premium, perform
            smoothly, and solve real problems.
          </p>
        </div>

        <div
          class="hero-item hero-4 mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start"
        >
          <router-link
            to="/projects"
            class="hero-button hero-button-primary group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-black transition-all duration-300"
          >
            <span>View Projects</span>
            <span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </router-link>

          <a
            href="https://github.com/luvbyte"
            target="_blank"
            rel="noreferrer"
            class="hero-button hero-button-secondary inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-white transition-all duration-300"
          >
            GitHub
          </a>
        </div>
      </div>

      <!-- RIGHT IMAGE -->
      <div class="order-2 flex w-full justify-center lg:order-2 lg:flex-1">
        <aos-vue animation="zoom-in" :once="true">
          <div class="hero-portrait relative flex items-center justify-center">
            <div
              class="portrait-glow absolute inset-6 rounded-full bg-gradient-to-br from-violet-500/30 via-cyan-500/20 to-transparent blur-3xl"
            ></div>

            <div
              class="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px]"
            >
              <svg class="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="rgba(255,255,255,.16)"
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

              <div
                class="hero-image-frame absolute inset-3 z-10 overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-[0_0_30px_rgba(59,130,246,0.25)] backdrop-blur-sm"
              >
                <img
                  src="/pp.jpg"
                  class="hero-image h-full w-full object-cover"
                  alt="Kikku portrait"
                />
              </div>
            </div>
          </div>
        </aos-vue>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-shell {
  background: linear-gradient(180deg, rgba(10, 10, 15, 0.2) 0%, rgba(10, 10, 15, 0.5) 100%);
}

.hero-portrait {
  transform: translateY(0);
  transition: transform 0.4s ease;
  animation: floatPortrait 6s ease-in-out infinite;
}

.hero-portrait:hover {
  transform: translateY(-4px);
}

.hero-image-frame {
  box-shadow: 0 20px 45px rgba(59, 130, 246, 0.2);
}

.hero-image {
  transform: scale(1.02);
  transition: transform 0.5s ease;
}

.hero-portrait:hover .hero-image {
  transform: scale(1.04);
}

.spin-ring {
  transform-origin: center;
  animation: orbit 16s linear infinite;
  filter: drop-shadow(0 0 6px #8b5cf6) drop-shadow(0 0 12px #8b5cf6) drop-shadow(0 0 20px #3b82f6);
}

svg {
  overflow: visible;
}

.hero-button {
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.2);
}

.hero-button-primary {
  background: linear-gradient(135deg, #f8fafc 0%, #c4b5fd 40%, #67e8f9 100%);
}

.hero-button-primary:hover {
  transform: translateY(-2px) scale(1.01);
  box-shadow: 0 18px 35px rgba(103, 232, 249, 0.25);
}

.hero-button-secondary:hover {
  background: rgba(255, 255, 255, 0.06);
  transform: translateY(-2px);
}

@keyframes orbit {
  to {
    transform: rotate(360deg);
  }
}

@keyframes floatPortrait {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-12px);
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

<template>
  <section
    id="about"
    class="mt-10 py-10 px-4 md:px-0 flex flex-col md:flex-row items-center gap-10"
  >
    <!-- IMAGE -->
    <div
      class="relative group w-44 h-44 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-lg ring-2 ring-base-300 transition-all duration-500 hover:scale-105 hover:ring-primary"
    >
      <img
        src="/images/profile-about.png"
        alt="Profile"
        class="w-full h-full object-contain transition-all duration-500 group-hover:brightness-90"
        loading="lazy"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-60 transition-all duration-500"
      ></div>
    </div>
    <div class="max-w-full">
      <h2 class="text-3xl font-bold tracking-wide flex items-center gap-2 font-heading">
        👋 About Me
      </h2>
      <div class="divider mt-1 w-24"></div>

      <p class="mt-3 text-gray-500 text-sm md:text-[15px] leading-relaxed">
        I’m a developer passionate about building clean, intuitive, and meaningful digital
        experiences. I enjoy turning ideas into real, functional software — whether it’s a web
        application or a fully automated script.
      </p>

      <p class="mt-4 text-gray-500 text-sm md:text-[15px] leading-relaxed">
        My main focus is developing with
        <span class="font-semibold text-primary">Vue</span> and
        <span class="font-semibold text-primary">Python</span>, but I'm always exploring new tools
        and frameworks to level up my workflow.
      </p>

      <div class="mt-6 flex gap-3">
        <a
          href="/#/projects"
          class="btn btn-sm btn-primary shadow-sm hover:shadow-md transition-all duration-300 font-heading"
        >
          View Projects →
        </a>

        <a
          href="#contact"
          class="btn btn-sm btn-outline shadow-sm hover:shadow-md transition-all duration-300 font-heading"
        >
          Contact Me
        </a>
      </div>
    </div>
  </section>
</template>

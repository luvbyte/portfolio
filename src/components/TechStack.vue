<template>
  <section id="tech" class="mt-12">
    <!-- HEADER -->
    <div class="flex items-center justify-between gap-4 mb-4">
      <div>
        <aos-vue animation="zoom-in">
          <h2 class="text-3xl font-bold tracking-wide font-heading">
            🧩 Tech Stack
          </h2>
        </aos-vue>
        <p class="text-sm text-gray-500 font-mono mt-2">
          Tools and technologies I use regularly.
        </p>
      </div>
    </div>

    <div class="divider mt-2 mb-6"></div>

    <!-- TECH LIST -->
    <div class="grid grid-cols-3 md:grid-cols-6 gap-6 place-items-center mt-2">
      <div
        v-for="(tech, i) in techList"
        :key="tech.name"
        class="group flex flex-col items-center gap-2 rounded-xl px-3 py-4 bg-base-200/60 backdrop-blur border border-base-300/60 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full max-w-[120px]"
        :style="{ animationDelay: `${i * 80}ms` }"
      >
        <div
          class="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center ring-1 ring-base-300 group-hover:ring-primary/70 transition-all duration-300"
        >
          <img
            :src="tech.icon"
            :alt="tech.name"
            class="w-8 h-8 md:w-10 md:h-10 animate-fadeIn"
            loading="lazy"
          />
        </div>
        <aos-vue animation="zoom-in">
          <span class="text-xs md:text-sm font-medium font-heading">
            {{ tech.name }}
          </span>
        </aos-vue>
        <span
          class="text-[10px] uppercase tracking-wide text-gray-500 font-body"
        >
          {{ tech.level }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
  const techList = [
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      level: "Primary"
    },
    {
      name: "Vue",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      level: "Secondary"
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      level: "Secondary"
    },
    {
      name: "TailwindCSS",
      icon: "/icons/devicon--tailwindcss.png",
      level: "Styling"
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      level: "Version"
    },
    {
      name: "Rust",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg",
      level: "Intermediate"
    },
    {
      name: "Godot",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Godot_icon.svg",
      level: "Intermediate"
    },
    {
      name: "Blender",
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg",
      level: "Beginner"
    },
    {
      name: "Flutter",
      icon: "/icons/logos--flutter.png",
      level: "Beginner"
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      level: "Core"
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      level: "Styling"
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      level: "Improving"
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      level: "Backend"
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      level: "Backend"
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      level: "Database"
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      level: "Database"
    },
    {
      name: "Linux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      level: "Systems"
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      level: "DevOps"
    }
  ];
</script>

<style scoped>
  .animate-fadeIn {
    animation: fadeIn 0.6s ease forwards;
    opacity: 0;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
</style>

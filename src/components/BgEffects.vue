<template>
  <vue-particles
    id="particles"
    :options="options"
    class="absolute inset-0 pointer-events-none"
  />
</template>


<script setup>
import { ref } from "vue";

const options = ref({
  fullScreen: {
    enable: false,
  },

  fpsLimit: 120,

  detectRetina: true,

  background: {
    color: "transparent",
  },

  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        area: 900,
      },
    },

    color: {
      value: [
        "#8B5CF6",
        "#6366F1",
        "#3B82F6",
        "#FFFFFF",
      ],
    },

    shape: {
      type: "circle",
    },

    opacity: {
      value: {
        min: 0.2,
        max: 0.7,
      },
      animation: {
        enable: true,
        speed: 0.5,
        minimumValue: 0.15,
        sync: false,
      },
    },

    size: {
      value: {
        min: 1,
        max: 4,
      },
      animation: {
        enable: true,
        speed: 2,
        minimumValue: 0.5,
      },
    },

    links: {
      enable: true,
      distance: 150,
      color: "#8B5CF6",
      opacity: 0.25,
      width: 1,
      triangles: {
        enable: false,
      },
    },

    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      outModes: {
        default: "bounce",
      },
      attract: {
        enable: false,
      },
    },

    shadow: {
      enable: true,
      color: "#8B5CF6",
      blur: 12,
    },
  },

  interactivity: {
    detectsOn: "canvas",

    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },

      onClick: {
        enable: true,
        mode: "push",
      },

      resize: true,
    },

    modes: {
      repulse: {
        distance: 120,
        duration: 0.4,
      },

      push: {
        quantity: 4,
      },

      grab: {
        distance: 180,
        links: {
          opacity: 0.8,
        },
      },

      bubble: {
        distance: 180,
        size: 8,
        duration: 2,
        opacity: 0.8,
      },
    },
  },
});
</script>
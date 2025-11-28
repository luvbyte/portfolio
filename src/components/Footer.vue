<template>
  <footer class="mt-20 py-10 text-center bg-base-200/40 backdrop-blur">
    <div class="divider w-40 mx-auto mb-6"></div>

    <!-- SOCIAL ICONS -->
    <div class="flex justify-center gap-6 mb-6">
      <a
        href="https://www.linkedin.com/in/coffee-boy-b4491635a"
        target="_blank"
        class="text-2xl transition-transform hover:scale-125 hover:text-primary"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
          <circle cx="4" cy="4" r="2" fill="currentColor" fill-opacity="0">
            <animate fill="freeze" attributeName="fill-opacity" dur="0.15s" values="0;1" />
          </circle>
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          >
            <path stroke-dasharray="12" stroke-dashoffset="12" d="M4 10v10">
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.15s"
                dur="0.2s"
                values="12;0"
              />
            </path>
            <path stroke-dasharray="12" stroke-dashoffset="12" d="M10 10v10">
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.45s"
                dur="0.2s"
                values="12;0"
              />
            </path>
            <path
              stroke-dasharray="24"
              stroke-dashoffset="24"
              d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.65s"
                dur="0.2s"
                values="24;0"
              />
            </path>
          </g>
        </svg>
      </a>

      <a
        href="https://github.com/luvbyte"
        target="_blank"
        class="text-2xl transition-transform hover:scale-125 hover:text-primary"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
          <mask id="SVGtXXaGeHA" width="24" height="24" x="0" y="0">
            <g fill="#fff">
              <ellipse cx="9.5" cy="9" rx="1.5" ry="1" />
              <ellipse cx="14.5" cy="9" rx="1.5" ry="1" />
            </g>
          </mask>
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path
              stroke-dasharray="32"
              stroke-dashoffset="32"
              d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"
            >
              <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0" />
            </path>
            <path
              stroke-dasharray="10"
              stroke-dashoffset="10"
              d="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"
            >
              <animate
                attributeName="d"
                dur="3s"
                repeatCount="indefinite"
                values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"
              />
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.8s"
                dur="0.2s"
                values="10;0"
              />
            </path>
          </g>
          <rect width="8" height="4" x="8" y="11" fill="currentColor" mask="url(#SVGtXXaGeHA)">
            <animate
              attributeName="y"
              dur="10s"
              keyTimes="0;0.45;0.46;0.54;0.55;1"
              repeatCount="indefinite"
              values="11;11;7;7;11;11"
            />
          </rect>
        </svg>
      </a>

      <a
        href="mailto:lovemelong@protonmail.com"
        class="text-2xl transition-transform hover:scale-125 hover:text-primary"
        title="Email me"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.312t.1-.413q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037"
          />
        </svg>
      </a>
    </div>

    <p class="text-sm text-gray-400 text-heading italic">
      Built with ❤️ using Vue, TailwindCSS & Coffee ☕
    </p>

    <p class="text-xs text-gray-500 mt-2 text-heading">
      © {{ new Date().getFullYear() }} Kikku — All Rights Reserved.
    </p>
  </footer>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const showMenu = ref(false)
const colorMode = useColorMode()
const mounted = ref(false)

onMounted(() => {
  mounted.value = true
})

const setColorMode = (mode: 'light' | 'dark') => {
  colorMode.preference = mode
}

const scrollTo = (id: string) => {
  const element = document.querySelector(`#${id}`)

  if (element) {
    showMenu.value = false
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <div>
    <div>
      <div
        class="fixed inset-y-0 left-0 z-doubleMax block w-56 transform space-y-6 bg-sky-600 px-2 text-sky-100 transition duration-200 ease-in-out dark:bg-zinc-600 md:hidden md:relative"
        :class="showMenu ? 'translate-x-0' : '-translate-x-full'"
      >
        <div
          class="flex flex-row-reverse items-center space-x-2 px-4 py-2 dark:text-sky-400"
        >
          <button
            type="button"
            aria-label="Close Menu"
            @click="showMenu = false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav>
          <button
            type="button"
            class="group flex items-center space-x-2 px-4 py-3 transition duration-200 hover:rounded hover:bg-sky-700 hover:text-sky-300 dark:hover:bg-zinc-700"
            @click="scrollTo('home')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m3 12 2-2m0 0 7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11 2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6"
              />
            </svg>
            <span class="text-white group-hover:text-sky-300">Home</span>
          </button>
          <button
            type="button"
            class="group flex items-center space-x-2 px-4 py-3 transition duration-200 hover:rounded hover:bg-sky-700 hover:text-sky-300 dark:hover:bg-zinc-700"
            @click="scrollTo('about')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7Z"
              />
            </svg>
            <span class="text-white group-hover:text-sky-300">About Me</span>
          </button>
          <button
            type="button"
            class="group flex items-center space-x-2 px-4 py-3 transition duration-200 hover:rounded hover:bg-sky-700 hover:text-sky-300 dark:hover:bg-zinc-700"
            @click="scrollTo('projects')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m9.75 17-.75 3-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
              />
            </svg>
            <span class="text-white group-hover:text-sky-300">Projects</span>
          </button>
          <button
            type="button"
            class="group flex items-center space-x-2 px-4 py-3 transition duration-200 hover:rounded hover:bg-sky-700 hover:text-sky-300 dark:hover:bg-zinc-700"
            @click="scrollTo('contact')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m3 8 7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
              />
            </svg>
            <span class="text-white group-hover:text-sky-300">Contact</span>
          </button>
        </nav>
      </div>
    </div>

    <div
      id="mobile-toggle"
      class="fixed z-max flex w-screen justify-between bg-white p-4 shadow dark:bg-zinc-500 md:hidden"
    >
      <button
        type="button"
        aria-label="Show Menu"
        class="font-extrabold text-sky-600 dark:text-sky-400"
        @click="showMenu = !showMenu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <button
        v-if="mounted && colorMode.value === 'dark'"
        type="button"
        aria-label="Click for light mode"
        class="font-extrabold text-sky-600 dark:text-sky-400"
        @click="setColorMode('light')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.707-.707M6.343 6.343l-.707-.707m12.728 0-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
          />
        </svg>
      </button>
      <button
        v-if="mounted && colorMode.value === 'light'"
        type="button"
        aria-label="Click for dark mode"
        class="font-extrabold text-sky-600 dark:text-sky-400"
        @click="setColorMode('dark')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M17.293 13.293A8 8 0 0 1 6.707 2.707a8.001 8.001 0 1 0 10.586 10.586Z"
          />
        </svg>
      </button>
    </div>

    <div
      id="navbar"
      class="fixed z-max hidden w-screen bg-sky-600 p-2 font-nunito text-2xl font-bold dark:bg-zinc-500 md:grid md:grid-cols-12 md:text-xl 2xl:px-80"
    >
      <div
        class="flex flex-row items-center justify-center md:col-span-9 lg:col-span-7 xl:col-span-6"
      >
        <div>
          <a
            href="#home"
            class="group flex items-center rounded px-4 py-3 text-white transition duration-200 hover:bg-sky-700 hover:text-sky-300 dark:hover:bg-zinc-700"
            @click.prevent="scrollTo('home')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m3 12 2-2m0 0 7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11 2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6"
              />
            </svg>
            <span class="ml-2 text-white group-hover:text-sky-300">HOME</span>
          </a>
        </div>
        <div>
          <a
            href="#about"
            class="group flex items-center rounded px-4 py-3 text-white transition duration-200 hover:bg-sky-700 hover:text-sky-300 dark:hover:bg-zinc-700"
            @click.prevent="scrollTo('about')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7Z"
              />
            </svg>
            <span class="ml-2 text-white group-hover:text-sky-300">ABOUT</span>
          </a>
        </div>
        <div>
          <a
            href="#projects"
            class="group flex items-center rounded px-4 py-3 text-white transition duration-200 hover:bg-sky-700 hover:text-sky-300 dark:hover:bg-zinc-700"
            @click.prevent="scrollTo('projects')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m9.75 17-.75 3-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
              />
            </svg>
            <span class="ml-2 text-white group-hover:text-sky-300"
              >PROJECT</span
            >
          </a>
        </div>
        <div>
          <a
            href="#contact"
            class="group flex items-center rounded px-4 py-3 text-white transition duration-200 hover:bg-sky-700 hover:text-sky-300 dark:hover:bg-zinc-700"
            @click.prevent="scrollTo('contact')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m3 8 7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
              />
            </svg>
            <span class="ml-2 text-white group-hover:text-sky-300"
              >CONTACT</span
            >
          </a>
        </div>
      </div>
      <div class="col-start-12 col-span-1 self-center justify-self-center">
        <button
          v-if="mounted && colorMode.value === 'dark'"
          type="button"
          aria-label="Click for light mode"
          class="font-extrabold text-white"
          @click="setColorMode('light')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.707-.707M6.343 6.343l-.707-.707m12.728 0-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
            />
          </svg>
        </button>
        <button
          v-if="mounted && colorMode.value === 'light'"
          type="button"
          aria-label="Click for dark mode"
          class="font-extrabold text-white"
          @click="setColorMode('dark')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M17.293 13.293A8 8 0 0 1 6.707 2.707a8.001 8.001 0 1 0 10.586 10.586Z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<template>
  <div>
    <div class="">
      <div class="md:hidden block bg-sky-600 dark:bg-zinc-600 text-sky-100 w-56 space-y-6 px-2 fixed md:relative inset-y-0 left-0 transform -translate-x-full md:-translate-x-0 transition duration-200 ease-in-out z-doubleMax" :class="{ '-translate-x-0': showMenu }">
        <!-- CLOSE BUTTON -->
        <div class="flex flex-row-reverse dark:text-sky-400 items-center space-x-2 px-4 py-2">
          <button @click="showMenu = !showMenu">
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
         <!-- MOBILE SLIDE NAV -->
        <nav>
          <a href="javscript:void(null)" @click="scrollTo('home')"  class="flex items-center group space-x-2 py-3 px-4 hover:bg-sky-700 hover:rounded hover:text-sky-300 dark:hover:bg-zinc-700 transition duration-200">
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              /></svg
            ><span class="text-white group-hover:text-sky-300">Home</span>
          </a>
          <a href="javscript:void(null)" @click="scrollTo('about')" class="flex items-center group space-x-2 py-3 px-4 hover:bg-sky-700 hover:rounded hover:text-sky-300 dark:hover:bg-zinc-700 transition duration-200">
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span class="text-white group-hover:text-sky-300">About Me</span>
          </a>
          <a href="javscript:void(null)" @click="scrollTo('projects')" class="flex items-center group space-x-2 py-3 px-4 hover:bg-sky-700 hover:rounded hover:text-sky-300 dark:hover:bg-zinc-700 transition duration-200">
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
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span class="text-white group-hover:text-sky-300">Projects</span>
          </a>
          <a href="javscript:void(null)" @click="scrollTo('contact')" class="flex items-center group space-x-2 py-3 px-4 hover:bg-sky-700 hover:rounded hover:text-sky-300 dark:hover:bg-zinc-700 transition duration-200">
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span class="text-white group-hover:text-sky-300">Contact</span>
          </a>
        </nav>
      </div>
    </div>
    <!-- MOBILE NAV BAR -->
    <div id="mobile-toggle" class="flex justify-between md:hidden bg-white dark:bg-zinc-500 shadow p-4 w-screen z-max fixed">
      <button @click="showMenu = !showMenu" class="text-sky-600 dark:text-sky-400 font-extrabold">
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
      <button v-if="$colorMode.value === 'dark'" @click="$colorMode.value = 'light'" class="text-sky-600 dark:text-sky-400 font-extrabold">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </button>
      <button v-if="$colorMode.value === 'light'" @click="$colorMode.value = 'dark'" class="text-sky-600 dark:text-sky-400 font-extrabold">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </button>
    </div>
    <!-- NORMAL NAV BAR -->
    <div id="navbar" class="hidden md:grid md:grid-cols-12 fixed bg-sky-600 dark:bg-zinc-500 w-screen p-2 font-nunito font-bold z-max text-2xl md:text-xl">
      <div class="md:col-span-9 lg:col-span-7 xl:col-span-6 flex flex-row items-center justify-center">
        <div class="">
          <a href="javscript:void(null)" @click="scrollTo('home')" class="flex items-center group py-3 px-4 rounded text-white hover:bg-sky-700 hover:text-sky-300 dark:hover:bg-zinc-700 transition duration-200">
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                /></svg>
            <span class="ml-2 text-white group-hover:text-sky-300">HOME</span>
          </a>
        </div>
        <div class="">
          <a href="javscript:void(null)" @click="scrollTo('about')" class="flex items-center group py-3 px-4 rounded text-white hover:bg-sky-700 hover:text-sky-300 dark:hover:bg-zinc-700 transition duration-200">
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
            </svg>
            <span class="ml-2 text-white group-hover:text-sky-300">ABOUT</span>
          </a>
        </div>
        <div class="">
          <a href="javscript:void(null)" @click="scrollTo('projects')" class="flex items-center group py-3 px-4 rounded text-white hover:bg-sky-700 hover:text-sky-300 dark:hover:bg-zinc-700 transition duration-200">
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
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            <span class="ml-2 text-white group-hover:text-sky-300">PROJECT</span>
          </a>
        </div>
        <div class="">
          <a href="javscript:void(null)" @click="scrollTo('contact')" class="flex items-center group py-3 px-4 rounded text-white hover:bg-sky-700 hover:text-sky-300 dark:hover:bg-zinc-700 transition duration-200">
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            <span class="ml-2 text-white group-hover:text-sky-300">CONTACT</span>
          </a>
        </div>
      </div>
      <div class="col-start-12 col-span-1 self-center justify-self-center">
        <button v-if="$colorMode.value === 'dark'" @click="$colorMode.value = 'light'" class="dark:white font-extrabold">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </button>
        <button v-if="$colorMode.value === 'light'" @click="$colorMode.value = 'dark'" class="text-white font-extrabold">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Navigation extends Vue {
  public showMenu = false;

  public scrollTo = (id: string) => {
    const element = document.querySelector(`#${id}`);
    if( element != null) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start'})
    }
  }

}
</script>

<style>

</style>
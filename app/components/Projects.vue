<script setup lang="ts">
import {
  Carousel,
  Navigation as CarouselNavigation,
  Pagination,
  Slide,
} from 'vue3-carousel'

type Project = {
  title: string
  status?: string
  url?: string
  imageSrc: string
  imageAlt: string
  fetchPriority: 'high' | 'low'
  description: string[]
  tags: string[]
}

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  transition: 500,
  mouseDrag: true,
  touchDrag: true,
}

const projects: Project[] = [
  {
    title: 'BorealisHR',
    status: 'Under Development',
    imageSrc: '/borealis.png',
    imageAlt: 'BorealisHR dashboard',
    fetchPriority: 'high',
    description: [
      'Functioning HR application that uses VueJS for a front end and Kotlin backend.',
      'Hosted using Docker containers with artifacts stored in Artifactory.',
    ],
    tags: ['VueJS', 'Kotlin', 'Spring Boot'],
  },
  {
    title: 'Ballers United Stats',
    status: 'Personal Project',
    url: 'https://ballers-united.netlify.app/',
    imageSrc: '/ballers-united',
    imageAlt: 'Ballers United Stats dashboard',
    fetchPriority: 'low',
    description: [
      'A custom basketball stats dashboard built to track team schedules, game-by-game box scores, player totals, and season trends for my rec team.',
      'Designed as a lightweight React app with Firebase-backed data, responsive charts, and support for preseason and regular-season tracking.',
    ],
    tags: ['React', 'TypeScript', 'Tailwind', 'Firebase', 'Netlify'],
  },
  {
    title: 'K Clark Unlimited',
    url: 'https://kclarkunlimited.com',
    imageSrc: '/kclarkunlimited.png',
    imageAlt: 'K Clark Unlimited homepage',
    fetchPriority: 'low',
    description: [
      'A custom blog for Canadian Champion boxer and inspiring Olympian Kaitlyn Clark.',
      'The blog is built using vuejs and nuxtjs pulling in content from Cockpit CMS.',
    ],
    tags: ['VueJS', 'NuxtJS', 'Cockpit CMS'],
  },
  {
    title: 'BAClark.ca',
    url: 'https://baclark.ca',
    imageSrc: '/baclark.png',
    imageAlt: 'BAClark.ca website',
    fetchPriority: 'low',
    description: [
      'A website built to provide information for my upcoming wedding. Includes RSVP system and an image gallery.',
      'It is built using VueJS for the front end. The RSVP system communicates to a Node backend server.',
    ],
    tags: ['VueJS', 'Node'],
  },
]
</script>

<template>
  <section
    id="projects"
    class="pt-20 md:mx-24 md:px-0 lg:mx-32 lg:px-8 2xl:mx-[32rem]"
  >
    <div class="px-4 sm:px-8 md:px-0">
      <div class="font-nunito text-2xl uppercase text-zinc-900 dark:text-white">
        projects
      </div>
      <hr
        class="w-40 rounded-full border-4 border-sky-600 dark:border-sky-400"
      />
    </div>

    <div class="mt-4 px-4 sm:px-8 md:px-0">
      <ClientOnly>
        <Carousel v-bind="carouselConfig">
          <Slide v-for="project in projects" :key="project.title">
            <div
              class="flex h-full w-full flex-col rounded-lg bg-white text-zinc-800 shadow-[0_8px_18px_rgba(15,23,42,0.06)] ring-1 ring-zinc-200/80 dark:bg-zinc-700 dark:text-white dark:shadow-none dark:ring-white/10"
            >
              <div class="flex flex-1 flex-col gap-4 px-4 py-4 xl:flex-row">
                <div
                  class="flex flex-wrap justify-center md:items-center xl:w-[58%]"
                >
                  <div class="relative aspect-[16/9] w-full">
                    <NuxtImg
                      provider="cloudinary"
                      :src="project.imageSrc"
                      :alt="project.imageAlt"
                      class="h-auto max-w-full rounded border-none align-middle shadow"
                      :modifiers="{ format: 'auto', quality: 'auto' }"
                      width="900"
                      height="506"
                      sizes="sm:360px md:520px lg:720px xl:860px 2xl:900px"
                      loading="lazy"
                      :fetchpriority="project.fetchPriority"
                    />
                  </div>
                </div>
                <div
                  class="mt-4 flex flex-1 flex-col font-nunito md:p-4 lg:p-0 xl:w-[42%]"
                >
                  <div v-if="project.url" class="text-xl font-bold">
                    <a
                      :href="project.url"
                      target="_blank"
                      rel="noreferrer"
                      class="flex flex-row items-center gap-1 hover:underline dark:text-sky-400"
                    >
                      <div>{{ project.title }}</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                  <div v-else class="text-xl font-bold dark:text-sky-400">
                    {{ project.title }}
                  </div>
                  <div
                    v-if="project.status"
                    class="-mt-1 text-xs font-light text-zinc-400 dark:text-zinc-200"
                  >
                    {{ project.status }}
                  </div>
                  <div
                    v-for="paragraph in project.description"
                    :key="paragraph"
                    class="mt-4"
                  >
                    {{ paragraph }}
                  </div>
                  <div class="mt-auto flex flex-wrap gap-3 pt-4">
                    <span
                      v-for="tag in project.tags"
                      :key="tag"
                      class="rounded-full bg-sky-400 px-4 py-2 text-sm font-semibold text-white"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          <template #addons>
            <CarouselNavigation />
            <div class="mt-5 flex justify-center">
              <Pagination />
            </div>
          </template>
        </Carousel>

        <template #fallback>
          <div
            class="min-h-[24rem] rounded-lg bg-white shadow-[0_8px_18px_rgba(15,23,42,0.06)] ring-1 ring-zinc-200/80 dark:bg-zinc-700 dark:shadow-none dark:ring-white/10"
          ></div>
        </template>
      </ClientOnly>
    </div>
  </section>
</template>

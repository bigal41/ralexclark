<script setup lang="ts">
import { VSlickCarousel } from 'v-slick-carousel'
import type { Settings } from 'v-slick-carousel'

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

const cloudinaryBaseUrl =
  'https://res.cloudinary.com/baclark2019/image/upload/v1647294915/ralexclark'

const settings: Settings = {
  arrows: true,
  dots: true,
  draggable: true,
  infinite: false,
  speed: 500,
  groupsToShow: 1,
  groupsToScroll: 1,
  initialGroupIndex: 0,
  swipe: true,
  touchMove: true,
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
    class="px-4 pt-20 sm:px-8 md:mx-24 md:px-0 lg:mx-32 lg:px-8 2xl:mx-[32rem]"
  >
    <div class="font-nunito text-2xl uppercase text-zinc-900 dark:text-white">
      projects
    </div>
    <hr
      class="w-40 rounded-full border-4 border-sky-600 dark:border-sky-400"
    />

    <div class="mt-4">
      <ClientOnly>
        <VSlickCarousel v-bind="settings">
          <div
            v-for="project in projects"
            :key="project.title"
            class="rounded-lg bg-white text-zinc-800 dark:bg-zinc-600 dark:text-white"
          >
            <div class="flex flex-col gap-4 px-4 py-4 xl:flex-row">
              <div class="flex flex-wrap justify-center md:items-center xl:w-[58%]">
                <div class="relative aspect-[16/9] w-full">
                  <img
                    :src="`${cloudinaryBaseUrl}${project.imageSrc}`"
                    :alt="project.imageAlt"
                    class="h-auto max-w-full rounded border-none align-middle shadow"
                    width="900"
                    height="506"
                    loading="eager"
                    :fetchpriority="project.fetchPriority"
                  />
                </div>
              </div>

              <div class="mt-4 flex flex-col font-nunito md:p-4 lg:p-0 xl:w-[42%]">
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

                <div class="mt-4 flex flex-wrap gap-3">
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
        </VSlickCarousel>

        <template #fallback>
          <div class="min-h-[24rem] rounded-lg bg-white dark:bg-zinc-600"></div>
        </template>
      </ClientOnly>
    </div>
  </section>
</template>

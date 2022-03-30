<template>
  <section id="projects" class="px-16 pt-20 md:mx-24 lg:mx-32 md:px-0 lg:px-8 2xl:mx-[32rem]">
    <div class="uppercase font-nunito text-zinc-900 dark:text-white text-2xl">
      projects
    </div>
    <hr class="border-sky-600 dark:border-sky-400 w-40 border-4 rounded-full" />
    <div class="mt-4">
    <VueSlickCarousel v-bind="settings">
      <div class="bg-white text-zinc-800 dark:bg-zinc-600 dark:text-white rounded-lg">
         <div class="flex flex-col xl:flex-row px-4 py-4">
          <div class="flex flex-wrap justify-center md:items-center">
            <div class="w-full xl:w-9/12">
              <nuxt-img provider="cloudinary" src="/borealis.png" alt="..." class="shadow rounded max-w-full h-auto align-middle border-none" width="2876" height="1646" />
            </div>
          </div> 
          <div class="flex flex-col font-nunito mt-4 md:p-4 lg:p-0 xl:w-full">
            <div class="text-xl font-bold dark:text-sky-400">BorealisHR</div>
            <div class="text-xs font-light -mt-1 text-zinc-200">Under Development</div>
            <div class="mt-4">
              Fuctioning HR application that uses VueJS for a front end and Kotlin backend.
            </div>
            <div class="mt-4">
              Hosted using Docker contianers with artifacts stored in Artifactory. 
            </div>
            <div class="flex flex-wrap space-x-2 mt-4">
              <span class="px-4 py-2 rounded-full bg-sky-400 text-white font-semibold text-sm flex align-center w-max">
                VueJs
              </span>
              <span class="px-4 py-2 rounded-full bg-sky-400 text-white font-semibold text-sm flex align-center w-max">
                Kotlin
              </span>
              <span class="px-4 py-2 rounded-full bg-sky-400 text-white font-semibold text-sm flex align-center w-max">
                Spring Boot
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white text-zinc-800 dark:bg-zinc-600 dark:text-white rounded-lg">
        <div class="flex flex-col xl:flex-row px-4 py-4">
          <div class="flex flex-wrap justify-center md:items-center">
            <div class="w-full xl:w-9/12">
              <nuxt-img provider="cloudinary" src="/kclarkunlimited.png" alt="..." class="shadow rounded max-w-full h-auto align-middle border-none" width="2880" height="1640" />
            </div>
          </div> 
          <div class="flex flex-col font-nunito mt-4 md:p-4 lg:p-0 xl:w-full">
            <div class="text-xl font-bold">
              <a href="https://kclarkunlimited.com" class="flex flex-row dark:text-sky-400 hover:underline">
                <div>K Clark Unlimited</div>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div class="mt-4">
             A custom blog for Canadian Champion boxer and inspiring Olympian Kaitlyn Clark.
            </div>
            <div class="mt-4">
              The blog is built using vuejs and nuxtjs pulling in content from Cockpit CMS.
            </div>
            <div class="flex flex-wrap space-x-2 mt-4">
              <span class="px-4 py-2 rounded-full bg-sky-400 text-white font-semibold text-sm flex align-center w-max">
                VueJS
              </span>
              <span class="px-4 py-2 rounded-full bg-sky-400 text-white font-semibold text-sm flex align-center w-max">
                NuxtJS
              </span>
              <span class="px-4 py-2 rounded-full bg-sky-400 text-white font-semibold text-sm flex align-center w-max">
                Cockpit CMS
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white text-zinc-800 dark:bg-zinc-600 dark:text-white rounded-lg">
        <div class="flex flex-col xl:flex-row px-4 py-4">
          <div class="flex flex-wrap justify-center md:items-center">
            <div class="w-full xl:w-9/12">
              <nuxt-img provider="cloudinary" src="/baclark.png" alt="..." class="shadow rounded max-w-full h-auto align-middle border-none" width="2878" height="1640" />
            </div>
          </div> 
          <div class="flex flex-col font-nunito mt-4 md:p-4 lg:p-0 xl:w-full">
            <div class="text-xl font-bold">
              <a href="https://baclark.ca" target="_blank" class="flex flex-row dark:text-sky-400 hover:underline">
                  <div>BAClark.ca</div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
            </div>
            <div class="mt-4">
              A website built to provide information for my upcoming wedding. Includes RSVP system and a image gallery. 
            </div>
            <div class="mt-4">
              It is built using VueJS for the front end. The RSVP system communicates to a Node backend server. 
            </div>
            <div class="flex flex-wrap space-x-2 mt-4">
              <span class="px-4 py-2 rounded-full bg-sky-400 text-white font-semibold text-sm flex align-center w-max">
                VueJS
              </span>
              <span class="px-4 py-2 rounded-full bg-sky-400 text-white font-semibold text-sm flex align-center w-max">
                Node
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <template #prevArrow="arrowOption">
      <div class="custom-arrow">
        {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
      </div>
    </template>

    </VueSlickCarousel>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import VueSlickCarousel from 'vue-slick-carousel'

@Component({
  components: {
    VueSlickCarousel
  }
})
export default class Projects extends Vue {
  public settings = {
  "dots": true,
  "infinite": true,
  "speed": 500,
  "slidesToShow": 1,
  "slidesToScroll": 1,
  "initialSlide": 0,
}
}
</script>

<style>

</style>
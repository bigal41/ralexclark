<template>
  <section id="about" class="px-16 pt-20 md:mx-24 lg:mx-32 md:px-0 lg:px-8 2xl:mx-[32rem]">
    <div class="uppercase font-nunito text-zinc-900 dark:text-white text-2xl">
      about me
    </div>
    <hr class="border-sky-600 dark:border-sky-400 w-40 border-4 rounded-full" />
    <div class="bg-white dark:bg-zinc-600 mt-4 rounded shadow-xl">
      <div class="py-4 px-8 text-zinc-900 dark:text-white">
        I’am front-end web developer with experience with many front-end experience. I have 8 years in the industry, which has led me to use many different frameworks and languages. I am passionate about programming and always excited to learn new things.
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class About extends Vue {}
</script>

<style>

</style>
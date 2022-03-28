<template>
  <section id="home" class="flex flex-col md:flex-row h-screen items-center justify-center mt-0 md:mx-24 lg:mx-32 2xl:mx-[32rem]">
    <div class="lg:basis-1/2 md:basis-1/2 flex flex-wrap justify-center">
      <div class="w-6/12 md:w-11/12 px-4">
        <img src="https://res.cloudinary.com/baclark2019/image/upload/v1647294915/ralexclark/alexclark.jpg" alt="..." class="shadow-lg rounded max-w-full h-auto align-middle border-4 md:border-2 border-sky-600 dark:border-sky-400" />
      </div>
    </div>
    <div class="lg:basis-1/2 md:basis-1/2 flex flex-col justify-center items-center">
      <div class="mt-4 uppercase text-base text-zinc-400 dark:text-zinc-100 font-nunito">
        hello, my name is
      </div>
      <div class="uppercase text-4xl text-sky-600 dark:text-sky-400 font-nunito">
        alex clark
      </div>
      <div class="uppercase text-base text-zinc-900 dark:text-white font-nunito text-center px-16 md:px-0 mt-4">
        I'm a front end developer from the greater toronto area that enjoys creating web applications and experiences.
      </div>
      <a href="/resume.pdf" class="bg-sky-600 text-white active:bg-sky-700 dark:bg-zinc-600 dark:text-sky-300 dark:active:bg-zinc-400 font-nunito font-bold uppercase text-sm px-8 py-2 mt-4 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
        resume
      </a>
      <div class="flex mt-4">
        <a href="https://www.linkedin.com/in/raclark-5a5a6971" target="_blank" class="flex items-center bg-white text-sky-600 active:bg-sky-700 active:text-white dark:bg-zinc-600 dark:text-sky-300 dark:active:bg-zinc-400 font-bold uppercase text-2xl px-3 py-2 rounded-xl shadow hover:shadow-lg outline-none focus:outline-noe mr-3 mb-1 w-12 h-12 ease-linear transition-all duration-150">
          <font-awesome-icon icon="fa-brands fa-linkedin" class="flex-1"/>
        </a>
        <a href="https://github.com/bigal41" target="_blank" class="flex items-center bg-white text-sky-600 active:bg-sky-700 active:text-white dark:bg-zinc-600 dark:text-sky-300 dark:active:bg-zinc-400 font-bold uppercase text-2xl px-3 py-2 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-3 mb-1 w-12 h-12 ease-linear transition-all duration-150">
          <font-awesome-icon icon="fa-brands fa-github" class="flex-1"/>
        </a>
        <a href="mailto:ralexclark@outlook.com" class="flex items-center bg-white text-sky-600 active:bg-sky-700 active:text-white dark:bg-zinc-600 dark:text-sky-300 dark:active:bg-zinc-400 font-bold uppercase text-2xl px-3 py-2 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mb-1 w-12 h-12 ease-linear transition-all duration-150">
          <font-awesome-icon icon="fa-solid fa-envelope" class="flex-1"/>
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Home extends Vue {}
</script>

<style>

</style>
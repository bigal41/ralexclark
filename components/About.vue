<template>
  <section id="about" class="px-16 pt-20 md:mx-24 lg:mx-32 md:px-0 lg:px-8 2xl:mx-[32rem]">
    <div class="uppercase font-nunito text-zinc-900 dark:text-white text-2xl">
      about me
    </div>
    <hr class="border-sky-600 dark:border-sky-400 w-40 border-4 rounded-full" />
    <div class="bg-white dark:bg-zinc-600 mt-4 rounded shadow-xl">
      <div class="py-4 px-8 text-zinc-900 dark:text-white">
        <div>
          Hi, I’m Alex Clark — a full stack engineer with nearly a decade of experience building scalable,
          user-focused applications. I specialize in Java, JavaScript, and modern frameworks like React, Vue, and Spring.
        </div>
        
        <div class="my-3">
          Currently, I’m a Full Stack Engineer at Rush Street Interactive, where I help design and deliver engaging 
          digital products in the gaming and entertainment space. Before that, I spent five years at Veriday, building 
          enterprise platforms and becoming a Certified Liferay Trainer, and earlier at iNetDispatch, developing 
          mission-critical systems for public safety.
        </div>
        <div>
          I’m passionate about solving complex problems, collaborating across teams, and turning ideas into clean, 
          impactful software solutions.
        </div>
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
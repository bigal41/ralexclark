<template>
  <section id="contact" class="px-16 pt-20 md:mx-24 lg:mx-32 md:px-0 lg:px-8">
    <div class="uppercase font-nunito text-zinc-900 dark:text-white text-2xl">
      contact
    </div>
    <hr class="border-sky-600 dark:border-sky-400 w-40 border-4 rounded-full" />
    <div class="bg-white dark:bg-zinc-700 mt-4 rounded shadow-xl">
      <form class="py-4 px-8 text-zinc-900 dark:text-white" action="https://formspree.io/f/ralexclark@outlook.com" method="POST">
        <div class="mb-3 pt-0">
          <label for="name" class="font-nunito mb-1">Name</label>
          <input type="text" id="name" name="name" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white dark:bg-zinc-500 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
        </div>
        <div class="mb-3 pt-0">
          <label for="email" class="font-nunito mb-1">Email</label>
          <input type="text" id="email" name="_replyto" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white dark:bg-zinc-500 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
        </div>
        <div class="mb-3 pt-0">
          <label for="subject" class="font-nunito mb-1">Subject</label>
          <input type="text" id="subject" name="_subject" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white dark:bg-zinc-500 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
        </div>
        <div class="mb-3 pt-0">
          <label for="message" class="font-nunito mb-1">Message</label>
          <textarea id="message" name="message" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white dark:bg-zinc-500 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
        </div>
        <input type="text" name="_gotcha" style="display:none" />
        <button class="bg-sky-600 text-white active:bg-sky-700 dark:bg-zinc-400 dark:text-zinc-800 dark:active:bg-zinc-400 font-nunito font-bold uppercase text-sm px-8 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit">
          send
        </button>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Contact extends Vue {}
</script>

<style>

</style>
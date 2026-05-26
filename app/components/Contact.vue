<template>
  <section
    id="contact"
    class="pt-20 md:mx-24 md:px-0 lg:mx-32 lg:px-8 2xl:mx-[32rem]"
  >
    <div class="px-4 sm:px-8 md:px-0">
      <div class="font-nunito text-2xl uppercase text-zinc-900 dark:text-white">
        contact
      </div>
      <hr
        class="w-40 rounded-full border-4 border-sky-600 dark:border-sky-400"
      />
    </div>

    <div class="mt-4 px-4 sm:px-8 md:px-0">
      <div class="rounded bg-white shadow-xl dark:bg-zinc-700">
        <form
          class="px-8 py-4 text-zinc-900 dark:text-white"
          action="https://formspree.io/f/ralexclark@outlook.com"
          method="POST"
        >
          <div class="mb-3 pt-0">
            <label for="name" class="mb-1 font-nunito">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              class="placeholder-blueGray-300 text-blueGray-600 relative w-full rounded border-0 bg-white px-3 py-3 text-sm shadow outline-none focus:ring focus:outline-none dark:bg-zinc-500"
            />
          </div>
          <div class="mb-3 pt-0">
            <label for="email" class="mb-1 font-nunito">Email</label>
            <input
              id="email"
              type="text"
              name="_replyto"
              class="placeholder-blueGray-300 text-blueGray-600 relative w-full rounded border-0 bg-white px-3 py-3 text-sm shadow outline-none focus:ring focus:outline-none dark:bg-zinc-500"
            />
          </div>
          <div class="mb-3 pt-0">
            <label for="subject" class="mb-1 font-nunito">Subject</label>
            <input
              id="subject"
              type="text"
              name="_subject"
              class="placeholder-blueGray-300 text-blueGray-600 relative w-full rounded border-0 bg-white px-3 py-3 text-sm shadow outline-none focus:ring focus:outline-none dark:bg-zinc-500"
            />
          </div>
          <div class="mb-3 pt-0">
            <label for="message" class="mb-1 font-nunito">Message</label>
            <textarea
              id="message"
              name="message"
              class="placeholder-blueGray-300 text-blueGray-600 relative w-full rounded border-0 bg-white px-3 py-3 text-sm shadow outline-none focus:ring focus:outline-none dark:bg-zinc-500"
            />
          </div>
          <input type="text" name="_gotcha" style="display: none" />
          <button
            class="ease-linear mr-1 mb-1 rounded-full bg-sky-600 px-8 py-2 font-nunito text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 hover:shadow-lg focus:outline-none active:bg-sky-700 dark:bg-zinc-400 dark:text-zinc-800 dark:active:bg-zinc-400"
            type="submit"
          >
            send
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

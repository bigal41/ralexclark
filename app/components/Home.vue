<template>
  <section
    id="home"
    class="mt-0 flex h-screen flex-col items-center justify-center md:mx-24 md:flex-row lg:mx-32 2xl:mx-[32rem]"
  >
    <div class="flex flex-wrap justify-center md:basis-1/2 lg:basis-1/2">
      <div class="w-6/12 px-4 xs:w-11/12 md:w-11/12 lg:w-8/12 2xl:w-8/12">
        <NuxtImg
          provider="cloudinary"
          :modifiers="{ format: 'auto', quality: 'auto' }"
          src="/alexclark.jpg"
          alt="profile"
          class="h-auto max-w-full rounded border-4 border-sky-600 align-middle shadow-lg dark:border-sky-400 md:border-2"
          width="395"
          height="395"
          sizes="sm:200px md:260px lg:320px xl:360px 2xl:395px"
          fetchpriority="high"
          loading="eager"
        />
      </div>
    </div>
    <div
      class="flex flex-col items-center justify-center md:basis-1/2 lg:basis-1/2"
    >
      <div
        class="mt-4 font-nunito text-base uppercase text-zinc-900 dark:text-zinc-100"
      >
        hello, my name is
      </div>
      <div
        class="font-nunito text-4xl uppercase text-sky-600 dark:text-sky-400"
      >
        alex clark
      </div>
      <div
        class="mt-4 px-16 text-center font-nunito text-base uppercase text-zinc-900 dark:text-white md:px-0"
      >
        Full Stack Engineer from Kitchener, passionate about building web
        applications that people love to use.
      </div>
      <a
        href="/resume.pdf"
        class="ease-linear mr-1 mb-1 mt-4 rounded-full bg-sky-600 px-8 py-2 font-nunito text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 hover:shadow-lg focus:outline-none active:bg-sky-700 dark:bg-zinc-600 dark:text-sky-300 dark:active:bg-zinc-400"
      >
        resume
      </a>
      <div class="mt-4 flex">
        <a
          href="https://www.linkedin.com/in/raclark-5a5a6971"
          target="_blank"
          rel="noreferrer"
          aria-label="Click to view linkedin"
          class="ease-linear mr-3 mb-1 flex h-12 w-12 items-center rounded-xl bg-white px-3 py-2 text-2xl font-bold uppercase text-sky-600 shadow outline-none transition-all duration-150 hover:shadow-lg focus:outline-none active:bg-sky-700 active:text-white dark:bg-zinc-600 dark:text-sky-300 dark:active:bg-zinc-400"
        >
          <ClientOnly>
            <font-awesome-icon icon="fa-brands fa-linkedin" class="flex-1" />
          </ClientOnly>
        </a>
        <a
          href="https://github.com/bigal41"
          target="_blank"
          rel="noreferrer"
          aria-label="Click to view github"
          class="ease-linear mr-3 mb-1 flex h-12 w-12 items-center rounded-xl bg-white px-3 py-2 text-2xl font-bold uppercase text-sky-600 shadow outline-none transition-all duration-150 hover:shadow-lg focus:outline-none active:bg-sky-700 active:text-white dark:bg-zinc-600 dark:text-sky-300 dark:active:bg-zinc-400"
        >
          <ClientOnly>
            <font-awesome-icon icon="fa-brands fa-github" class="flex-1" />
          </ClientOnly>
        </a>
        <a
          href="mailto:ralexclark@outlook.com"
          aria-label="Click to email ralexclark@outlook.com"
          class="ease-linear mb-1 flex h-12 w-12 items-center rounded-xl bg-white px-3 py-2 text-2xl font-bold uppercase text-sky-600 shadow outline-none transition-all duration-150 hover:shadow-lg focus:outline-none active:bg-sky-700 active:text-white dark:bg-zinc-600 dark:text-sky-300 dark:active:bg-zinc-400"
        >
          <ClientOnly>
            <font-awesome-icon icon="fa-solid fa-envelope" class="flex-1" />
          </ClientOnly>
        </a>
      </div>
    </div>
  </section>
</template>

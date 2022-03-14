<template>
  <div>
    <navigation /> 
    <home />
    <about />
    <projects />
    <contact />
    <footer class="h-20 w-screen flex uppercase items-end justify-center text-xs">
      alex clark ©2022
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Navigation from '~/components/Navigation.vue'
import Home from '~/components/Home.vue'
import About from '~/components/About.vue'
import Contact from '~/components/Contact.vue'
import Projects from '~/components/Projects.vue'

@Component({
  components: {
    Navigation,
    Home,
    About,
    Projects,
    Contact,
  }
})
export default class App extends Vue {}
</script>

<style lang="css">
#navbar {
  min-height: 4rem;
}
</style>

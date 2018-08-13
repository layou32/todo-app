<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/nav-bar/NavBar'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
h1 {
  font-family: 'Jua', sans-serif !important;
}
</style>

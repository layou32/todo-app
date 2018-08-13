<template>
  <div id="app">
    <nav-bar/>
    <side-bar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/nav-bar/NavBar'
import SideBar from '@/components/side-bar/SideBar'
export default {
  name: 'App',
  components: {
    NavBar,
    SideBar
  }
}
</script>

<style>
h1 {
  font-family: 'Jua', sans-serif !important;
}
</style>

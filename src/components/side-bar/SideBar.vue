<template>
  <div class="ui sidebar inverted vertical menu" :class="{visible: mostrarSideBar}">
    <a
    class="item"
    @click="toogleMenu">Close</a>
    <router-link
    class="item"
    v-for="(item, key) in menuSideBar"
    :key="key"
    :to="item.Link">
    {{item.Description}}
    </router-link>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import * as menu from '@/store/modules/menu/mutations-types'
export default {
  name: 'SideBar',
  computed: {
    ...mapGetters({
      mostrarSideBar: menu.STATUS_SIDEBAR,
      menuSideBar: menu.GET_MENU
    })
  },
  methods: {
    ...mapActions({
      cargarMenu: menu.GET_MENU,
      toogleMenu: menu.TOOGLE_MENU
    })
  },
  mounted () {
    this.cargarMenu()
  }
}
</script>

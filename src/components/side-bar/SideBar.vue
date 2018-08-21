<template>
  <div class="ui sidebar inverted vertical menu" :class="{visible: mostrarSideBar}">
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import * as menu from '@/store/modules/menu/mutations-types'
export default {
  name: 'SideBar',
  computed: {
    ...mapGetters({
      mostrarSideBar: menu.STATUS_SIDEBAR
    })
  }
}
</script>

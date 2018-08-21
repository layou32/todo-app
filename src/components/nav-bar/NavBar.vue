<template>
  <div class="ui icon menu" @click="toogleMenu">
    <a class="item">
      <i class="bars icon"></i>
    </a>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import * as menu from '@/store/modules/menu/mutations-types'
export default {
  name: 'NavBar',
  methods: {
    ...mapMutations({
      toogleMenu: menu.TOOGLE_MENU
    })
  }
}
</script>

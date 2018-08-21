import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu/menu'
import todo from './modules/todo/todo'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    menu: {
      ...menu
    },
    todo: {
      ...todo
    }
  }
})

export {store}

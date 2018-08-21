import * as menu from './mutations-types'

const state = {
  showSideBar: false
}
const mutations = {
  [menu.TOOGLE_MENU]: (state) => {
    state.showSideBar = !state.showSideBar
  }
}
const getters = {
  [menu.STATUS_SIDEBAR]: state => {
    return state.showSideBar
  }
}

export default {
  state,
  mutations,
  getters
}

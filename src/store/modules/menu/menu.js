import * as menu from './mutations-types'

const actions = {
  [menu.GET_MENU] ({commit}) {
    const menuOpt = [
      {
        Id: 1,
        Description: 'Listado Todo',
        Link: '/todos-list'
      }
    ]
    commit(menu.GET_MENU, menuOpt)
  },
  [menu.TOOGLE_MENU] ({commit}) {
    commit(menu.TOOGLE_MENU)
  }
}

const mutations = {
  [menu.TOOGLE_MENU] (state) {
    state.showSideBar = !state.showSideBar
  },
  [menu.GET_MENU] (state, menuOpt) {
    state.menu = menuOpt
  }
}

const getters = {
  [menu.STATUS_SIDEBAR] (state) {
    return state.showSideBar
  },
  [menu.GET_MENU] (state) {
    return state.menu
  }
}

const state = {
  showSideBar: false,
  menu: []
}

export default {
  state,
  mutations,
  getters,
  actions
}

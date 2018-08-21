import * as todo from './mutations-types'

const actions = {
  [todo.GET_TODOS]: ({ commit }) => {
    const todos = [
      {
        id: '1',
        name: 'Leche',
        description: 'Ir por leche'
      },
      {
        id: '2',
        name: 'Huevos',
        description: 'Comprar huevos'
      },
      {
        id: '3',
        name: 'Gasolina',
        description: 'Cargar gasolina'
      },
      {
        id: '4',
        name: 'Internet',
        description: 'Pagar el internet'
      },
      {
        id: '5',
        name: 'Deudas',
        description: 'Endeudarme mas'
      }
    ]
    commit(todo.GET_TODOS, todos)
  }
}
const mutations = {
  [todo.GET_TODOS]: (state, todos) => {
    state.todos = todos
  }
}
const getters = {
  [todo.GET_TODOS]: state => {
    return state.todos
  }
}
const state = {
  todos: []
}

export default {
  state,
  getters,
  mutations,
  actions
}

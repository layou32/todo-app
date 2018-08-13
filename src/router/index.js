import Vue from 'vue'
import Router from 'vue-router'
import {HomeRoutes} from '@/views/home/routes'
import {TodosRoutes} from '@/views/todos/routes'

Vue.use(Router)

let routes = [
  ...HomeRoutes,
  ...TodosRoutes
]

export default new Router({
  routes: routes
})

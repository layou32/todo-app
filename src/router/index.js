import Vue from 'vue'
import Router from 'vue-router'
import {HomeRoutes} from '../views/home/routes'

Vue.use(Router)

let routes = [
  ...HomeRoutes
]

export default new Router({
  routes: routes
})

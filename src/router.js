import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
  path: '/',
  component: () => import(/* webpackChunkName: "page-gravatar" */'./pages/gravatar')
}]

export default new Router({ routes })

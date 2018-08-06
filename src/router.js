import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
  path: '/',
  name: 'gravatar',
  component: () => import(/* webpackChunkName: "page-gravatar" */'./pages/gravatar')
}, {
  path: '/robohash',
  name: 'robohash',
  component: () => import(/* webpackChunkName: "page-robohash" */'./pages/robohash')
}, {
  path: '/dicebear',
  name: 'dicebear',
  component: () => import(/* webpackChunkName: "page-dicebear" */'./pages/dicebear')
}, {
  path: '/adorable',
  name: 'adorable',
  component: () => import(/* webpackChunkName: "page-adorable" */'./pages/adorable')
}, {
  path: '/about',
  name: 'about',
  component: () => import(/* webpackChunkName: "page-about" */'./pages/about')
}]

export default new Router({ routes })

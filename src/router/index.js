/**
 * Vue Router
 * https://router.vuejs.org
 */
import Vue from 'vue'
import Router from 'vue-router'

// Vue Meta
// https://github.com/declandewet/vue-meta
import VueMeta from 'vue-meta'

// Routes of the application
import routes from './routes'

Vue.use(Router)
Vue.use(VueMeta, { keyName: 'head' })

const router = new Router({
  routes,
  // Use the HTML5 history API instead of routes with hashes.
  mode: 'history',
  // Force the scroll position to the top for every route.
  // It simulates native-like scroll behavior when navigating to a new
  // route and using back/forward buttons.
  scrollBehavior: () => ({ x: 0, y: 0 })
})

export default router

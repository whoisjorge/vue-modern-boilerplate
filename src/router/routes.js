import Home from './views/Home.vue'
import About from './views/About.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  // to do? see:
  // https://alligator.io/vuejs/lazy-loading-vue-cli-3-webpack/
  // https://github.com/chrisvfritz/vue-enterprise-boilerplate/blob/b72ef0368c98c8ac950d842141f9a96efd86e8ba/src/router/routes.js
  {
    path: '/404',
    name: '404',
    component: require('@/router/views/404').default,
    // Allows props to be passed to the 404 page through route
    // params, such as `resource` to define what wasn't found.
    props: true
  },
  {
    // Redirect any unmatched routes to the 404 page. This may
    // require some server configuration to work in production:
    // https://router.vuejs.org/guide/essentials/history-mode.html#html5-history-mode
    path: '*',
    redirect: '404'
  }
]

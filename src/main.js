import Vue from 'vue'

import Application from './App.vue'
import I18n from './languages'
import store from './store'
import router from './router'
import plugins from './plugins'

import './registerServiceWorker'

// Vue.js configuration
Vue.config.productionTip = false

/**
 * The Vue Instance
 * https://vuejs.org/v2/guide/instance.html
 */
const createApp = new Vue({
  I18n,
  store,
  router,
  plugins,
  render: h => h(Application)
})

// Mount to `#application` element
createApp.$mount('#application')

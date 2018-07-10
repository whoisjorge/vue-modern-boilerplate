/**
 * VueI18n
 * https://kazupon.github.io/vue-i18n/
 */
import Vue from 'vue'
import I18n from 'vue-i18n'

Vue.use(I18n)

export default new I18n({
  locale: navigator.language,
  messages: {
    'en': require('./locale/en'),
    'es': require('./locale/es'),
    'val': require('./locale/val')
  }
})

<template lang="pug">
  #application
    Loader
    router-view(:key="$route.fullPath")
</template>

<script>
import app from '@/app.config'

import assetsLoader from 'assets-loader'
import Loader from './components/core/Loader'

import { mapGetters } from 'vuex'

export default {
  name: 'application',

  components: {
    Loader
  },

  data () {
    return {
      minTimer: false,
      progress: null
    }
  },

  computed: {
    ...mapGetters([
      'isLoaded'
    ])
  },

  beforeMount () {
    // Let it 5" before store commiting.
    var that = this
    setTimeout(function () {
      that.minTimer = true
      if (that.progress >= 0.95) {
        that.$store.commit('SET_LOADING', true)
      }
    }, 5000)
    /**
     * A simple batch assets loader.
     */
    // var loader = assetsLoader({
    //   assets: [
    //     // 'public/data.json',
    //     '/test/test.jpg'
    //   ]
    // })
    //   .on('error', function (error) {
    //     console.log(error)
    //   })
    //   .on('progress', function (progress) {
    //     that.progress = progress
    //     console.log((progress * 100).toFixed() + '%')
    //   })
    //   .on('complete', function (assets) {
    //     if (that.minTimer) {
    //       that.$store.commit('SET_LOADING', true)
    //     }
    //   })
    //   .start()
  },

  // mounted () {
  //   var loader = assetsLoader({
  //     assets: [
  //       '/test/test.jpg'
  //     ]
  //   })
  //   .on('error', function (error) {
  //     console.log(error)
  //   })
  //   .on('progress', function (progress) {
  //     // console.log((progress * 100).toFixed() + '%')
  //   })
  //   .on('complete', function (assets) {
  //   })
  //   .start()
  // },

  head() {
    return {
      htmlAttrs: {
        // lang: this.getCurrentLocaleISO
      },
      titleTemplate: '%s | ' + app.name,
      meta: [
        { property: 'og:url', content: process.env.VUE_APP_DOMAIN + this.$route.path }
      ],
      link: [
        { rel: 'home', href: process.env.VUE_APP_DOMAIN },
        { rel: 'canonical', href: process.env.VUE_APP_DOMAIN + this.$route.path }
      ]
    }
  }
}
</script>

<style lang="scss">
// @import '~bootstrap/dist/css/bootstrap.css';
@import '@/styles/main.scss';

html, body {
  height: 100%;
  width: 100vw;
  color: $color--black;
  background: $color--white;
}

#application {
  font-family: $font;
  text-align: center;
}

// https://helpx.adobe.com/typekit/using/font-events.html
html, .wf-loading {
  visibility: hidden !important;
  opacity: 0;
}
.wf-active, .wf-inactive {
  visibility: visible !important;
  opacity: 1;
  transition: opacity 0.5s;
}
</style>

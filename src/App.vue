<template lang="pug">
  #application
    transition(name='fade' mode='out-in')
      router-view(:key="$route.fullPath")
</template>

<script>
import app from '@/app.config'

export default {
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
        { rel: 'canonical', href: process.env.VUE_APP_DOMAIN + this.$route.path }
      ]
    }
  }
}
</script>

<style lang="scss">
// @import '~bootstrap/dist/css/bootstrap.css';
@import '@/assets/styles/main.scss';

html, body {
  height: 100%;
  width: 100vw;
  color: $color--black;
  background: $color--white;
}

#application {
  text-align: center;
  font-family: 'Overpass', sans-serif;
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

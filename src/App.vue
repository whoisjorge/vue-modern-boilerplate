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
      links: [
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
  height: 100%
}

#application {
  font-family: 'Overpass', sans-serif;
  font-size: 1.15rem;
  color: #2c3e50;
  text-align: center;
  padding: 8px;
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

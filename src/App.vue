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

#application {
  color: #2c3e50;
  text-align: center;
  padding: 8px;
}
</style>

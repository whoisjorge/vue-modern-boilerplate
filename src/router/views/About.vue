<template lang="pug">
  about-page
</template>

<script>
import app from '@/app.config'
import AboutPage from '@/components/pages/AboutPage'

export default {
  components: { AboutPage },
  head: {
    title: 'About',
    meta: [
      {
        property: 'og:title',
        content: 'About | ' + app.name
      },
      {
        property: 'og:description',
        content: ''
      }
    ]
  }
}
</script>

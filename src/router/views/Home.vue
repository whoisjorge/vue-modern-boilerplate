<template lang="pug">
  home-page
</template>

<script>
import app from '@/app.config'
import HomePage from '@/components/pages/HomePage'

export default {
  components: { HomePage },
  head: {
    title: app.title,
    titleTemplate: '',
    meta: [
      {
        property: 'og:title',
        content: 'Home | ' + app.name
      },
      {
        property: 'og:description',
        content: app.description
      }
    ]
  }
}
</script>

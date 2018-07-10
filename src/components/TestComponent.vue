<template lang="pug">
  div.TestComponent
    Navigation
    p.github.--is-hidden
      a(:href="this.repo")
        SvgGithub
</template>

<script>
import Navigation from '@/components/shared/Navigation'
import SvgGithub from '@/components/SVG/SvgGithub'

export default {
  components: { Navigation, SvgGithub },
  data: () => ({
    repo: 'https://github.com/whoisjorge/vue-modern-boilerplate'
  }),
  mounted () {
    setTimeout(() => {
      document.querySelector('.github').classList.add('--is-visible')
    }, 5000)
  }
}
</script>

<style lang="scss" scoped>
.TestComponent {
  .github {
    transition: opacity 1s;
  }
}
</style>

<template lang="pug">
  transition(v-on:leave="leave")
    #loader(v-show="!isLoaded")
      div.wrapper(ref="wrapper")
        img.gif(src="https://data.whicdn.com/images/97174608/original.gif" alt="Gif")
</template>

<script>
import { mapGetters } from 'vuex'
import { TweenLite, TimelineLite, Power3 } from 'gsap'

export default {
  name: 'Loader',

  computed: {
    ...mapGetters([
      'isLoaded'
    ])
  },

  methods: {
    leave: function (el, done) {
      var gif = el.querySelectorAll('img')

      var tl = new TimelineLite().add('goOut')
      tl.to(this.$refs.wrapper, 0.7, {
        y: '0%',
        ease: Power3.easeIn,
        delay: 1
      }, 'goOut')
      tl.to(gif, 0.7, {
        opacity: 0,
        ease: Power3.easeIn,
        delay: 1
      }, 'goOut')
      tl.to(el, 0.5, {
        opacity: 0,
        ease: Power3.linear,
        delay: 2
      }, 'goOut')
      tl.set(el, {
        opacity: 0,
        onComplete: done
      })
    }
  }
}
</script>

<style lang="sass" scoped>
  #loader
    background-color: #121639
    position: fixed
    left: 0
    top: 0
    width: 100%
    height: 100%
    text-align: center
    z-index: 9999
    overflow: hidden

    .wrapper
      display: flex
      justify-content: center
      align-items: center
      height: 100%

    .gif
      height: calc(411px / 3)
      width: calc(424px / 3)
      user-select: none

</style>

<template>
  <div class="home">
    <img src="@/assets/vuejs_logo.png" alt="logo">
    <h1>Vue Modern Boilerplate</h1>
    <p>
      For guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <TestComponent/>
  </div>
</template>

<script>
import TestComponent from '@/components/TestComponent.vue'

export default {
  components: {
    TestComponent
  }
}
</script>

<style lang="scss">
.home {
  margin-top: 60px;
  h1 {
    font-family: 'Inconsolata';
  }
  a {
    &:hover {
      text-decoration: none
    }
  }
}
</style>

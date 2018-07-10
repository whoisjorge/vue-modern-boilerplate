<template lang="pug">
  div#nav
    <router-link to="/about"><el-button round size="mini">About</el-button></router-link>
    <router-link to="/"><el-button round size="medium" disabled>Home Page</el-button></router-link>
    <router-link to="/404"><el-button round size="mini">404</el-button></router-link>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="scss">
#nav {
  padding: 20px 0;
  > * {
    margin: 0 10px;
  }
}
</style>

<template>
  <div>
    <h1>A 404 Error!</h1>
    <p><span v-if="resource"> {{ resource }} </span> wasn't found.</p>
    <router-link to="/">Keep me safe</router-link>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Ooops! An error ocurred...',
    titleTemplate: ''
  },
  props: {
    resource: {
      type: String,
      default: 'This page'
    }
  }
}
</script>

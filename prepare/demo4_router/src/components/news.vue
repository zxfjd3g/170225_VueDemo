<template>
  <ul>
    <li v-for="news in newsArr">{{news}}</li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        newsArr: ['news01', 'news02', 'news03']
      }
    }
  }
</script>

<style>

</style>

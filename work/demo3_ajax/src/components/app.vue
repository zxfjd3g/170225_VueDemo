<template>
  <div class="container">
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <search :set-search-name="setSearchName"></search>
    </section>
    <test-main :search-name="searchName"></test-main>
  </div>
</template>

<script>
  import search from './search.vue'
  import main from './main.vue'

  export default {
    data () {
      return {
        searchName: ''
      }
    },

    methods: {
      setSearchName (searchName) {
        this.searchName = searchName
      }
    },
    components: {
      search,
      'test-main': main
    }
  }
</script>

<style>

</style>
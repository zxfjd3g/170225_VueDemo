<template>
  <div>
    <input type="text" placeholder="enter the name you search" v-model="inputSearchName"/>
    <button @click="search">Search</button>
  </div>
</template>

<script>
  export default {
    props: ['setSearchName'],
    data () {
      return {
        inputSearchName: ''
      }
    },
    methods: {
      search () {
        var inputSearchName = this.inputSearchName.trim()
        if(!inputSearchName) {
          return
        }
        this.setSearchName(inputSearchName)
        this.inputSearchName = ''
      }
    }
  }
</script>

<style>

</style>
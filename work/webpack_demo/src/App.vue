<template>
  <div>
    <hello></hello>
    <img src="./assets/logo.png" alt="logo">
    <p>{{msg}}</p>
  </div>
</template>

<script>
  import Hello from './components/Hello.vue'
  export default {
    data () {
      return {
        msg: '前端工程师'
      }
    },
    components: {
      Hello
    }
  }

</script>

<style>
  img {
    width: 300px;
    height: 300px;
  }
  p {
    color: blue;
  }
</style>
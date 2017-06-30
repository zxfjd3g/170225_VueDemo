<template>
  <div>
    <ul>
      <li v-for="m in messages">
        <a href="###"></a>
        <router-link :to="`/home/message/mdetail/${m.id}`">{{m.name}}</router-link>
      </li>
    </ul>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        messages: []
      }
    },

    created () {
      // 模拟异步请求数据
      setTimeout(() => {
        this.messages = [
          {id:1, name: 'Message001'},
          {id:2, name: 'Message002'},
          {id:3, name: 'Message003'},
          {id:4, name: 'Message004'}
        ]
      }, 1000)
    }
  }
</script>

<style>

</style>
<template>
  <div>
    <ul>
      <li v-for="m in messages">
        <router-link :to="'/home/message/mdetail/'+m.id">{{m.title}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
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
      // 模拟异步获取数据
      setTimeout(() => {
        this.messages = [
          {id: 1, title: 'messsage01'},
          {id: 2, title: 'messsage02'},
          {id: 3, title: 'messsage03'},
          {id: 4, title: 'messsage04'}
        ]
      }, 500)
    }
  }
</script>

<style>

</style>

<template>
  <div>{{detail}}</div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        detail: ''
      }
    },

    methods: {
      getDetail (id) {
        setTimeout(() => {
          this.detail = `消息ID为${id}的详情为xxxxxxxxxxx`
        }, 500)
      }
    },

    created () {
      // 模拟异步获取详情数据
      this.getDetail(this.$route.params.id)
    },
    watch: {
      '$route' (to, from) {
        console.log('$route()', to)
        this.getDetail(to.params.id)
      }
    }
  }
</script>

<style>

</style>

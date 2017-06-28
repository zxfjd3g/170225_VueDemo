<template>
  <div>
    <h2 v-show="loading">
      loading....
    </h2>
    <div v-show="mostRepoName">
      <h3>most star repo is <a :href="repoUrl">{{mostRepoName}}</a></h3>
    </div>
  </div>
</template>

<script>
/*
1. 发送ajax请求
  * 使用vue-resource: https://github.com/pagekit/vue-resource
  * 使用axios: https://github.com/mzabriskie/axios
2. 测试接口
 * https://api.github.com/search/repositories?q=vue&s=stars (根据指定关键字查询github上的库, 并排序)
*/
  import axios from 'axios'

  export default {
    data () {
      return {
        query: 'vue',
        loading: false,
        mostRepoName: '',
        repoUrl: ''
      }
    },

    created () {
      this.loading = true
      const url = `https://api.github.com/search/repositories?q=${this.query}&s=stars`
      axios.get(url)
        .then((response) => {
          console.log('axios', response)
          this.loading = false
          var mostRepo = response.data.items[0]
          this.mostRepoName = mostRepo.name
          this.repoUrl = mostRepo.html_url
        })
      this.$http.get(url)
        .then((response) => {
          console.log('$http', response)
          this.loading = false
          var mostRepo = response.body.items[0]
          this.mostRepoName = mostRepo.name
          this.repoUrl = mostRepo.html_url
        })
    }
  }
</script>

<style>
</style>

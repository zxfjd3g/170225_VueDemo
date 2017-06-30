<template>
  <div>
    <h2 v-show="!repoUrl">loading....</h2>
    <h3 v-show="repoUrl">
      The most stars repo is
      <a :href="repoUrl">{{repoName}}</a>
    </h3>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        queryName: 'vue',
        repoUrl: '',
        repoName: ''
      }
    },

    created () {
      // 使用vue-resource发送ajax请求
      var url = `https://api.github.com/search/repositories?q=${this.queryName}&s=stars`
      /*this.$http.get(url)
        .then(
          response => {
            var result = response.body
            console.log(result)

            var repo = result.items[0]
            this.repoName = repo.name
            this.repoUrl = repo.html_url
          },
          response => {
            console.log('请求失败了')
          }
        )*/

      // 使用axios发送ajax请求
      axios.get(url)
        .then(
          response => {
            var result = response.data
            console.log(result)

            var repo = result.items[0]
            this.repoName = repo.name
            this.repoUrl = repo.html_url
          },
          response => {
            console.log('请求失败了2')
          }
        )
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

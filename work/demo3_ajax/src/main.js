import Vue from 'vue'
import VueResource from 'vue-resource'
// import App from './App.vue'
import app from './components/app.vue'

// 声明使用vue插件
Vue.use(VueResource)

new Vue({
  el: '#test',
  render: h => h(app)
})

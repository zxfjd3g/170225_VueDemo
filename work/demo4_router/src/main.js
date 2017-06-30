import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import about from './components/about'
import home from './components/home'
import news from './components/news'
import message from './components/message'
import messageDetail from './components/messageDetail'

Vue.use(VueRouter)

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {path: '/', component: about},
    {path: '/about', component: about},
    {
      path: '/home',
      component: home,
      children: [
        {
          path: 'news',
          component: news
        },
        {
          path: 'message',
          component: message,
          children: [
            {
              path: 'mdetail/:id',  //mdetail/4
              component: messageDetail
            }
          ]
        }
      ]
    }
  ]
})

new Vue({
  el: '#test',
  render: h => h(App),
  router
})


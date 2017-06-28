/**
 * 路由器模块: 注册配置路由
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
import about from '../components/about.vue'
import news from '../components/news.vue'
import message from '../components/message.vue'
import messageDetail from '../components/message-detail.vue'
// 声明使用插件
Vue.use(VueRouter)
// 导出router对象
export default new VueRouter({
  linkActiveClass: 'active', // 指定选中的路由链接的class
  mode: 'history',  // 路由路径不带#
  routes: [
    {
      path: '/',
      redirect: '/about'
    },
    {
      path: '/about',
      component: about
    },
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
              path: 'mdetail/:id',
              component: messageDetail
            }
          ]
        }
      ]
    }
  ]
})

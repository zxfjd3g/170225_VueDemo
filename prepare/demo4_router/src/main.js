import Vue from 'vue'
import router from './router'
import app from './components/app.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(app)
})

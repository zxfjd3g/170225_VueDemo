<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Router Basic - 01</h2>
        </div>
      </div>
    </div>
    <div class="row">

      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--使用指令<router-link>进行导航-->
          <router-link class="list-group-item" to="/about">About</router-link>
          <router-link class="list-group-item" to="/home">Home</router-link>
        </div>
      </div>

      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!--缓存被切换的路由组件-->
            <keep-alive>
              <!--用于渲染当前的路由组件-->
              <router-view :prop-name="name"></router-view>
            </keep-alive>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: 'atguigu'
      }
    }
  }
</script>

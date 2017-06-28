<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header :add-todo="addTodo"></todo-header>
      <todo-main :todos="todos" :delete-todo="deleteTodo"></todo-main>
      <todo-footer :todos="todos" @updateTodos="updateTodos"
           @delete-done="deleteDone"></todo-footer>
    </div>
  </div>
</template>

<script>
  import todoHeader from './todoHeader.vue'
  import todoMain from './todoMain.vue'
  import todoFooter from './todoFooter.vue'
  import storageUtil from '../util/storageUtil'

  export default {
    data () {
      return {
        todos: []
      }
    },
    created () {
      // 模拟异步读取数据
      // this.todos = [{isDone: false, title: '吃饭'}, {isDone: true, title: '睡觉'}]
      this.todos = storageUtil.fetch()
    },

    methods: {
      // 添加todo
      addTodo (todo) {
        this.todos.unshift(todo)
      },
      // 删除指定todo
      deleteTodo (todo) {
        var index = this.todos.indexOf(todo)
        this.todos.splice(index, 1)
      },
      // 删除所有完成的todo
      deleteDone () {
        this.todos = this.todos.filter(todo => !todo.isDone)
      },
      // 将所有todo设置为指定状态
      updateTodos (isDone) {
        this.todos.forEach(todo => {
          todo.isDone = isDone
        })
      }
    },

    watch: {
      todos: {// 深度监视todos, 一旦有变化立即保存
        handler: storageUtil.save,
        deep: true
      }
    },

    components: {
      todoHeader,
      todoMain,
      todoFooter
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>

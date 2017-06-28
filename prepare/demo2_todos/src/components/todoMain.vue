<template>
  <ul class="todo-main">
    <todo-item v-for="(todo, index) in todos" :todo="todo"
               :delete-todo="deleteTodo" :key="index"></todo-item>
  </ul>
</template>

<script type="text/ecmascript-6">
  import todoItem from './todoItem'
  export default {
    props: ['todos', 'deleteTodo'],
    components: {
      todoItem
    }
  }
</script>

<style>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>

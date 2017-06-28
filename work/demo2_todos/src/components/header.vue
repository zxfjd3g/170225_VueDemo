<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认"
           v-model="inputTodo" @keyup.enter="addTodo"/>
  </div>
</template>

<script>
  export default {
    props: {
      add: {
        type: Function,  // 属性值的类型
        required: true // 属性是否是必须的
      }
    },
    data () {
      return {
        inputTodo: ''
      }
    },
    methods: {
      addTodo () {

        // 检查
        var inputTodo = this.inputTodo.trim()
        if(!inputTodo) {
          this.inputTodo = ''
          return
        }
        // 读取输入, 创建一个todo
        var todo = {
          name: inputTodo,
          complete: false
        }
        // 将todo添加到todos
        this.add(todo)
        // 清除输入
        this.inputTodo = ''
      }
    }
  }
</script>

<style>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
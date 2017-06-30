<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="allComplete"/>
    </label>
    <span>
      <span>已完成222{{completeSize}}</span> / 全部{{todos.length}}
    </span>
    <button class="btn btn-danger" v-show="completeSize>0" @click="removeSelect">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    props: ['todos', 'removeSelected'],

    computed: {
      completeSize () {
/*
        var total = 0
        for (var i = 0; i < todos.length; i++) {
          var todo = todos[i]
          total += todo.complete ? 1 : 0
        }
*/

        // return this.todos.filter(todo => todo.complete).length
        return this.todos.reduce((preTotal, todo) => {
          return preTotal + (todo.complete ? 1 : 0) // 最后遍历的元素返回的结果就是reduce()的返回值
        }, 0) // 初始值0
      },

      allComplete: {
        get () {
          return this.completeSize===this.todos.length && this.completeSize!=0
        },
        set (value) {
          // 更新todos
          //this.selelectAllTodos(value)
          // 触发自定义事件
          this.$emit('selelectAllTodos', value)
        }
      }
    },

    methods: {
      removeSelect () {
        this.$emit('xxx')
      }
    }
  }
</script>

<style>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
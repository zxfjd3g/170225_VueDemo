/**
 * localStorage数据存储工具模块
 * 函数模块: 只提供一个功能
 * 对象模块: 提供多个功能
 */
const TODOS_KEY = 'todos_key'
export default {
  readTodos () {// 如果没有数据, 返回[]
    return JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')
  },

  saveTodos (todos) { // 先将todos转换为json再保存
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  }
}

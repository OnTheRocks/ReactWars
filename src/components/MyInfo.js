// import React from 'react';
import ToDoItem from '../ToDoItem';
import todosData from "../todosData"

// function MyInfo() {

//     const todoItems = todosData.map(item => <ToDoItem key={item.id} item={item}/>)
//   return (
//     <div className="todo-list">
//       {todoItems}
//     </div>
//   )
// }

// export default MyInfo


import React, { Component } from 'react'

export default class MyInfo extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
  }
}
  render() {
    const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item}/>)
    return (
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }
}

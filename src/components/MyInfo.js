
import ToDoItem from '../ToDoItem';
import todosData from "../todosData"


import React, { Component } from 'react'

export default class MyInfo extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
  }
  this.handleChange = this.handleChange.bind(this)
}

handleChange(id) {
  console.log("Changed", id)
}


  render() {
    const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} 
    handleChange={this.handleChange}/>)

    return (
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }
}

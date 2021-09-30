import React from 'react';
import ToDoItem from '../ToDoItem';
import todosData from "../todosData"

function MyInfo() {

    const todoItems = todosData.map(item => <ToDoItem key={item.id} item={item}/>)
  return (
    <div className="todo-list">
      {todoItems}
    </div>
  )
}

export default MyInfo
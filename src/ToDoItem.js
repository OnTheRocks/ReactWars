import React from "react";

const handleChange = () => {console.log("You CHANGED me!")}

const ToDoItem = (props) => {
  return(
  <div className="todo-item">
      <input type="checkbox"  checked={props.item.completed} onChange={handleChange}/>
      <p>{props.item.text}</p>
  </div>
)}

export default ToDoItem;
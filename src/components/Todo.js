import React from "react";
// - `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.

const Todo = (props) => {
  return (
    <div
      onClick={() => props.toggleCompleted(props.todo.id)}
      className={`todo${props.todo.completed ? " completed" : ""}`}
    >
      {props.todo.task}
    </div>
  )
}

export default Todo;
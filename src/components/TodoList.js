import React from "react";
import Todo from "./Todo"
// - `<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.


//Q: better to use props here bc we'll be pulling unknown (to me) superpowers (properties) from the class component React.Component?
const TodoList = (props) => {

  return (
    <div>
      Hola from the TodoList
      {props.todoItems.map((item) => (
        <Todo
          key={item.id}
          todo={item}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
    </div>
  )
}

export default TodoList;
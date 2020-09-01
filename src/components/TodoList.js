import React from "react";
import Todo from "./Todo"
import SearchField, {onChange} from "react-search-field"
// - `<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.


//Q: better to use props here bc we'll be pulling unknown (to me) superpowers (properties) from the class component React.Component?
const TodoList = (props) => {

  return (
    <div>
      {/* <SearchField /> */}
      {/* BROKEN: TypeError: Cannot read property 'state' of undefined */}
      <input type="text" value={props.this.state.searchTerm} onChange={this.editSearchTerm} placeholder="search here" />
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
import React from "react";
import Todo from "./Todo"
import SearchField from "react-search-field"
// - `<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.


//Q: better to use props here bc we'll be pulling unknown (to me) superpowers (properties) from the class component React.Component?
const TodoList = ({searchTerm, editSearchTerm, todoItems, toggleCompleted}) => {

  return (
    <div>
      <SearchField type="text" value={searchTerm} onChange={editSearchTerm} placeholder="search here" />
      {/* trying to use these instructions: https://levelup.gitconnected.com/building-a-simple-dynamic-search-bar-in-react-js-f1659d64dfae */}

      {/* <input type="text" value={searchTerm} onChange={(e) => editSearchTerm(e.target.value)} placeholder="search here" /> */}
      {todoItems.map((item) => (
        <Todo
          key={item.id}
          todo={item}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </div>
  )
}

export default TodoList;
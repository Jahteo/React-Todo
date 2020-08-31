import React from 'react';
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"

import "./components/Todo.css"
  // - `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
  // - All of your application data will be stored here on `<App />`.
  // - All of your `handler` functions should live here on `<App />`.

const todoItems = [
  {
    task: "Click here to un/cross out",
    id:26897345,
    completed: false,
  },
  {
    task: "Add a new item below",
    id: 1290384,
    completed: false
  },
  {
    task: "Remove all completed (crossed out) items",
    id: 98732454,
    completed: true
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoItems,
      //Q: why is this kept here? it isn't a slice of state we're tracking, is it? Does this enable the rerendering when it changes???
      toggleCompleted: () => {},
      removeCompleted: () => {},
    };
  }

  toggleCompleted = (clickedItemId) => {
    this.setState({
      todoItems: this.state.todoItems.map((item) => {
        if(item.id === clickedItemId) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  };


  addTodo = (todoName) => {
    const newTodo = {
      task: todoName,
      id: new Date(),
      completed: false
    };
    this.setState({
      todoItems: [...this.state.todoItems, newTodo]
    });
  };

  removeCompleted = () => {
    const newTodoItems = (
      this.state.todoItems.filter(todo =>
        (todo.completed === false)
      )
    )
    this.setState({todoItems: newTodoItems})
  }

  render() {
    return (
      <div className="App">
        <h1>Not Quite Todoist</h1>
        <h2>Welcome to your new fav Todo App!</h2>
        <TodoList
          todoItems={this.state.todoItems}
          toggleCompleted={this.toggleCompleted}
        />
        <TodoForm
          addTodo={this.addTodo}
          removeCompleted={this.removeCompleted}
        />
      </div>
    );
  }
}

export default App;
import React from 'react';
import TodoList from "./components/TodoList"

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
    completed: false
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
    // toggleCompleted: () => {},
    // removeCompleted: () => {},
  };
}

// toggleCompleted = () => {};

//addItem= () => {};


  render() {
    return (
      <div className="App">
        <h1>Not Quite Todoist</h1>
        <h2>Welcome to your new fav Todo App!</h2>
        <TodoList todoItems={this.state.todoItems} />
      </div>
    );
  }
}

export default App;

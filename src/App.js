import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { Jumbotron, Container } from "reactstrap";
import SearchField from "react-search-field"

// - `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
// - All of your application data will be stored here on `<App />`.
// - All of your `handler` functions should live here on `<App />`.

const todoItems = [//note this is only here bc I don't have a server that I'm pulling it from. It's global data, & I'm still learning.
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
      //Yetti says These are definitely weird here & I didn't need them.
      // toggleCompleted: () => {},
      // removeCompleted: () => {},
      searchTerm: "",
    };
  }

  // Search attempt
  editSearchTerm = (value) => {
    this.setState({searchTerm: value})
  }
  dynamicSearch = () => {
    const { todoItems, searchTerm } = this.state;
    return todoItems.filter(todo => todo.task.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  toggleCompleted = (clickedItemId) => {
    const { todoItems } = this.state;
    this.setState({
      todoItems: todoItems.map((item) => {
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
    const { todoItems } = this.state;
    const newTodo = {
      task: todoName,
      id: new Date(),
      completed: false
    };
    this.setState({
      todoItems: [...todoItems, newTodo]
    });
  };

  removeCompleted = () => {
    const { todoItems } = this.state;
    const newTodoItems = (
      todoItems.filter(todo =>
        (todo.completed === false)
      )
    )
    this.setState({todoItems: newTodoItems})
  }

  render() {
    // bonus destructuring state EVERYWHERE:
    const { searchTerm } = this.state;

    return (
      <div className="App">
        <Jumbotron fluid>
          <Container fluid>
          <h1>Not Quite Todoist</h1>
          <p>Welcome to your new fav Todo App!</p>
          </Container>
        </Jumbotron>

        <SearchField
          type="text"
          value={searchTerm}
          onChange={this.editSearchTerm}
          placeholder="search here"
        />
        {/* <input type="text" value={searchTerm} onChange={(e) => this.editSearchTerm(e.target.value)} placeholder="search here" /> */}
        <TodoList
          // todoItems={this.state.todoItems}//now destructured. SOOOO much easier to read & comprehend.
          todoItems={this.dynamicSearch()}
          toggleCompleted={this.toggleCompleted}
        />
        <TodoForm
          addTodo={this.addTodo}
          removeCompleted={this.removeCompleted}
        />

        <p>test</p>
      </div>
    );
  }
}

export default App;
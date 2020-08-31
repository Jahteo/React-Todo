import React from "react";
// - `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
// - Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
// - Once a todo is submitted, the Todo List should re-render and show the added todo.




class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      todo: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    console.log("submit")
  };

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="todo"
            value={this.state.todo}
            placeholder="Next step in saving the world here"
            onChange={this.handleChange}
          />
          <button
            type="submit"
          >Add Todo</button>
          <button
            // onClick={clearCompleted}
          >Clear Completed</button>
        </form>
    );
  }
};

export default TodoForm;
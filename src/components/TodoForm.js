import React from "react";
import { Card, CardBody, Button, Form, FormGroup, Input, CardTitle, CardDeck } from "reactstrap";
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
    this.setState({
      todo: ""
    })
    this.props.addTodo(this.state.todo);
  };

  render() {
    return (
      <CardDeck>
      {/* Q: How did I break the Card width already??? tried adding  */}
      <Card sm="6">
        {/* <CardTitle>CardTitle</CardTitle> */}
        <CardBody inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <Form onSubmit={this.handleSubmit}>
          {/* <FormGroup> */}
          <Input
            type="text"
            name="todo"
            value={this.state.todo}
            placeholder="Next step in saving the world here"
            onChange={this.handleChange}
          />
          <Button type="submit">Add Todo</Button>
          <Button color="danger"
            onClick={this.props.removeCompleted}
          >Clear Completed</Button>
          {/* </FormGroup> */}
        </Form>
        </CardBody>
      </Card>
      <Card>Why are these Cards full-screen width????</Card>
      </CardDeck>

    );
  }
};

export default TodoForm;
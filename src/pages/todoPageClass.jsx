import React from "react";
import TodoItemClass from "../components/TodoItemClass";

class todoPageClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: Array(props.counts).fill(0) };
  }

  componentWillReceiveProps(props) {
    console.log(props);
    this.setState({
      todos: Array(props.counts).fill(0),
    });
  }

  render() {
    return (
      <div>
        <h1>Todo Classes. Counts{this.props.counts}</h1>
        <ul>
          {this.state.todos.map((item, index) => (
            <TodoItemClass item={item} key={index} index={index} />
          ))}
        </ul>
      </div>
    );
  }
}

export default todoPageClass;

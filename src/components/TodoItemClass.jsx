import React from 'react'

class TodoItemClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: Math.random()
    }
  }
  render(){
    return <li>{this.props.index}: Todo class {+this.state.value}</li>
  }
}

export default TodoItemClass
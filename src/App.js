import React, { Component } from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList.js'
// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Clean Kitchen',
          id: 1877877,
          completed: false
        },
        {
          task: 'Sweep Floors',
          id: 8675309,
          completed: false
        }
      ],
      todo: ''
    };
  }

  addTodo = e => {
    e.preventDefault();
    const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
    this.setState({ 
      todos: [...this.state.todos, newTodo], 
      todo: '' 
    });
  };
  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  toggleComplete = (e, id) => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => { 
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
      
    });
    this.setState({ todos })
  }

  clearTodos = e => {
    e.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  render() {
    return (
      <div>
        <h1>My Todo List</h1>
        <TodoList
          toggleComplete={this.toggleComplete}
          todos={this.state.todos}
        />
        <TodoForm
          value={this.state.todo}
          addTodo={this.addTodo}
          handleChange={this.handleChange}
          clearTodos={this.clearTodos}
        />
      </div>
    );
  }
}

export default App;

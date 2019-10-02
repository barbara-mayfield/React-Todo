import React, { Component } from 'react';
import { render } from 'react-dom';

import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList.js'
import Todo from './components/TodoComponents/Todo'
// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

class App extends Component {
  constructor() {
    super();
    this.state = { 
      tasks: [
      {
        task: 'Eat Tacos',
        id: 793, 
        completed: false
      },
      {
        task: 'Do Laundry',
        id: 421,
        completed: false
      }
    ],
    task: ''
    }
  };

  addTask = e => {
    e.preventDefault();
    const newTask = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    }

    this.setState({
      tasks: [...this.state.tasks, newTask],
      task: ""
    })
  }
  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        
        <h1>To-Do List</h1>
        <TodoList />

        <TodoForm 
            task={this.state.task}
            addTask={this.addTask} 
            handleChange={this.handleChange}
        />
      </div>
    );
  };
};

export default App;

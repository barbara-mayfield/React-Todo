import React from 'react';
import { Button } from 'reactstrap';
import '../TodoComponents/Todo.css'

const TodoForm = props => {  
    console.log(props, 'props passed to TodoForm')
      return (
        <form>
          <input
            className="enter-task"
            type="text"
            name="todo"
            placeholder="Enter Task"
            value={props.value}
            onChange={props.handleChange}
          />
          <Button
            className="add-task" 
            color="danger" 
            type="submit" 
            onClick={props.addTodo}>
            Add Task
          </Button>{' '}
          <Button 
            className="btn" 
            color="secondary"
            onClick={props.clearTodos}>
            Clear
            </Button>{' '}
        </form>
      );
    };
  
  export default TodoForm;
  
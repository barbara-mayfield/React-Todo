import React from 'react';
import { Button } from 'reactstrap';

const TodoForm = props => {  
    console.log(props, 'props passed to TodoForm')
      return (
        <form>
          <input
            type="text"
            name="todo"
            placeholder="Enter Task"
            value={props.value}
            onChange={props.handleChange}
          />
          <Button outline 
            color="primary" 
            type="submit" 
            className="submit-btn btn" 
            onClick={props.addTodo}>
            Add Task
          </Button>
          <Button outline 
            color="secondary"
            className="clear-btn btn" 
            onClick={props.clearTodos}>
            Clear
            </Button>
        </form>
      );
    };
  
  export default TodoForm;
  
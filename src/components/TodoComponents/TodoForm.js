import React from 'react';

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
          <button type="submit" className="submit-btn btn" onClick={props.addTodo}>
            Add Task
          </button>
          <button className="clear-btn btn" onClick={props.clearTodos}>Clear</button>
        </form>
      );
    };
  
  export default TodoForm;
  
import React, { Component } from 'react';

const TodoForm = props => {  
      return (
        <form>
          <input
            type="text"
            placeholder="Enter Task"
            onChange={props.handleChange}
          />
          <button type="submit" className="submit-btn btn" onClick={props.addTask}>
            Add Task
          </button>
          <button className="clear-btn btn">Clear</button>
        </form>
      );
    };
  
  export default TodoForm;
  
import React from "react";
import { useState } from "react";

const TodoLayout = ({ addTodo }) => {
  const [taskValue, setTaskValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(taskValue);
    setTaskValue("");
  };

  return (
    <div className="Inputwrapper">
      <div className="todoTitle">
      <h1 >Create Todo List</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskValue}
          placeholder="Enter a task"
          onChange={(e) => setTaskValue(e.target.value)}
          required
        />
        <button  className="addButton"type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoLayout;

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
    <div className="wrapper">
      <h1>Create Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskValue}
          placeholder="Write your todo task"
          onChange={(e) => setTaskValue(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoLayout;

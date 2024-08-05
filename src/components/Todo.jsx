import React from "react";

const Todo = ({ task, deleteButton, editingTodo, handleToggle }) => {
  const checkBoxToggle = () => {
    handleToggle(task.id);
  };
  return (
    <li className="todoWrapper">
      <input
        type="checkbox"
        onChange={checkBoxToggle}
        checked={task.completed}
      />
      <span style={task.completed ? { textDecoration: "line-through" } : {}}>
        {task.description}
      </span>

      <button onClick={() => editingTodo(task.id)}>Edit</button>
      <button
        onClick={() => deleteButton(task.id, task.completed)}
        disabled={!task.completed}
      >
        Delete
      </button>
    </li>
  );
};

export default Todo;

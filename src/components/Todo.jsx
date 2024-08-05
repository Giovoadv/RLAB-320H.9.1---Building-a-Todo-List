import React from "react";

const Todo = ({ task, deleteButton, editingTodo, handleToggle }) => {
  const checkBoxToggle = () => {
    handleToggle(task.id);
  };
  return (
    <div className="todoRow">
      <input
        type="checkbox"
        onChange={checkBoxToggle}
        checked={task.completed}
      />
      <span className="todoDescription" style={task.completed ? { textDecoration: "line-through" } : {}}>
        {task.description}
      </span>
      <div>
        <button onClick={() => editingTodo(task.id)}>Edit</button>
        <button
          onClick={() => deleteButton(task.id, task.completed)}
          disabled={!task.completed}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;

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
      <div
        className="todoDescription"
        style={task.completed ? { textDecoration: "line-through" } : {}}
      >
        <span className="task">{task.description}</span>
      </div>
      <div>
        <button className="editButton" onClick={() => editingTodo(task.id)}>
          Edit
        </button>
        <button
          className="deleteButton"
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

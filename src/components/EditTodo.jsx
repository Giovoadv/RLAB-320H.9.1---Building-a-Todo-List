import React from "react";
import { useState, useReducer } from "react";

const EditTodo = ({ task, saveEdit, cancelEdit }) => {
  const initialState = { taskValue: task.description };

  const reducer = (state, action) => {
    switch (action.type) {
      case "tasksValue":
        return { ...state, taskValue: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { taskValue } = state;

  const handleSubmit = (e) => {
    e.preventDefault();

    saveEdit(task.id, taskValue);
  };

  const handleCancel = () => {
    cancelEdit(task.id, taskValue);
  };

  return (
    <div className="todoRow">
      <form className="editForm">
        <input
          type="text"
          value={taskValue}
          placeholder="Write your todo task"
          onChange={(e) =>
            dispatch({ type: "tasksValue", payload: e.target.value })
          }
        />
      </form>
      <button onClick={handleSubmit}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default EditTodo;

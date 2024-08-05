import { useState } from "react";
import TodoLayout from "./TodoLayout";
import { nanoid } from "nanoid";
import Todo from "./Todo";
import EditTodo from "./EditTodo";

const initialTodos = [
  { id: nanoid(), description: "Passports", completed: true, isEditing: false },
  { id: nanoid(), description: "Socks", completed: false, isEditing: false },
  { id: nanoid(), description: "pizza", completed: false, isEditing: false },
  { id: nanoid(), description: "cola", completed: true, isEditing: false },
];

const List = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [editing, setEditing] = useState(null);
  console.log(initialTodos);

  const addTodo = (todo) => {
    if (todo.trim().length === 0) {
      alert("Enter a task, not just empty spaces..");
    } else {
      return setTodos([
        { id: nanoid(), description: todo, completed: false, isEditing: false },
        ...todos,
      ]);
    }
  };

  const handleDelete = (id) => {
    setTodos((todos) => todos.filter((item) => item.id !== id));
  };

  const saveEdit = (id, description) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isEditing: !todo.isEditing, description: description }
          : todo
      )
    );
  };
  const cancelEdit = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editingTodo = (id) => {
    setEditing(id);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: true } : todo
      )
    );
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  return (
    <div className="todoLayoutWrapper">
      <TodoLayout addTodo={addTodo} />
      <div className="todosWrapper">
        {todos.map((todo) =>
          todo.isEditing ? (
            <EditTodo
              key={todo.id}
              task={todo}
              saveEdit={saveEdit}
              cancelEdit={cancelEdit}
            />
          ) : (
            <Todo
              task={todo}
              key={todo.id}
              deleteButton={handleDelete}
              editingTodo={editingTodo}
              handleToggle={handleToggle}
            />
          )
        )}
      </div>
    </div>
  );
};

export default List;

import React from "react";

const TodoList = ({ todos = [] }) => {
  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input type="checkbox" value={todo.isCompleted} />
          <span>{todo.value}</span>
        </li>
      ))}
    </div>
  );
};

export default TodoList;

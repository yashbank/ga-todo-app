import React from "react";

const TodoList = ({ todos = [] }) => {
  return (
    <div>
      {todos.map((todo, i) => (
        <div key={i}>{todo}</div>
      ))}
    </div>
  );
};

export default TodoList;

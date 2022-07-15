import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    setTodos([...todos, value]);
    setValue("");
  };

  return (
    <div>
      <h3>TodoApp</h3>
      <TodoInput
        value={value}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoApp;

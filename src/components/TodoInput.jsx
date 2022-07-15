import React from "react";

const TodoInput = ({ value, handleChange, handleSubmit }) => {
  const submit = (e) => {
    e.preventDefault();
    handleSubmit();
  };
  return (
    <form onSubmit={submit}>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoInput;

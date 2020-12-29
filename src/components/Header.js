import { memo } from "react";

function Header({ addTodo, handleSubmit, todoInput }) {
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={(e) => addTodo(e.target.value)}
          value={todoInput}
        />
      </form>
    </header>
  );
}

export default memo(Header);

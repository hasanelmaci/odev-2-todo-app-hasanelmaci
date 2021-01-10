import { memo } from "react";

function TodoFooter({ setFilter, todoLen, setClear }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todoLen}</strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a href="#" className="selected" onClick={() => setFilter("All")}>
            All
          </a>
        </li>
        <li>
          <a href = "#" onClick={() => setFilter("Active")}>Active</a>
        </li>
        <li>
          <a href="#" onClick={() => setFilter("Completed")}>Completed</a>
        </li>
      </ul>

      <button
        className="clear-completed"
        onClick={() => setClear((prevState) => !prevState)}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default memo(TodoFooter);

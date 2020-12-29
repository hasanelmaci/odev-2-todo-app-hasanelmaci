import { memo } from "react";

function Todo({ handleRemoveItem, i, handleCheck }) {
  return (
    <li className={i.completed === true ? "completed" : null}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={i.completed}
          readOnly
          onClick={() => handleCheck(i)}
        />
        <label>{i.name}</label>
        <button
          className="destroy"
          onClick={() => handleRemoveItem(i.name)}
        ></button>
      </div>
    </li>
  );
}

export default memo(Todo);

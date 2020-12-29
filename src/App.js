import { useState, useEffect } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import TodoFooter from "./components/TodoFooter";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [addedTodo, setAddedTodo] = useState("");
  const [filter, setFilter] = useState("All");
  const [todoLen, setTodoLen] = useState(0);
  const [clear, setClear] = useState(false);

  const handleSubmit = (e) => {
    setTodoInput("");
    e.preventDefault();
    setAddedTodo(todoInput);
  };

  useEffect(() => {
    setTodoInput("");
  }, [addedTodo]);

  return (
    <div className="todoapp">
      <Header
        addTodo={setTodoInput}
        handleSubmit={handleSubmit}
        todoInput={todoInput}
      />
      <Todos
        addedTodo={addedTodo}
        filter={filter}
        setTodoLen={setTodoLen}
        clear={clear}
      />
      <TodoFooter setFilter={setFilter} todoLen={todoLen} setClear={setClear} />
    </div>
  );
}

export default App;

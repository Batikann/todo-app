import "./App.css";
import Form from "./components/Form";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import sun from "./images/icon-sun.svg";
import moon from "../src/images/icon-moon.svg";
import { useState, useEffect } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filterTodos, setFilteredTodos] = useState([]);
  const [theme, setTheme] = useState("true");

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  const filterHandler = () => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted == true));
        break;
      case "Active":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted == false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") == null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <div className={`body ${theme ? "body-dark" : "body-light"}`}>
      <div className="header-container">
        <div className="header">
          <h1>TODO</h1>
          <button onClick={changeTheme} className="icon">
            <img src={theme ? sun : moon} />
          </button>
        </div>
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          theme={theme}
        ></Form>
        <TodoList
          todos={todos}
          setTodos={setTodos}
          setStatus={setStatus}
          filterTodos={filterTodos}
          status={status}
          theme={theme}
        ></TodoList>
      </div>
    </div>
  );
}

export default App;

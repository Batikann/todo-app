import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";
import Header from "./components/Header";

function App() {
  const theme = useSelector((state) => state.todos.theme);
  return (
    <div className={`body ${theme ? "body-dark" : "body-light"}`}>
      <div className="header-container">
        <Header />
        <Form></Form>
        <TodoList></TodoList>
      </div>
    </div>
  );
}

export default App;

import "../style/Form.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo } from "../redux/todos/todosSlice";
const Form = () => {
  const [todoText, setTodoText] = useState("");

  //Redux Store da ki themeyi getirip ona göre light veya dark mod temasını ayarlıyoruz.
  const theme = useSelector((state) => state.todos.theme);

  //Yeni eleman eklememizi sağlayan fonksiyon elemanı alıp redux store'a yolluyor
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (todoText) {
      dispatch(addTodo({ todoText }));
      setTodoText("");
    }
  };

  const dispatch = useDispatch();
  return (
    <div
      className={`form-container ${
        theme ? "form-container-dark" : "form-container-light"
      }`}
    >
      <p className="circle"></p>
      <form onSubmit={submitTodoHandler}>
        <input
          onChange={(e) => setTodoText(e.target.value)}
          value={todoText}
          className={theme ? "dark-input" : "light-input"}
        />
      </form>
    </div>
  );
};

export default Form;

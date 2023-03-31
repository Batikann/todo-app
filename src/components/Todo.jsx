import React, { useEffect } from "react";
import cross from "../images/icon-cross.svg";
import check from "../images/icon-check.svg";
import "../style/Todo.css";

import { useSelector } from "react-redux";

function Todo({ todoText, setTodos, todos, todo, theme }) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id != todo.id));
  };

  const checkTheme = () => {
    if (todo.isCompleted === true && theme === true) {
      return "completed-dark";
    }
    if (todo.isCompleted == true && theme === false) {
      return "completed-light";
    }
    return "";
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            isCompleted: !item.isCompleted,
          };
        }
        return item;
      })
    );
  };

  return (
    <>
      {/* {f.map((todo) => {
        <div
          className={`todo ${theme ? "todo-dark" : "todo-light"}`}
          key={todo.id}
        >
          <p
            className={`circle ${todo.isCompleted ? "completed" : ""}`}
            onClick={completeHandler}
          >
            <img
              className={`${todo.isCompleted ? "active" : ""}`}
              src={check}
            ></img>
          </p>
          <p className={`todo-text ${checkTheme()} `}>{todo.todoText}</p>
          <button className="close-btn" onClick={deleteHandler}>
            <img src={cross} />
          </button>
        </div>;
      })} */}
    </>
  );
}

export default Todo;

import React from "react";
import cross from "../images/icon-cross.svg";
import check from "../images/icon-check.svg";
import TodoFooter from "./TodoFooter";
import { useSelector, useDispatch } from "react-redux";
import { toggle, deleteTodo } from "../redux/todos/todosSlice";
import classNames from "classnames";
import "../style/Todo.css";
import { selectFilteredTodos } from "../redux/todos/todosSlice";
function TodoList() {
  const items = useSelector(selectFilteredTodos);
  const theme = useSelector((state) => state.todos.theme);
  const dispatch = useDispatch();
  return (
    <div className="todo-container">
      {items &&
        items.map((todo) => {
          return (
            <div
              className={classNames({
                "todo-dark todo": theme,
                "todo-light todo": !theme,
              })}
              key={todo.id}
            >
              <p
                className={classNames({
                  circle: true,
                  completed: todo.isCompleted,
                })}
                onClick={() => dispatch(toggle({ id: todo.id }))}
              >
                <img
                  className={classNames({
                    active: todo.isCompleted,
                  })}
                  src={check}
                  alt="check-img"
                />
              </p>
              <p
                className={classNames({
                  "todo-text": true,
                  "completed-dark": todo.isCompleted,
                })}
              >
                {todo.todoText}
              </p>
              <button
                className="close-btn"
                onClick={() => dispatch(deleteTodo(todo.id))}
              >
                <img src={cross} alt="cross-img" />
              </button>
            </div>
          );
        })}
      <TodoFooter></TodoFooter>
    </div>
  );
}

export default TodoList;

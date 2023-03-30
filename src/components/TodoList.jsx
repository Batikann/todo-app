import React from "react";
import Todo from "./Todo";
import TodoFooter from "./TodoFooter";

function TodoList({ todos, setTodos, setStatus, filterTodos, status, theme }) {
  return (
    <div className="todo-container">
      {filterTodos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todoText={todo.text}
            setTodos={setTodos}
            todo={todo}
            todos={todos}
            theme={theme}
          ></Todo>
        );
      })}
      <TodoFooter
        todos={todos}
        setStatus={setStatus}
        status={status}
        setTodos={setTodos}
        theme={theme}
      ></TodoFooter>
    </div>
  );
}

export default TodoList;

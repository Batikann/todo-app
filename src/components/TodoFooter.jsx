import "../style/TodoFooter.css";

function TodoFooter({ todos, setStatus, status, setTodos, theme }) {
  const statusHandler = (e) => {
    setStatus(e.target.textContent);
  };

  const clearComplete = () => {
    setTodos([]);
  };
  return (
    <div>
      <div
        className={`todo-footer ${
          theme ? "todo-footer-dark" : "todo-footer-light"
        }`}
      >
        <ul>
          <li>
            {todos.filter((todo) => todo.isCompleted == false).length}
            <span style={{ marginLeft: "10px" }}>
              {todos.filter((todo) => todo.isCompleted == false).length > 1
                ? "items left"
                : "item left"}
            </span>
          </li>
          <div
            className={`todo-footer ${
              theme ? "todo-footer-dark" : "todo-footer-light"
            }`}
          >
            {["All", "Active", "Completed"].map((statu) => (
              <li key={statu}>
                <button
                  className={status == statu ? "active-link" : ""}
                  onClick={statusHandler}
                >
                  {statu}
                </button>
              </li>
            ))}
          </div>
          <li onClick={clearComplete}>Clear Completed</li>
        </ul>
      </div>
    </div>
  );
}

export default TodoFooter;

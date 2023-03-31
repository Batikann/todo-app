import "../style/TodoFooter.css";
import { itemsValue } from "../redux/todos/todosSlice";
import { useSelector, useDispatch } from "react-redux";
import { changeActiveFilter, clearCompleted } from "../redux/todos/todosSlice";

function TodoFooter() {
  const dispatch = useDispatch();
  const activeValue = useSelector((state) => state.todos.activeFilter);
  const theme = useSelector((state) => state.todos.theme);
  const items = useSelector(itemsValue);
  return (
    <div>
      <div
        className={`todo-footer ${
          theme ? "todo-footer-dark" : "todo-footer-light"
        }`}
      >
        <ul>
          <li>
            {items}
            <span style={{ marginLeft: "5px" }}>
              {items > 1 ? "items left" : "item left"}
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
                  className={activeValue === statu ? "active-link" : ""}
                  onClick={() => dispatch(changeActiveFilter(statu))}
                >
                  {statu}
                </button>
              </li>
            ))}
          </div>
          <li onClick={() => dispatch(clearCompleted())}>Clear Completed</li>
        </ul>
      </div>
    </div>
  );
}

export default TodoFooter;

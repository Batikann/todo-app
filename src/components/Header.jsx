import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../redux/todos/todosSlice";

export default function Header() {
  const theme = useSelector((state) => state.todos.theme);
  const dispatch = useDispatch();
  return (
    <div className="header">
      <h1>TODO</h1>
      <button className="icon" onClick={() => dispatch(changeTheme())}>
        <img src={theme ? sun : moon} alt="toggle-switch" />
      </button>
    </div>
  );
}

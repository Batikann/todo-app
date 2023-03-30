import "../style/Form.css";

const Form = ({ todos, setTodos, inputText, setInputText, theme }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, isCompleted: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <div
      className={`form-container ${
        theme ? "form-container-dark" : "form-container-light"
      }`}
    >
      <p className="circle"></p>
      <form onSubmit={submitTodoHandler}>
        <input
          onChange={inputTextHandler}
          value={inputText}
          className={theme ? "dark-input" : "light-input"}
        />
      </form>
    </div>
  );
};

export default Form;

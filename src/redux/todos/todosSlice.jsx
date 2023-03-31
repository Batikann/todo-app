import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    activeFilter: "All",
    theme: false,
  },
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({ todoText }) => {
        return {
          payload: {
            id: nanoid(),
            isCompleted: false,
            todoText,
          },
        };
      },
    },
    toggle: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.isCompleted = !item.isCompleted;
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      const deleteTodo = state.items.filter((todo) => todo.id !== id);
      state.items = deleteTodo;
    },
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    clearCompleted: (state) => {
      const filtered = state.items.filter((item) => item.isCompleted === false);
      state.items = filtered;
    },
    changeTheme: (state) => {
      const defaultTheme = state.theme;
      state.theme = !defaultTheme;
    },
  },
});

export const itemsValue = (state) => {
  const val = state.todos.items.filter((item) => !item.isCompleted).length;
  return val;
};
export const selectFilteredTodos = (state) => {
  if (state.todos.activeFilter === "All") {
    return state.todos.items;
  }
  return state.todos.items.filter((todo) =>
    state.todos.activeFilter === "Active"
      ? todo.isCompleted === false
      : todo.isCompleted === true
  );
};
export const defaultTheme = (state) => {
  return state.theme;
};
export const {
  addTodo,
  toggle,
  deleteTodo,
  changeActiveFilter,
  filtered,
  clearCompleted,
  changeTheme,
} = todosSlice.actions;
export default todosSlice.reducer;

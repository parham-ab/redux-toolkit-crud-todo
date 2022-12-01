import { createSlice, nanoid } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("todo-items-redux") != null
    ? JSON.parse(localStorage.getItem("todo-items-redux"))
    : [];

const initialState = {
  todoList: items,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.todoList.push(action.payload);
        localStorage.setItem(
          "todo-items-redux",
          JSON.stringify(state.todoList)
        );
      },
      prepare: (title, content, done) => {
        let options = {
          hour12: false,
          hourCycle: "h23",
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        };
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            timeCreated: new Date().toLocaleString("en-US", options),
            done,
          },
        };
      },
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("todo-items-redux", JSON.stringify(state.todoList));
    },
    doneSwitch: (state, action) => {
      const currentTodo = state.todoList.find(
        (item) => item.id === action.payload.id
      );
      currentTodo.done = !currentTodo.done;
      localStorage.setItem("todo-items-redux", JSON.stringify(state.todoList));
    },
    editTodo: (state, action) => {
      const { id, title, content, done } = action.payload;
      const currentTodo = state.todoList.find((item) => item.id === id);
      if (currentTodo) {
        currentTodo.title = title;
        currentTodo.content = content;
        currentTodo.done = done;
      }
      localStorage.setItem("todo-items-redux", JSON.stringify(state.todoList));
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, editTodo, doneSwitch } = todoSlice.actions;

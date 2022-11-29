import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.todoList.push(action.payload);
      },
      prepare: (title, content, timeCreated, done) => {
        return {
          payload: { id: nanoid(), title, content, timeCreated, done },
        };
      },
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (item) => item.id !== action.payload.id
      );
    },
    doneSwitch: (state, action) => {
      const currentTodo = state.todoList.find(
        (item) => item.id === action.payload.id
      );
      currentTodo.done = !currentTodo.done;
    },
    editTodo: (state, action) => {
      const { id, title, content, done } = action.payload;
      const currentTodo = state.todoList.find((item) => item.id === id);
      if (currentTodo) {
        currentTodo.title = title;
        currentTodo.content = content;
        currentTodo.done = done;
      }
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, editTodo, doneSwitch } = todoSlice.actions;

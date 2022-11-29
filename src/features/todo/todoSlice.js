import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state = state.push(action.payload);
      },
      prepare: (title, content, timeCreated, done) => {
        return {
          payload: { id: nanoid(), title, content, timeCreated, done },
        };
      },
    },
    deleteTodo: (state, action) => {
      state.filter((item) => item.id !== action.payload.id);
    },
    editTodo: {},
  },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

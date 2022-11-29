import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: {},
    deleteTodo: {},
    editTodo: {},
  },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

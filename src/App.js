import { Route, Routes } from "react-router-dom";
// components
import TodoList from "./features/todo/TodoList";
import UpdateTodo from "./features/todo/UpdateTodo";
// MUI
import { Container } from "@mui/material";

const App = () => {
  return (
    <Container maxWidth="lg">
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/:id" element={<UpdateTodo />} />
      </Routes>
    </Container>
  );
};

export default App;

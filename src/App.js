import { Route, Routes } from "react-router-dom";
// components
import TodoList from "./features/todo/TodoList";
import UpdateTodo from "./features/todo/UpdateTodo";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="/:id" element={<UpdateTodo />} />
    </Routes>
  );
};

export default App;

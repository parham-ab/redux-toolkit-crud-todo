import { useSelector } from "react-redux";
// components
import AddTodo from "./AddTodo";

const TodoList = () => {
  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div>
      <AddTodo />
    </div>
  );
};

export default TodoList;

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, doneSwitch } from "./todoSlice";
// components
import AddTodo from "./AddTodo";

const TodoList = () => {
  const { todoList } = useSelector((state) => state);
  const dispatch = useDispatch();
  // delete todo
  const deleteHandle = (id) => {
    dispatch(deleteTodo({ id }));
  };
  // edit todo
  const navigate = useNavigate();
  const editTodo = (id) => {
    navigate(`/${id}`);
  };
  // done switch
  const doneSwitchHandle = (id) => {
    dispatch(doneSwitch({ id }));
  };

  return (
    <div>
      <AddTodo />
      {todoList.map((item) => (
        <div key={item.id}>
          <div>
            <h4>Title:</h4>
            <h5>{item.title}</h5>
          </div>
          <div>
            <h4>Content:</h4>
            <h5>{item.content}</h5>
          </div>
          <div>
            <small>{item.timeCreated}</small>
          </div>
          <div>
            <button onClick={() => doneSwitchHandle(item.id)}>done</button>
            <input type="checkbox" value={item.done} />
            <button onClick={() => editTodo(item.id)}>Edit</button>
            <button onClick={() => deleteHandle(item.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editTodo } from "./todoSlice";

const UpdateTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { todoList } = useSelector((state) => state);
  const currentTodo = todoList.filter((item) => item.id === id);
  const { title, content, done } = currentTodo[0];
  const [newValues, setNewValues] = useState({
    title,
    content,
    done,
  });
  // on change
  const changeHandle = (e) => {
    setNewValues({ ...newValues, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  // add todo
  const updateTodoHandle = () => {
    setNewValues({ title: "", content: "" });
    dispatch(
      editTodo({
        id,
        title: newValues.title,
        content: newValues.content,
        done: newValues.done,
      })
    );
    navigate("/");
  };
  console.log(newValues.done);
  return (
    <div>
      <input name="title" value={newValues.title} onChange={changeHandle} />
      <input name="content" value={newValues.content} onChange={changeHandle} />
      <input type="checkbox" value={newValues.done} />
      <span>{newValues.done ? "true" : "false"}</span>
      <button onClick={updateTodoHandle}>Update</button>
      <button onClick={() => navigate("/")}>Cancel</button>
    </div>
  );
};

export default UpdateTodo;

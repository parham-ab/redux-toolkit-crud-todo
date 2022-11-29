import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editTodo } from "./todoSlice";
import { useNavigate } from "react-router-dom";

const UpdateTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { todoList } = useSelector((state) => state);
  const currentTodo = todoList.filter((item) => item.id === id);
  const { title, content, timeCreated, done } = currentTodo[0];
  const [newValues, setNewValues] = useState({
    title,
    content,
    timeCreated,
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
        timeCreated: 555,
        done: false,
      })
    );
    navigate("/");
  };
  //   console.log(id);
  return (
    <div>
      <input name="title" value={newValues.title} onChange={changeHandle} />
      <input name="content" value={newValues.content} onChange={changeHandle} />
      <button onClick={updateTodoHandle}>Update</button>
    </div>
  );
};

export default UpdateTodo;

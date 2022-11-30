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
    if (e.target.name === "isCompleted") {
      setNewValues({ ...newValues, [e.target.name]: e.target.checked });
    } else {
      setNewValues({ ...newValues, [e.target.name]: e.target.value });
    }
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

  return (
    <div>
      <input
        type="text"
        name="title"
        value={newValues.title}
        onChange={changeHandle}
      />
      <input
        type="text"
        name="content"
        value={newValues.content}
        onChange={changeHandle}
      />
      <input
        type="checkbox"
        name="isCompleted"
        value={newValues.done}
        checked={newValues.done}
        onChange={changeHandle}
      />
      <button onClick={updateTodoHandle}>Update</button>
      <button onClick={() => navigate("/")}>Cancel</button>
    </div>
  );
};

export default UpdateTodo;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

const AddTodo = () => {
  const [inputVal, setInputVal] = useState({
    title: "",
    content: "",
    timeCreated: new Date().getTime(),
    done: false,
  });
  // on change
  const changeHandle = (e) => {
    setInputVal({ ...inputVal, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  // add todo
  const addTodoHandle = () => {
    dispatch(
      addTodo(
        inputVal.title,
        inputVal.content,
        inputVal.timeCreated,
        inputVal.done
      )
    );
  };

  return (
    <div>
      <input name="title" value={inputVal.title} onChange={changeHandle} />
      <input name="content" value={inputVal.content} onChange={changeHandle} />
      <button onClick={addTodoHandle}>submit</button>
    </div>
  );
};

export default AddTodo;

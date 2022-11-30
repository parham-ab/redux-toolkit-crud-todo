import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, doneSwitch } from "./todoSlice";
// components
import AddTodo from "./AddTodo";
// mui
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

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
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <AddTodo />
      </Grid>
      {todoList.map((item) => (
        <Grid item key={item.id}>
          <Box display="flex" flexDirection="column">
            <p>Title:</p>
            <h5>{item.title}</h5>
          </Box>
          <div>
            <p>Content:</p>
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
        </Grid>
      ))}
    </Grid>
  );
};

export default TodoList;

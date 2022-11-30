import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, doneSwitch } from "./todoSlice";
// img
import TodoImg from "../../assets/img/todo-img.svg";
// components
import AddTodo from "./AddTodo";
// MUI
import { Box } from "@mui/system";
import { Grid, Container } from "@mui/material";

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
    <Container maxWidth="lg">
      <Grid
        container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <AddTodo />
        </Grid>

        <div>
          <Box sx={{ background: "green" }}>
            {todoList.length ? (
              todoList.map((item) => (
                <Box
                  sx={{ background: "red", m: 1, p: 2, borderRadius: "10px" }}
                >
                  <Grid item key={item.id}>
                    <Box>
                      <p>Title:</p>
                      <h5>{item.title}</h5>
                    </Box>
                    <Box>
                      <p>Content:</p>
                      <h5>{item.content}</h5>
                    </Box>
                    <Box>
                      <small>{item.timeCreated}</small>
                    </Box>
                    <Box>
                      <button onClick={() => doneSwitchHandle(item.id)}>
                        done
                      </button>
                      <input type="checkbox" value={item.done} />
                      <button onClick={() => editTodo(item.id)}>Edit</button>
                      <button onClick={() => deleteHandle(item.id)}>
                        Delete
                      </button>
                    </Box>
                  </Grid>
                </Box>
              ))
            ) : (
              <Box>
                <img src={TodoImg} alt="empty" width={300} />
              </Box>
            )}
          </Box>
        </div>
      </Grid>
    </Container>
  );
};

export default TodoList;

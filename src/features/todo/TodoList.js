import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, doneSwitch } from "./todoSlice";
// img
import TodoImg from "../../assets/img/todo-img.svg";
// components
import AddTodo from "./AddTodo";
// MUI
import { Box } from "@mui/system";
import {
  Grid,
  Container,
  IconButton,
  Divider,
  Checkbox,
  Typography,
} from "@mui/material";
// icons
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import EditIcon from "@mui/icons-material/Edit";

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
        alignItems="center"
        sx={{
          minHeight: "90vh",
          justifyContent: { sm: "space-between", xs: "center" },
        }}
      >
        <Grid
          item
          xs={12}
          sm={5}
          mt={5}
          sx={{ display: "flex", justifyContent:  "center"  }}
        >
          <AddTodo />
        </Grid>

        <Box className={todoList.length ? "todo-empty" : undefined} mt={5}>
          {todoList.length ? (
            todoList.map((item) => (
              <Box
                sx={{
                  background: "#fff5c3",
                  my: 2,
                  mx: 1,
                  p: 2,
                  borderRadius: "10px",
                }}
                className={item.done ? "done todo-items" : "todo-items"}
                key={item.id}
              >
                <Grid item xs={12} sm={7}>
                  <Box>
                    <Typography sx={{ color: "#300198" }}>Title:</Typography>
                    <h5>{item.title}</h5>
                  </Box>
                  <Box>
                    <Typography sx={{ color: "#300198" }}>Content:</Typography>
                    <h5>{item.content}</h5>
                  </Box>
                  <Box>
                    <small>{item.timeCreated}</small>
                  </Box>
                  <Divider sx={{ my: 1 }} />
                  <Box>
                    <IconButton
                      aria-label="delete"
                      onClick={() => deleteHandle(item.id)}
                      size="small"
                      color="error"
                    >
                      <HighlightOffIcon />
                    </IconButton>
                    <IconButton
                      aria-label="edit"
                      onClick={() => editTodo(item.id)}
                      size="small"
                      color="warning"
                    >
                      <EditIcon />
                    </IconButton>

                    <Checkbox
                      value={item.done}
                      checked={!!item.done}
                      onClick={() => doneSwitchHandle(item.id)}
                      size="small"
                      sx={{
                        "& .MuiSvgIcon-root": {
                          color: "#20b63f",
                        },
                      }}
                    />
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
      </Grid>
    </Container>
  );
};

export default TodoList;

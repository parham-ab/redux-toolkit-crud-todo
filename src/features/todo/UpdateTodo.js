import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editTodo } from "./todoSlice";
import { Box, IconButton, Typography } from "@mui/material";
// icons
import CancelIcon from "@mui/icons-material/Cancel";
import CheckIcon from "@mui/icons-material/Check";
import { Stack } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";

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
    <Box
      sx={{
        background: "#cad1ff",
        width: "300px",
        padding: "10px",
        borderRadius: "8px",
        boxShadow: 5,
        m: "50px auto",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={5}
      >
        <Typography component="h1" variant="h6">
          Edit Todo
        </Typography>

        <Typography component="h1" variant="h6" color="text.secondary">
          <EditIcon />
        </Typography>
      </Box>
      <Stack>
        <input
          className="customInput"
          type="text"
          name="title"
          value={newValues.title}
          onChange={changeHandle}
        />
        <input
          className="customInput"
          type="text"
          name="content"
          value={newValues.content}
          onChange={changeHandle}
        />
      </Stack>
      <Box display="flex" justifyContent="space-between">
        <IconButton
          onClick={() => navigate("/")}
          variant="text"
          color="error"
          size="small"
        >
          <CancelIcon />
        </IconButton>
        <IconButton
          onClick={updateTodoHandle}
          variant="contained"
          color="success"
          size="small"
        >
          <CheckIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default UpdateTodo;

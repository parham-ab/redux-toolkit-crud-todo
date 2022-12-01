import { useDispatch } from "react-redux";
// redux actions
import { addTodo } from "./todoSlice";
// mui
import { Box } from "@mui/system";
import { Button } from "@mui/material";
// formik stuff
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomInput from "../../components/common/CustomInput";
const validationSchema = Yup.object({
  title: Yup.string().required("Required!"),
  content: Yup.string().required("Required!"),
});

const initialValues = {
  title: "",
  content: "",
  timeCreated: "",
  done: false,
};

const AddTodo = () => {
  const dispatch = useDispatch();
  // add todo
  const onSubmit = (values) => {
    // add todo
    dispatch(
      addTodo(values.title, values.content, values.timeCreated, values.done)
    );

    // clear inputs after submitting
    values.title = "";
    values.content = "";
    values.done = false;
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <Box
      sx={{
        background: "#cad1ff",
        width: "fit-content",
        padding: "10px",
        borderRadius: "8px",
        boxShadow: 5,
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Box my={3}>
          <CustomInput
            name="title"
            label="Title"
            formik={formik}
            placeholder="Task Title..."
          />
        </Box>
        <Box my={3}>
          <CustomInput
            name="content"
            label="Content"
            formik={formik}
            placeholder="Description..."
          />
        </Box>
        <Button
          size="small"
          variant="outlined"
          type="submit"
          disabled={!formik.isValid}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default AddTodo;

import { useDispatch } from "react-redux";
// redux actions
import { addTodo } from "./todoSlice";
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
  timeCreated: new Date().getTime(),
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
    values.timeCreated = new Date().getTime();
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
    <div>
      <form onSubmit={formik.handleSubmit}>
        <CustomInput name="title" label="title" formik={formik} />
        <CustomInput name="content" label="content" formik={formik} />
        <button type="submit" disabled={!formik.isValid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;

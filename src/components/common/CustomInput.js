const CustomInput = ({ formik, name, type = "text", label, placeholder }) => {
  return (
    <>
      <div>
        <label htmlFor={name}>{label}</label>
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        {...formik.getFieldProps(name)}
        className={`customInput ${
          formik.errors[name] && formik.touched[name] && "error"
        }`}
      />
    </>
  );
};

export default CustomInput;

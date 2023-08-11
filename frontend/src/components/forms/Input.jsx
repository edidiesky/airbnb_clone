import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import useValidate from "../../hooks/useValidate";
import { useFormik } from "formik";

const InputTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "7px",
    backgroundColor: "#fff",
    border: "1px solid rgba(0,0,0,.2)",

    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&:hover": {
      borderColor: "2px solid rgba(0,0,0,1)",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid rgba(0,0,0,1)",
      borderColor: "transparent",
    },
    "&.Mui-focused ": {
      border: "2px solid rgba(0,0,0,1)",
      // borderColor: "transparent",
    },
  },
  "& .MuiOutlinedInput-input": {
    padding: "14px 10px",
    fontSize: "15px",
    fontWeight: "400",
    fontFamily: "CustomFont2_light, sans-serif",
    color: "var(--dark-1)",
  },
  "& .MuiInputLabel-root": {
    fontSize: "15px",
    fontWeight: "400",
    color: "var(--dark-1)",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    // Styles when the form is focused
    fontWeight: "normal",
    color: "var(--grey-1)",
  },
  "& .MuiInputLabel-shrink": {
    transform: "translate(12px, 3px) scale(0.75)",
    fontWeight: "normal",
    color: "var(--grey-1)",
  },
}));

const FormInput = ({
  types,
  setState,
  onChange,
  value,
  id,
  label,
  formdata,
  ...props
}) => {
  const { values, errors, touched } = formdata;
  return (
    <div className="w-100 flex column">
      <InputTextField
        label={label}
        variant="outlined"
        fullWidth
        autoComplete="off"
        {...props}
        value={value}
        onChange={onChange}
        onBlur={formdata.handleBlur}
        multiline={types === "textarea"}
        // error={!!errors[id] && touched[id]}
        // helperText={touched[id] && errors[id] ? errors[id] : ""}
      />
    </div>
  );
};

export default FormInput;

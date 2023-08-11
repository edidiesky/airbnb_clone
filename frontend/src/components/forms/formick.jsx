import React, { useState } from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const FomickInput = () => {
  const [formdata, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const { firstName, lastName, email } = formdata;
  const formik = useFormik({
    initialValues: formdata,
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const onChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={onChange}
        onBlur={formik.handleBlur}
        value={firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div className="fs-10 text-bold text-red">
          {formik.errors.firstName}
        </div>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={onChange}
        onBlur={formik.handleBlur}
        value={lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div className="fs-10 text-bold text-red">{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={onChange}
        onBlur={formik.handleBlur}
        value={email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="fs-10 text-bold text-red">{formik.errors.email}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};

export default FomickInput;

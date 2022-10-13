import { useFormik, Filed } from "formik";
import * as yup from "yup";
import { Button, Form, Col, Row } from "react-bootstrap";
import "../index.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const FormComponent = (props) => {
  //Sri Lanka phone number validate regex
  const slPhoneNumberRegex =
    /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;

  //Validation Schema
  const schema = yup.object({
    firstName: yup
      .string()
      .min(6, "*Names must have at least 6 characters")
      .max(10, "*Names can't be longer than 10 characters")
      .required(),
    lastName: yup
      .string()
      .min(6, "*Names must have at least 6 characters")
      .max(10, "*Names can't be longer than 10 characters")
      .required(),
    email: yup.string().email().required(),
    phone: yup
      .string()
      .matches(slPhoneNumberRegex, "Please enter valid phone number")
      .required(),
    gender: yup.string().required(),
  });

  //form inital values
  const initialValue = {
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    gender: "",
  };
  //props destructure
  const { passFunc, id } = props;

  //formik hook
  const formik = useFormik({
    initialValues: initialValue,
    // validateOnChange: false,
    validationSchema: schema,
    onSubmit: (values) => {
      const data = {
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        number: values.phone,
        gender: values.gender,
        photo: userData?.photo
          ? userData?.photo
          : "https://images.unsplash.com/photo-1665504953601-d73fe3e91a8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      };
      passFunc(data);
    },
  });

  //global state access use selector hook
  const userData = useSelector((state) => state.user.currentData);

  //edit form fileds value set useeffect
  useEffect(() => {
    if (id) {
      formik.setFieldValue("firstName", userData?.first_name, false);
      formik.setFieldValue("lastName", userData?.last_name);
      formik.setFieldValue("email", userData?.email, false);
      formik.setFieldValue("phone", userData?.number);
      formik.setFieldValue("gender", userData?.gender);
    }
  }, [userData]);

  return (
    <>
      <Form noValidate onSubmit={formik.handleSubmit} className="form-class">
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            name="firstName"
            type="text"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            isValid={formik.touched.firstName && !formik.errors.firstName}
            isInvalid={!!formik.errors.firstName}
            placeholder="Enter first name"
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.firstName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name="lastName"
            type="text"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            isValid={formik.touched.lastName && !formik.errors.lastName}
            isInvalid={!!formik.errors.lastName}
            placeholder="Enter last name"
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.lastName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            isValid={formik.touched.email && !formik.errors.email}
            isInvalid={!!formik.errors.email}
            type="email"
            placeholder="Enter email"
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            name="phone"
            type="text"
            placeholder="Enter phone number"
            value={formik.values.phone}
            onChange={formik.handleChange}
            isValid={formik.touched.phone && !formik.errors.phone}
            isInvalid={!!formik.errors.phone}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.phone}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="gender">
          <Form.Label>Gender</Form.Label>
          <Form.Select
            value={formik.values.gender}
            onChange={formik.handleChange}
            isValid={formik.touched.gender && !formik.errors.gender}
            isInvalid={!!formik.errors.gender}
            name="gender"
            aria-label="Default select example"
          >
            <option>Open this select gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {formik.errors.gender}
          </Form.Control.Feedback>
        </Form.Group>
        <Row className="div-end-style">
          <Col>
            <Button variant="outline-primary" type="submit">
              {id ? "Save" : "Add"}
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default FormComponent;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Loader/Loader";
import Message from "../../Message/Message";
import FormContainer from "../../FormContainer/FormContainer";
import { register } from "../../../redux/actions/userAction";

const RegisterScreen = ({ history, location }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const redirect = location.search ? location.search.split("=")[1] : "/";
  console.log(location);

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Password do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };
  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Register
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          Have an account ?{" "}
          <Link to={redirect ? `/login?redirect=${redirect}` : `/login`}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;

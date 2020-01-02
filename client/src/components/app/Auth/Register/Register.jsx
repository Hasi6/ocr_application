import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

import "../auth.css";
import { registerUser } from "../../../../redux/actions/auth/auth";

// 3RD PARTY UI LIBRARY
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Alert
} from "reactstrap";
import Axios from "axios";

const Register = ({history}) => {
  // if (auth) {
  //   history.push("/");
  // }

  // DECLARE STATE VARIABLES
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  // ONCHANGE FUNCTION
  const onChange = (value, name) => {
    name(value);
  };

  // REGISTER FUNCTION
  const onSubmit = async(e) => {
    e.preventDefault();
    setEmailError(null);
    setPasswordError(null);
    if (password !== confirmPassword) {
      setPasswordError(true);
      setError("Passwords Did not Matched");
    } else {
      setLoading(true);
      const body = {
        username,
        email,
        password
      };
      const header={
        headers:{
          "Content-type":"application/json"
        }
      };
      const res =await Axios.post("http://localhost:5000/api/register",body,header);
      console.log(res);
      if(res.status===200){
        history.push('/')
      }
    }
  };

  return (
    <Container className="pt-lg-md">
      <Row className="justify-content-center">
        <Col lg="5">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Sign in with credentials</small>
              </div>
              <Form onSubmit={e => onSubmit(e)} role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <Icon name="user outline" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      value={username}
                      onChange={e => onChange(e.target.value, setUsername)}
                      placeholder="Username"
                      type="text"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup className="mb-3">
                  <InputGroup
                    className={
                      emailError ? "has-danger" : "input-group-alternative"
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      value={email}
                      onChange={e => onChange(e.target.value, setEmail)}
                      placeholder="Email"
                      type="email"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup
                    className={
                      passwordError ? "has-danger" : "input-group-alternative"
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      value={password}
                      onChange={e => onChange(e.target.value, setPassword)}
                      placeholder="Password"
                      type="password"
                      autoComplete="off"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup
                    className={
                      passwordError ? "has-danger" : "input-group-alternative"
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      value={confirmPassword}
                      onChange={e =>
                        onChange(e.target.value, setConfirmPassword)
                      }
                      placeholder="Confirm Password"
                      type="password"
                      autoComplete="off"
                    />
                  </InputGroup>
                </FormGroup>
                <div className="text-center">
                  <Button
                    className="my-4"
                    color="purple"
                    type="submit"
                    loading={loading}
                  >
                    Sign in
                  </Button>
                </div>
              </Form>
              {error && (
                <Alert color="warning">
                  <span className="alert-inner--text">
                    <strong>Invalid credentials</strong> {error}
                  </span>
                </Alert>
              )}
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Forgot password?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <Link className="text-light" to="/login">
                <small>Already Have an Account</small>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;

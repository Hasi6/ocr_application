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

const Register = ({ registerUser, auth, history }) => {
  if (auth) {
    history.push("/");
  }

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

  // REGISTER BUTTON DISABLE FUNCTION
  const disabled = () => {
    if (
      email === "" ||
      password === "" ||
      loading ||
      username === "" ||
      confirmPassword === ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  // REGISTER FUNCTION
  const onSubmit = e => {
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
      registerUser(body, setLoading, setError, setEmailError);
    }
  };

  return (
    <Container className="pt-lg-md">
      <Row className="justify-content-center">
        <Col lg="5">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-white pb-5">
              <div className="text-muted text-center mb-3">
                <small>Sign in with</small>
              </div>
              <div className="btn-wrapper text-center">
                <Button color="facebook">
                  <Icon name="facebook" /> Facebook
                </Button>
                <Button color="google plus">
                  <Icon name="google" /> Google
                </Button>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Or sign in with credentials</small>
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
                    disabled={disabled()}
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

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, { registerUser })(Register);

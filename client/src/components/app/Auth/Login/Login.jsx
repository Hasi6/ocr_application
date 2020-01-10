import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

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

import "../auth.css";
import { loginUser } from "../../../../redux/actions/auth/auth";
import Axios from "axios";

const Login = ({async, auth, loginUser, history}) => {
  if (auth) {
    history.push("/");
  }

  // DECLARE STATE VARIABLES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState(null);

  // ONCHANGE FUNCTION
  const onChange = (value, name) => {
    name(value);
  };


  // LOGIN FUNCTION
  const onSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    // setEmailError(false);
    // setError(null);
    // setPasswordError(false);
    const body = {
      email,
      password
    };
    
    loginUser(body,setLoading, setError, setEmailError, setPasswordError);

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
              <Link className="text-light" to="/register">
                <small>Create new account</small>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

// export default Login;

const mapStateToProps = state => {
  return {
    auth: state.auth,
    async: state.async
  };
};
export default connect(mapStateToProps, { loginUser })(Login);

import React, { Component } from "react";
import axios from "axios";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    const { email, password } = this.state;
    axios
      .post(
        "http://localhost:3000/sessions",
        {
          user: {
            email: email,
            password: password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.logged_in) {
        }
        this.props.handleRedirect(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
    e.preventDefault();
  }

  render() {
    const { email, password, password_confirmation, pin, errors } = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="exampleEmail" sm={2} size="lg">
              Email
            </Label>
            <Col sm={10}>
              <Input
                type="email"
                name="email"
                placeholder="lg"
                bsSize="lg"
                onChange={this.handleChange}
                required
                value={email}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail2" sm={2}>
              Password
            </Label>
            <Col sm={10}>
              <Input
                type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={this.handleChange}
                required
              />
            </Col>
          </FormGroup>
          <Button type="submit">Login</Button>
        </Form>
      </Container>
    );
  }
}

export default Login;

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

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      pin: "",
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
    const { email, password, password_confirmation, pin, errors } = this.state;
    axios
      .post(
        "http://localhost:3000/signup",
        {
          user: {
            email: email,
            password: password,
            password_confirmation: password_confirmation,
            pin: pin,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log("response", response);
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
          <FormGroup row>
            <Label for="exampleEmail2" sm={2}>
              Confirm password
            </Label>
            <Col sm={10}>
              <Input
                type="password"
                name="password_confirmation"
                placeholder="Confirm password"
                value={password_confirmation}
                onChange={this.handleChange}
                required
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail2" sm={2}>
              Write pin number
            </Label>
            <Col sm={10}>
              <Input
                type="password"
                name="pin"
                placeholder="example 123456789"
                value={pin}
                onChange={this.handleChange}
                required
              />
            </Col>
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default Signup;

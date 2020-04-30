import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Divider,
  Header,
  Button,
  Form,
  Segment,
  TextArea,
  Message,
} from "semantic-ui-react";
import "./LoginPage.css";

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = async () => {};

  render() {
    return (
      <div>
        <p className="signup">
          Not a member? &nbsp; <a>Sign up now</a> &nbsp;
        </p>

        <Container>
          <Header as="h2" icon textAlign="center">
            Welcome back!
          </Header>
          <Segment>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Input
                  required
                  width={8}
                  type="email"
                  label={<div className="labels">Email Address</div>}
                  placeholder="Email Address"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Input
                  required
                  width={8}
                  label={<div className="labels">Password</div>}
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </Form.Group>
              {/* <div>forget password?</div> */}
              <Button type="submit" color="red">
                Sign in
              </Button>
            </Form>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default LoginPage;

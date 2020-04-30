import React from "react";
import { withRouter, Link } from "react-router-dom";
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
import { Background } from "./style";
import userService from "../../utils/userService";

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
    console.log(this.state);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.history.push("/");
    } catch (err) {
      alert("Invalid Credentials!");
    }
  };

  render() {
    return (
      <Background>
        <p className="signup">
          Not a member? &nbsp;
          <Link to="/signup">
            <a>Sign up now</a>
          </Link>
          &nbsp;
        </p>
        <Container>
          <Link to="/">
            <img src="https://i.imgur.com/MiqWB6M.png" />
          </Link>
          <Header
            as="h2"
            icon
            textAlign="center"
            className="welcomeBack"
            color="white"
          >
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
                  type="password"
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
      </Background>
    );
  }
}

export default withRouter(LoginPage);

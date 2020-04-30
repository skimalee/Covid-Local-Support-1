import React, { Component } from "react";
import userService from "../../utils/userService";
import { withRouter, Link } from "react-router-dom";
import Select from "react-select";
// import { Form, FormInput, RegButton } from "./style";
import {
  Form,
  Button,
  Container,
  Header,
  Segment,
  Image,
} from "semantic-ui-react";
import restaurantCategories from "../../data";
// import styled from "styled-components";
// import { FormContainer } from "./style";
import "./SignUpPage";
import { Background } from "./style";

const options = [
  { value: "takeout", label: "Takeout" },
  { value: "delivery", label: "Delivery" },
  { value: "curbsidepickup", label: "Curbside Pickup" },
];

class SignupForm extends Component {
  state = {
    screenNum: 1,
    businessName: "",
    website: "",
    phoneNum: "",
    categories: [],
    services: [],
    address: "",
    name: "",
    email: "",
    password: "",
  };

  formRef = React.createRef();

  handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    if (!this.state.password) {
      return;
    }
    event.preventDefault();
    // debugger;
    try {
      await userService.signup(this.state);
      await userService.login({
        email: this.state.email,
        pw: this.state.password,
      });
    } catch (err) {
      console.log(err);
    }
    this.props.history.push("/");
  };

  handleChangeCategories = (categories) => {
    this.setState({ ...this.state, categories });
  };

  handleChangeServices = (services) => {
    this.setState({ ...this.state, services });
  };

  conditon = () => {
    if (this.state.screenNum === 1) {
      return this.screenOne();
    } else if (this.state.screenNum === 2) {
      return this.screenTwo();
    } else if (this.state.screenNum === 3) {
      return this.screenThree();
    }
  };

  header = () => {
    return (
      <div>
        {/* SUB NAV BAR BELOW */}

        <div className="ui attached stackable menu">
          <div className="ui container subNav">
            <div>
              <Image href="https://imgur.com/a/94NTL1H" size="tiny" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  // this is for screen one
  screenOne = () => {
    return (
      <div>
        {this.header()}
        <Background>
          <Container>
            <Header as="h2" icon textAlign="center" color="black" size="huge">
              Build Your Community!
            </Header>
            <Header.Subheader>
              Include a little more about you!
            </Header.Subheader>
            <Segment>
              <Form
                onSubmit={() => {
                  let newNum = this.state.screenNum + 1;
                  this.setState({ screenNum: newNum });
                }}
              >
                <label className="labels">Business Name</label>
                <Form.Input
                  required
                  width={8}
                  type="text"
                  name="businessName"
                  value={this.state.businessName}
                  onChange={this.handleChange}
                />
                <label className="labels">Import Website</label>
                <Form.Input
                  required
                  width={8}
                  type="text"
                  name="website"
                  value={this.state.website}
                  onChange={this.handleChange}
                />
                <label className="labels">Business Phone Number</label>
                <Form.Input
                  required
                  width={8}
                  type="text"
                  name="phoneNum"
                  value={this.state.phoneNum}
                  onChange={this.handleChange}
                />
                <label className="labels">Business Address</label>
                <Form.Input
                  required
                  width={8}
                  type="address"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleChange}
                />
                <Button>Submit</Button>
              </Form>
            </Segment>
          </Container>
        </Background>
      </div>
    );
  };

  //this is for screen two
  screenTwo = () => {
    return (
      <div>
        <Background>
          <Container>
            <Header as="h2" icon textAlign="center">
              Build Your Community!
              <Header.Subheader>
                Include a little more about you!
              </Header.Subheader>
            </Header>
            <Segment>
              <Form
                onSubmit={() => {
                  let newNum = this.state.screenNum + 1;
                  this.setState({ screenNum: newNum });
                }}
              >
                <label className="labels">Categories</label>
                <Select
                  isMulti
                  onMenuClose
                  name="categories"
                  options={restaurantCategories}
                  value={this.state.categories}
                  onChange={this.handleChangeCategories}
                />
                <label className="labels">Services</label>
                <Select
                  name="services"
                  isMulti
                  options={options}
                  value={this.state.services}
                  onChange={this.handleChangeServices}
                />
                <Button>Submit</Button>
              </Form>
            </Segment>
          </Container>
        </Background>
      </div>
    );
  };

  screenThree = () => {
    return (
      <div>
        <Background>
          <Container>
            <Header as="h2" icon textAlign="center">
              Build Your Community!
              <Header.Subheader>
                Include a little more about you!
              </Header.Subheader>
            </Header>
            <Segment>
              <Form onSubmit={this.handleSubmit}>
                <label className="labels">Your Name</label>
                <Form.Input
                  required
                  width={8}
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <label className="labels">Your Email Address</label>
                <Form.Input
                  required
                  width={8}
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <label className="labels">Create Your Password</label>
                <Form.Input
                  required
                  width={8}
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <Button>Sign Up</Button>
              </Form>
            </Segment>
          </Container>
        </Background>
      </div>
    );
  };

  render() {
    return <div className="form-container">{this.conditon()}</div>;
  }
}

export default withRouter(SignupForm);

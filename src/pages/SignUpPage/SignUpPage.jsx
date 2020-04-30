import React, { Component } from "react";
import userService from "../../utils/userService";
import { withRouter } from "react-router-dom";
import Select from "react-select";
// import { Form, FormInput, RegButton } from "./style";
import { Form, Button } from "semantic-ui-react";
import restaurantCategories from "../../data";
// import styled from "styled-components";
import { FormContainer } from "./style";
import "./SignUpPage";

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
    categories: "",
    services: "",
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
    event.preventDefault();
    debugger;
    try {
      await userService.signup(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push("/search");
    } catch (err) {
      console.log(err);
    }
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

  // this is for screen one
  screenOne = () => {
    return (
      <div>
        <h1>Build Your Community!</h1>
        <p>Include a little more about you!</p>
        <Form
          onSubmit={() => {
            let newNum = this.state.screenNum + 1;
            this.setState({ screenNum: newNum });
          }}
        >
          <label>Business Name</label>
          <Form.Input
            type="text"
            name="businessName"
            value={this.state.businessName}
            onChange={this.handleChange}
          />
          <label>Import Website</label>
          <Form.Input
            type="text"
            name="website"
            value={this.state.website}
            onChange={this.handleChange}
          />
          <label>Business Phone Number</label>
          <Form.Input
            type="text"
            name="phoneNum"
            value={this.state.phoneNum}
            onChange={this.handleChange}
          />
          <label>Business Address</label>
          <Form.Input
            type="address"
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
          />
          <Button>Submit</Button>
        </Form>
      </div>
    );
  };

  //this is for screen two
  screenTwo = () => {
    return (
      <div>
        <h1>Build Your Community!</h1>
        <p>Include a little more about you!</p>
        <Form
          onSubmit={() => {
            let newNum = this.state.screenNum + 1;
            this.setState({ screenNum: newNum });
          }}
        >
          <label>Categories</label>
          <Select
            isMulti
            onMenuClose
            name="categories"
            options={restaurantCategories}
            value={this.state.categories}
            onChange={this.handleChangeCategories}
          />
          <label>Services</label>
          <Select
            name="services"
            isMulti
            options={options}
            value={this.state.services}
            onChange={this.handleChangeServices}
          />
          <Button>Submit</Button>
        </Form>
      </div>
    );
  };

  screenThree = () => {
    return (
      <div>
        <h1>Build Your Community!</h1>
        <p>Include a little more about you!</p>
        <Form
          onSubmit={() => {
            let newNum = this.state.screenNum + 1;
            this.setState({ screenNum: newNum });
          }}
        >
          <label>Your Name</label>
          <Form.Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label>Your Email Address</label>
          <Form.Input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label>Create Your Password</label>
          <Form.Input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Button>Sign Up</Button>
        </Form>
      </div>
    );
  };

  render() {
    return <div className="form-container">{this.conditon()}</div>;
  }
}

export default withRouter(SignupForm);

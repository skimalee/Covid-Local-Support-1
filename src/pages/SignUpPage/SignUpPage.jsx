import React, { Component } from "react";
import userService from "../../utils/userService";
import { withRouter } from "react-router-dom";
import Select from "react-select";
// import { Form, FormInput, RegButton } from "./style";
import { Form, Button } from "semantic-ui-react";
import restaurantCategories from "../../data";

class SignupForm extends Component {
  state = {
    formData: {
      businessName: "",
      website: "",
      categories: "",
      services: "",
      address: "",
      email: "",
      password: "",
    },
  };

  formRef = React.createRef();

  handleChange = (event) => {
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
    this.setState({ formData: { ...this.state.formData, categories } });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h1>Build Your Community!</h1>
        <p>Add Your Business Details</p>
        <Form.Input
          type="text"
          placeholder="Business Name"
          name="businessName"
          value={this.state.formData.businessName}
          onChange={this.handleChange}
        />
        <Form.Input
          type="text"
          placeholder="Your Website"
          name="website"
          value={this.state.formData.website}
          onChange={this.handleChange}
        />
        <Form.Input
          type="text"
          placeholder="Business Name"
          name="businessName"
          value={this.state.formData.businessName}
          onChange={this.handleChange}
        />
        <Select
          type="text"
          placeholder="Categories"
          isMulti
          name="categories"
          options={restaurantCategories}
          value={this.state.formData.categories}
          onChange={this.handleChangeCategories}
        />
        <Select
          type="text"
          placeholder="Services"
          name="services"
          value={this.state.formData.services}
          onChange={this.handleChange}
        />
        <Form.Input
          type="adress"
          placeholder="Adress"
          name="address"
          value={this.state.formData.address}
          onChange={this.handleChange}
        />
        <Form.Input
          type="email"
          placeholder="Email"
          name="email"
          value={this.state.formData.email}
          onChange={this.handleChange}
        />
        <Form.Input
          type="password"
          placeholder="Password"
          name="password"
          value={this.state.formData.password}
          onChange={this.handleChange}
        />
        <Button>Sign Up</Button>
      </Form>
    );
  }
}

export default withRouter(SignupForm);

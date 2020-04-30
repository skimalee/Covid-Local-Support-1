import React from "react";
import { Form } from "semantic-ui-react";
import { getGeocode } from "../../utils/geocodeService";
import { withRouter } from "react-router-dom";

class GeocodeComponenet extends React.Component {
  constructor() {
    super();
    this.state = {
      address: "",
    };
  }

  handleSearchChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };

  onSubmit = async () => {
    if (this.state.address) {
      let query = { address: this.state.address };
      const res = await getGeocode(query);
      this.props.handleGeoData(res.results[0]);
    }
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Input
          placeholder="Search location..."
          value={this.state.address}
          name="address"
          onChange={this.handleSearchChange}
        />
      </Form>
    );
  }
}
export default withRouter(GeocodeComponenet);

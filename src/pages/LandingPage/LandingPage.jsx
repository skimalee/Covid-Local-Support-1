import React from "react";
// import { Link } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";

import "./LandingPage.css";

const LandingPage = (props) => {
  return (
    <div>
      <Button onClick={props.syncLocation}>Sync Location</Button>

      <Form
        onSubmit={() => {
          if (props.addressInput) {
            props.coordsFromAddress();
          }
        }}
      >
        <Form.Input
          placeholder="Search..."
          className="address-input"
          name="addressInput"
          type="text"
          value={props.addressInput}
          onChange={props.handleSearchChange}
        />
      </Form>
    </div>
  );
};

export default LandingPage;

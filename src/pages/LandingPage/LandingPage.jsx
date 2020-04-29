import React from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "semantic-ui-react";
import GoogleMapComponent from "../../components/GoogleMap/GoogleMap";

import "./LandingPage.css";

const LandingPage = (props) => {
  return (
    <div>
      <Button onClick={props.syncLocation}>Sync Location</Button>
      <Input placeholder="Search..." />

      <br />

      <GoogleMapComponent />
    </div>
  );
};

export default LandingPage;

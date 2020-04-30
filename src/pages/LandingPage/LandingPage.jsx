import React from "react";
// import { Link } from "react-router-dom";
import { Button, Grid } from "semantic-ui-react";
import NavBar from "../../components/NavBar/NavBar";
import Geocode from "../../components/GoogleMap/Geocode";

import "./LandingPage.css";

const LandingPage = (props) => {
  return (
    <div>
      <NavBar user={props.user} handleLogout={props.handleLogout} />
      <div className="headerText">
        <h1>SUPPORT YOUR LOCAL RESTAURANTS</h1>
        <h4>Search, discover, empower local restaurants</h4>
      </div>
      <Geocode />
      <Button className="syncButton" onClick={props.syncLocation}>
        Use my location
      </Button>
      <Grid>
        <Grid.Column key={1}>{/* <Image /> */}</Grid.Column>
        <Grid.Column key={2}>{/* <Image /> */}</Grid.Column>
        <Grid.Column key={3}>{/* <Image /> */}</Grid.Column>
        <Grid.Column key={4}>{/* <Image /> */}</Grid.Column>
        <Grid.Column key={5}>{/* <Image /> */}</Grid.Column>
      </Grid>
    </div>
  );
};

export default LandingPage;

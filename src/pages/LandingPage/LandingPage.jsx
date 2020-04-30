import React from "react";
// import { Link } from "react-router-dom";
import { Button, Grid, Image } from "semantic-ui-react";
import NavBar from "../../components/NavBar/NavBar";
import Geocode from "../../components/GoogleMap/Geocode";
import logo from "../../assets/navlogo.png";

import "./LandingPage.css";

const LandingPage = (props) => {
  return (
    <div>
      <NavBar />
      <div className="headerText">
        <h1>SUPPORT YOUR LOCAL RESTAURANTS</h1>
        <h4>Search, discover, empower local restaurants</h4>
      </div>
      <Geocode history={props.history} handleGeoData={props.handleGeoData} />
      <Button className="syncButton" onClick={props.syncLocation}>
        Use my location
      </Button>
      <Grid className="fiveImages" centered="true">
        <Grid.Column key={1}>
          <Image src={logo} size="huge" />
        </Grid.Column>
        <Grid.Column key={2}>
          <Image src={logo} size="huge" />
        </Grid.Column>
        <Grid.Column key={3}>
          <Image src={logo} size="huge" />
        </Grid.Column>
        <Grid.Column key={4}>
          <Image src={logo} size="huge" />
        </Grid.Column>
        <Grid.Column key={5}>
          <Image src={logo} size="huge" />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default LandingPage;

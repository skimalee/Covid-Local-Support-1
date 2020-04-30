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

      <h1 className="headerText">SUPPORT YOUR LOCAL RESTAURANTS</h1>
      <h4 className="subHeaderText">
        Search, discover, empower local restaurants
      </h4>

      <div className="search-bar">
        <Geocode history={props.history} handleGeoData={props.handleGeoData} />
      </div>
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

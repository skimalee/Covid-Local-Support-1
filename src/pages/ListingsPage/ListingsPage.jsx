import React from "react";
// import { Link } from "react-router-dom";
import { Button, Grid, Image } from "semantic-ui-react";
import NavBar from "../../components/NavBar/NavBar";
import Geocode from "../../components/GoogleMap/Geocode";
import logo from "../../assets/navlogo.png";

import "./ListingsPage.css";

const ListingPage = (props) => {
  return (
    <div>
      <NavBar />
      <h1>Restaurants in {props.addressInput}</h1>
      <button
        onClick={() => {
          console.log(props.addressInput);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default ListingPage;

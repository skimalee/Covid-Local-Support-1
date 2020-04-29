import React from "react";
import { Route, Switch } from "react-router-dom";
import Geocode from "react-geocode";

import LandingPage from "./pages/LandingPage/LandingPage";
// import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      addressInput: "",
    };
  }

  handleSearchChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };

  syncLocation = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({
          coords: {
            lat: position.coords.latitude,
            long: position.coords.longitude,
          },
        });
      },
      (err) => console.log(err)
    );
  };

  coordsFromAddress = () => {
    // Geocode.setApiKey(`${process.env.REACT_APP_MAPS}`);
    Geocode.setApiKey("AIzaSyBSgkPpf1nlv91xu9gO5D-gURtirUOBf4A");
    // set response language. Defaults to english.
    Geocode.setLanguage("en");
    // set response region. Its optional.
    // A Geocoding request with region=es (Spain) will return the Spanish city.
    Geocode.setRegion("es");
    // Enable or disable logs. Its optional.
    Geocode.enableDebug();
    // Get address from latidude & longitude.
    // Geocode.fromLatLng("48.8583701", "2.2922926").then(
    //   (response) => {
    //     const address = response.results[0].formatted_address;
    //     console.log(address);
    //   },
    //   (error) => {
    //     console.error(error);
    //   }
    // );
    // Get latidude & longitude from address.
    Geocode.fromAddress(this.state.addressInput).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={({ history }) => (
              <LandingPage
                syncLocation={this.syncLocation}
                addressInput={this.state.addressInput}
                handleSearchChange={this.handleSearchChange}
                coordsFromAddress={this.coordsFromAddress}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignUpPage
                handleSearchChange={this.handleSearchChange}
                coordsFromAddress={this.coordsFromAddress}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

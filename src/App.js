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
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignUpPage handleSearchChange={this.handleSearchChange} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

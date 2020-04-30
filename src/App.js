import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
// import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import RestaurantAccountPage from "./pages/RestaurantAccountPage/RestaurantAccountPage";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      addressInput: "",
      latitude: "",
      longitude: "",
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
          <Route exact path="/login" render={({ history }) => <LoginPage />} />
          <Route
            exact
            path="/signup"
            render={({ history }) => <SignUpPage />}
          />
          <Route
            exact
            path="/account"
            render={({ history }) => <RestaurantAccountPage />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

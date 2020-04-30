import React from "react";
import { Route, Switch } from "react-router-dom";
import userService from "./utils/userService";
import LandingPage from "./pages/LandingPage/LandingPage";
// import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import ListingsPage from "./pages/ListingsPage/ListingsPage";
import RestaurantAccountPage from "./pages/RestaurantAccountPage/RestaurantAccountPage";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      userLat: "",
      userLng: "",
      desiredAddy: "",
      desiredLat: "",
      desiredLng: "",
    };
  }

  async componentDidMount() {
    let status = await userService.getUser();
    if (this.state.user !== status) {
      this.setState({ user: status });
    }
  }

  handleGeoData = (data) => {
    console.log(data);
    this.setState({
      desiredAddy: data.formatted_address,
      desiredLat: data.geometry.location.lat,
      desiredLng: data.geometry.location.lng,
    });
    this.props.history.push("/restaurants");
  };

  syncLocation = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({
          coords: {
            userLat: position.coords.latitude,
            userLng: position.coords.longitude,
          },
        });
        this.props.history.push("/restaurants");
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
                handleGeoData={this.handleGeoData}
              />
            )}
          />
          <Route
            exact
            path="/restaurants"
            render={({ history }) => (
              <ListingsPage
                handleGeoData={this.handleGeoData}
                desiredAddy={this.state.desiredAddy}
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
            render={({ history }) => (
              <RestaurantAccountPage user={this.state.user} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

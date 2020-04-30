import React from "react";
// import { Link } from "react-router-dom";
import { Button, Grid, Image, Card } from "semantic-ui-react";
import NavBar from "../../components/NavBar/NavBar";
import Geocode from "../../components/GoogleMap/Geocode";
import Map from "../../components/GoogleMap/Map";
import logo from "../../assets/navlogo.png";
import userService from "../../utils/userService";
import RestDetail from "../../components/RestDetail/RestDetail";
import { Feed } from "../RestaurantAccountPage/style";
import "./ListingsPage.css";

class ListingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      listings: [],
      selectedRestaurant: false,
      selectedRestaurantObj: {},
    };
  }

  async componentDidMount() {
    let all = await userService.getAllUsers();
    // console.log(all);
    this.setState({ listings: all });
  }

  locationText = () => {
    if (this.props.desiredAddy) {
      return <h1>Restaurants in: {this.props.desiredAddy}</h1>;
    } else {
      return <h1>Restaurants near you</h1>;
    }
  };

  clearState = () => {
    this.setState({ selectedRestaurant: false, selectedRestaurantObj: {} });
  };

  showAllListings = () => {
    let listings = this.state.listings.map((e, i) => {
      let categories = [];
      e.categories.forEach((cat) => categories.push(cat.label));

      return (
        <Card
          onClick={async () => {
            let restaurantInfo = await userService.getUserByEmail(e.email);
            console.log(restaurantInfo);
            this.setState({
              selectedRestaurant: true,
              selectedRestaurantObj: restaurantInfo,
            });
          }}
        >
          <Card.Content>
            <Card.Header>
              {i + 1}. {e.businessName}
            </Card.Header>
            <Card.Meta>{categories.join(", ")}</Card.Meta>
            <Card.Description>{e.businessAddress}</Card.Description>
          </Card.Content>
        </Card>
      );
    });
    return listings;
  };

  dynamicRendering = () => {
    if (this.state.selectedRestaurant === false) {
      return (
        <div>
          <NavBar />
          <Grid className="borderless" celled>
            <Grid.Row>
              <Grid.Column width={8}>{this.locationText()}</Grid.Column>
              <Grid.Column width={6}>
                <Geocode handleGeoData={this.props.handleGeoData} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={11}>
                <Button>Takeout</Button>
                <Button>Delivery</Button>
                <Button>Curbside</Button>
                <Button>Special Offers</Button>
              </Grid.Column>
              <Grid.Column width={3}>
                <Button>Distance</Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={4}>
                <Button>More Features</Button>
                <Button>Open Now</Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={8}>
                <Card.Group className="listings" itemsPerRow={1}>
                  {this.showAllListings()}
                </Card.Group>
              </Grid.Column>
              <Grid.Column width={6}>
                <Map />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      );
    } else if (this.state.selectedRestaurant === true) {
      return (
        <RestDetail
          selectedRestaurantObj={this.state.selectedRestaurantObj}
          clearState={this.clearState}
        />
      );
    }
  };

  render() {
    return <div>{this.dynamicRendering()}</div>;
  }
}

export default ListingPage;

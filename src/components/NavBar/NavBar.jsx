import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { Image, Button } from "semantic-ui-react";
import userService from "../../utils/userService";

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
    };
  }

  componentDidMount() {
    let status = userService.getUser();
    console.log(status);
    this.setState({ user: status });
  }

  handleSearchChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // console.log(e.target.value);
  };

  handleLogout = () => {
    userService.logout();
    this.setState({
      user: null,
    });
  };

  responsiveNav = () => {
    if (!this.state.user) {
      return (
        <div>
          <Link to="/login">Log In</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="" onClick={this.handleLogout}>
            Log Out
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/account">
            <Button>Account</Button>
          </Link>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        {/* SUB NAV BAR BELOW */}

        <div className="ui attached stackable menu">
          <div className="ui container subNav">
            <Link to="/">
              <img className="nav-logo" src="https://i.imgur.com/ArGMEB7.png" />
            </Link>
            <Link to="/howtohelp" className="item">
              How To Help
            </Link>
            <Link to="/stayingsafe" className="item">
              Staying Safe
            </Link>
            <Link to="/registerrestaurant" className="item">
              Register restaurant
            </Link>
            <div className="right item">{this.responsiveNav()}</div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { Image, Button } from "semantic-ui-react";

class ResNavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      term: "",
    };
  }

  handleSearchChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // console.log(e.target.value);
  };

  handleSearchSubmit = () => {
    this.props.searchRequest(this.state.term);
  };

  responsiveNav = () => {};

  render() {
    return (
      <div>
        {/* SUB NAV BAR BELOW */}

        <div className="ui attached stackable menu">
          <div className="ui container subNav">
            <div>
              <Link to="/">
                <img
                  className="nav-logo"
                  src="https://i.imgur.com/ArGMEB7.png"
                />
              </Link>
            </div>
            <h3>For Restaurant Owners</h3>
            <Link to="/account" className="item">
              Your Business
            </Link>
            <Link to="/preview" className="item">
              Preview
            </Link>
            <div className="right item">
              <Link to="/logout">
                <Button>Log Out</Button>
              </Link>
            </div>
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

export default ResNavBar;

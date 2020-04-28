import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={({ history }) => <MainPage />} />
        </Switch>
      </div>
    );
  }
}

export default App;

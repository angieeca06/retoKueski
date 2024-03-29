import React from "react";
import Login from "./component/login";
import Register from "./component/Register";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Goal from "./component/Goal";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: false
    };
  }

  componentWillUpdate() {
    const token = localStorage.getItem("token");
    this.authListener(token);
  }

  authListener = token => {
    if (token) {
      this.setState({ user: true });
    } else {
      this.setState({ user: false });
    }
  };

  render() {
    return (
      <HashRouter basename="/">
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => <Login />} />
            <Route exact path="/Register" render={() => <Register />} />
            <Route exact path="/Home" render={() => <Home />} />
            <Route exact path="/Goal" render={() => <Goal />} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
// import LoginInEmailPassword from "./components/LoginInEmailPassword"
import LoginWithEmail from "./components/LoginInEmailPassword";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage accountCreated={true} />
          </Route>
          <Route exact path="/signup">
            <LoginWithEmail accountCreated={false} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import LoginPage from "./components/LoginPage";
import LoginInEmailPassword from "./components/LoginInEmailPassword";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <LoginPage accountCreated={true} />
          </Route>
          <Route exact path="/signup">
            <LoginInEmailPassword accountCreated={false} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

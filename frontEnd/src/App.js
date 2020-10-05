import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import TextField from "@material-ui/core/TextField";

import "./LoginInEmailPassword.css";
import { AuthContext } from "../AuthContext";

function LoginWithEmail({ accountCreated }) {
  const { createUserWithEmail, signInWithEmail } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [accountCreated, setAccountCreated] = useState(true);

  const history = useHistory();

  const submitForm = async (event) => {
    event.preventDefault();

    if (accountCreated === true) {
      signInWithEmail(email, password)
        .then((data) => history.push("/"))
        .catch((error) => console.log(error));
    } else {
      createUserWithEmail(email, password)
        .then(() => history.push("/"))
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={submitForm}>
        <TextField
          type="email"
          label="Email"
          onChange={(event) => setEmail(event.target.value)}
          variant="outlined"
          required
        />
        <TextField
          type="password"
          label="Password"
          onChange={(event) => setPassword(event.target.value)}
          variant="outlined"
          required
        />
        <button type="submit">
          {accountCreated ? "Sign In" : "Create Account"}
        </button>
      </form>
      {accountCreated === true ? (
        <div className="new-account-container">
          <span>{"New Here? "}</span>
          <Link className="new-account-link" to="/signup">
            Create an Account
          </Link>
        </div>
      ) : (
        <div className="new-account-container">
          <span>Already Have an Account?</span>
          <Link className="new-account-link" to="/login">
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
}
export default LoginWithEmail;

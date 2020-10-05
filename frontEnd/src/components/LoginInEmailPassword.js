import React, { useContext, useState } from "react";

import TextField from "@material-ui/core/TextField";

import { AuthContext } from "../AuthContext";

function LoginWithEmail({ accountCreated }) {
  const { createUserWithEmail, signInWithEmail } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = async (event) => {
    event.preventDefault();

    if (accountCreated) {
      signInWithEmail(email, password)
        // .then((data) => history.push("/"))
        .catch((error) => console.log(error));
    } else {
      createUserWithEmail(email, password)
        // .then(() => history.push("/"))
        .catch((error) => console.log(error));
    }
  };

  return (
    <div>
      <form onSubmit={submitForm}>
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
      {accountCreated ? (
        <div>
          <span>Need an account?</span>
          <div>Create an Account</div>
        </div>
      ) : (
        <div>
          <span>Already Have an Account?</span>
          <div>Sign In</div>
        </div>
      )}
    </div>
  );
}

export default LoginWithEmail;

import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import TextField from "@material-ui/core/TextField";

import { AuthContext } from "../AuthContext";

function LoginWithEmail() {
  const { createUserWithEmail, signInWithEmail } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountCreated, setAccountCreated] = useState(true);

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
    <Wrapper>
      <StyledForm onSubmit={submitForm}>
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
      </StyledForm>
      {accountCreated === true ? (
        <NewAccountContainer>
          <span>{"New Here? "}</span>
          <StyledLink to="/signup">Create an Account</StyledLink>
        </NewAccountContainer>
      ) : (
        <NewAccountContainer>
          <span>Already Have an Account?</span>
          <StyledLink to="/login">Sign In</StyledLink>
        </NewAccountContainer>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80vh;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 1px solid black;
  border-radius: 6px;
  padding: 0 16px;
  margin-bottom: 50px;
  height: 40%;
  width: 400px;
`;

const NewAccountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 6px;
  height: 65px;
  width: 355px;
`;

const StyledLink = styled(Link)`
  color: #0366d6;
  text-decoration: underline;
  padding-left: 10px;
`;

export default LoginWithEmail;

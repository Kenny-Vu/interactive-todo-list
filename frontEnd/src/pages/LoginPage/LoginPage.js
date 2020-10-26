import React from "react";
import "./LoginPage.css";
import Login from "../../components/LoginGoogle";
import LoginWithEmail from "../../components/LoginInEmailPassword";

const LoginPage = () => {
  return (
    <>
      <div className="login-page-container">
        <div className="avatar-container">
          <div className="avatar">Insert Avatar</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="form-container">
          <form>
            <Login />
            <LoginWithEmail accountCreated={true} />
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

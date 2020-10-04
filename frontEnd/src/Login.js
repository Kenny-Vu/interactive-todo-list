import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { database } from "firebase";

function Login() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const { signInWithGoogle } = useContext(AuthContext);

  function handleGoogleSignIn() {
    signInWithGoogle()
      .then((data) => {
        console.log(database);
        return fetch("/user", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            displayName: data.user.displayName,
            email: data.user.email,
            photoURL: data.user.photoURL,
          }),
        });
      })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setLoggedIn(true);
      });
  }

  return (
    <div>
      <button onClick={handleGoogleSignIn}> Sign In with Google</button>
      {/* <div id="firebaseui-auth-container"></div> */}
    </div>
  );
}

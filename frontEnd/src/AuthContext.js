import React, { createContext, useState, useEffect } from "react";

import withFirebaseAuth from "react-with-firebase-auth";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const AuthContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyAGl1iHM0wWkkL3WiSVDabvJTGJgBnKaEk",
  authDomain: "interactive-to-do-list.firebaseapp.com",
  databaseURL: "https://interactive-to-do-list.firebaseio.com",
  projectId: "interactive-to-do-list",
  storageBucket: "interactive-to-do-list.appspot.com",
  messagingSenderId: "429416368179",
  appId: "1:429416368179:web:fc9fca3380f083dd3cbb46",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

function createUserWithEmail(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}

function signInWithEmail(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

const AuthProvider = ({ children, signOut, user }) => {
  const [appUser, setAppUser] = useState(null);
  // const [message, setMessage] = useState("");

  const handleSignOut = () => {
    signOut();
    setAppUser({});
  };

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const signInWithGoogle = () => {
    return firebase.auth().signInWithRedirect(googleProvider);
  };

  useEffect(() => {
    if (user && Object.keys(user).length > 0) {
      setAppUser(user);
    }
    console.log(appUser, "---APP USER");
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        appUser,
        createUserWithEmail,
        signInWithEmail,
        signInWithGoogle,
        handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default withFirebaseAuth({
  firebaseAppAuth,
})(AuthProvider);

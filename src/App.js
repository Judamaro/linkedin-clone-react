import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";

import { Feed } from "./components/Feed";
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { Sidebar } from "./components/Sidebar";
import { Widgets } from "./components/Widget";

import { selectUser, login, logout } from "./features/useSlice";

import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            name: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="App">
      {user ? (
        <>
          <Header />
          <div className="wrapper">
            {/*Sidebar Component*/}
            <Sidebar />
            {/*Feed Component*/}
            <Feed />
            {/*Widgets Component*/}
            <Widgets />
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;

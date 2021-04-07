import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";

import { Feed } from "./components/Feed";
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { Sidebar } from "./components/Sidebar";
import { Widgets } from "./components/Widget";

import { selectUser } from "./features/useSlice";

function App() {
  const user = useSelector(selectUser);

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

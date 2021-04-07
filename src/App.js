import React, { useState } from "react";
import "./App.css";
import { Feed } from "./components/Feed";
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { Sidebar } from "./components/Sidebar";
import { Widgets } from "./components/Widget";

function App() {
  const [user, setUser] = useState(false);

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

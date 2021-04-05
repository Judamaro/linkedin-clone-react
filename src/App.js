import React from "react";
import "./App.css";
import { Feed } from "./components/Feed";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Widgets } from "./components/Widget";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="wrapper">
        {/*Sidebar Component*/}
        <Sidebar />
        {/*Feed Component*/}
        <Feed />
        {/*Widgets Component*/}
        <Widgets/>
      </div>
    </div>
  );
}

export default App;

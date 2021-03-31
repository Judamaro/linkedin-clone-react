import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="wrapper">
        {/*Sidebar */}
        <Sidebar />
        {/*Feed */}
        {/*Widgets */}
      </div>
    </div>
  );
}

export default App;

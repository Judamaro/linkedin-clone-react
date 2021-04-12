import React from "react";
import { HeaderIcons } from "./headerIcons";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import HomeIcon from "@material-ui/icons/Home";
import ChatIcon from "@material-ui/icons/Chat";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";
import SearchIcon from "@material-ui/icons/Search";

import { auth } from "../../firebase";

import "./styles.css";

export const Header = () => {

  const logout = () => {
    auth.signOut();
  }

  return (
    <header className="header">
      <nav className="nav">
        <LinkedInIcon className="logo" />

        <div className="search_box">
          <SearchIcon />
          <input type="text" placeholder="Search"></input>
        </div>

        <HeaderIcons Icon={HomeIcon} Title="Inicio" />
        <HeaderIcons Icon={SupervisorAccountIcon} Title="Mi Red" />
        <HeaderIcons Icon={BusinessCenterIcon} Title="Empleos" />
        <HeaderIcons Icon={ChatIcon} Title="Mensajes" />
        <HeaderIcons Icon={NotificationsIcon} Title="Notificaciones" />

        <HeaderIcons Profile Title="Yo" Logout={logout}/>

        <HeaderIcons Icon={AppsIcon} Title="Productos" />

        <HeaderIcons Text="Prueba Gratis Premium durante 1 mes" />
      </nav>
    </header>
  );
};

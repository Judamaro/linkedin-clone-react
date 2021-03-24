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

import "./styles.css";

export const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <LinkedInIcon className="logo" />

        <div className="search_box">
          <SearchIcon />
          <input type="text" placeholder="Search"></input>
        </div>

        <HeaderIcons Icon={HomeIcon} Title="Home" />
        <HeaderIcons Icon={SupervisorAccountIcon} Title="MyNet" />
        <HeaderIcons Icon={BusinessCenterIcon} Title="Jobs" />
        <HeaderIcons Icon={ChatIcon} Title="Chat" />
        <HeaderIcons Icon={NotificationsIcon} Title="Notifications" />

        <HeaderIcons Title="Me" />

        <HeaderIcons Icon={AppsIcon} Title="Apps" />

        <HeaderIcons Title="Prueba Gratis Premium durante 1 mes" />
      </nav>
    </header>
  );
};

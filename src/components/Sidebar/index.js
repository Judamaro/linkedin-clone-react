import React from "react";
import { Avatar } from "@material-ui/core";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import AddIcon from "@material-ui/icons/Add";
import "./styles.css";

export const Sidebar = () => {

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );

  return (
    <div className="sidebar_">
      <div className="sidebar_top">
        <img
          src="https://media.istockphoto.com/vectors/abstract-creative-background-vector-id1039532442?k=6&m=1039532442&s=612x612&w=0&h=yDIQZo3NdoBuGN6GZTiJitCPQGz2fAOBW-cvGsa8D4U="
          alt="Profile"
        />

        <Avatar className="sidebar_avatar" />

        <h3>Juan Daniel Mayorga Rodriguez</h3>
        <h4>judamaro97@gmail.com</h4>
        <div className="sidebar_contents">
          <div className="sidebar_cont">
            <p>Contacto</p>
            <p>2</p>
          </div>
          <div className="sidebar_cont">
            <p>
              <a href="#">
                Acceder a información y <br />
                herramientas exclusivas <br />
                {""}
                <b>Prueba Premium gratis durante 1 mes</b>
                {""}
              </a>
            </p>
          </div>
          <div className="sidebar_cont">
            <div className="sidebar_bookmark">
              <TurnedInIcon className="sidebar_icons_bookmark" />
              <p>Bookmark</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="sidebar_bottom">
        <ul>
          <li>
            <p>Grupos</p>
          </li>
          <li>
            <p>Eventos</p>
          </li>
          <li>
            <p>Hashtag seguidores</p>
          </li>
        </ul>
        <AddIcon className="sidebar_icon_bottom" />
      </div>
      <div className="sidebar_recent">
          <p>Recientes</p>
          {recentItem("React.js")}
          {recentItem("Node.js")}
          {recentItem("Firebase")}
          {recentItem("Graphql")}
          {recentItem("Developer")}
          {recentItem("Design")}
      </div>
    </div>
  );
};

import React, { useState } from "react";
import "./styles.css";
import { InputIcon } from "./inputIcon";
import { Post } from "./post";

import CreateIcon from "@material-ui/icons/Create";
import PhotoIcon from "@material-ui/icons/Photo";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventIcon from "@material-ui/icons/Event";
import VerticalSplitIcon from "@material-ui/icons/VerticalSplit";

export const Feed = () => {
  const [input, setInput] = useState("");

  const sendPost = (e) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed_input_container">
        <div className="feed_input">
          <CreateIcon className="feed_icon" />
          <form>
            <input
              type="text"
              placeholder="Crear publicación"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Enviar
            </button>
          </form>
        </div>
        <div className="feed_input_icons">
          {/*ICONS*/}
          <InputIcon Icon={PhotoIcon} Title="Foto" Color="#70b5f9" />
          <InputIcon Icon={YouTubeIcon} Title="Video" Color="#7fc15e" />
          <InputIcon Icon={EventIcon} Title="Evento" Color="#e7a33e" />
          <InputIcon
            Icon={VerticalSplitIcon}
            Title="Escribir Articulo"
            Color="#f5987e"
          />
        </div>
      </div>
      {/*POST*/}
      <Post
        name="Judamaro"
        description="Componete post de prueba"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        photoURL="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
        images="https://www.acueducto.com.co/guatoc/Archivos/resources/seccion_gerente/images/Swan_large.jpg"
      />
      <Post
        name="Judamaro"
        description="Componete post de prueba"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        photoURL="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
        images="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
      />
      <Post
        name="Judamaro"
        description="Componete post de prueba"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        photoURL="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
        images="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
      />
      <Post
        name="Judamaro"
        description="Componete post de prueba"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        photoURL="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
        images="https://www.istockphoto.com/resources/images/HomePage/Hero/950473038.jpg"
      />
    </div>
  );
};

import React, { useState } from "react";
import "./styles.css";
import { InputIcon } from "./inputIcon";

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
          <InputIcon 
            Icon={PhotoIcon} 
            Title="Foto" 
            Color="#70b5f9" />
          <InputIcon 
            Icon={YouTubeIcon} 
            Title="Video" 
            Color="#7fc15e" />
          <InputIcon 
            Icon={EventIcon} 
            Title="Evento" 
            Color="#e7a33e" />
          <InputIcon
            Icon={VerticalSplitIcon}
            Title="Escribir Articulo"
            Color="#f5987e"
          />
        </div>
      </div>
    </div>
  );
};

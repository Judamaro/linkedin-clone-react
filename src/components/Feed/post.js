import React from "react";
import { Avatar } from "@material-ui/core";
import "./styles.css";
import { InputIcon } from "./inputIcon";

import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

export const Post = ({ name, description, message, photoUrl, images }) => {
  return (
    <div className="post">
      <div className="post-header">
        <Avatar src={photoUrl} />
        <div className="post-info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post-body">
        <p>{message}</p>
        {images ? <img src={images} alt="Post Images"/> : ""}
      </div>
      <div className="post-buttom">
          <InputIcon Icon={ThumbUpAltOutlinedIcon} Title="Recomendar" Color='gray'/>
          <InputIcon Icon={ChatOutlinedIcon} Title="Comentar" Color='gray'/>
          <InputIcon Icon={ShareOutlinedIcon} Title="Compartir" Color='gray'/>
          <InputIcon Icon={SendOutlinedIcon} Title="Enviar" Color='gray'/>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import { selectUser, login } from "../../features/useSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth, storage } from "../../firebase";

import TurnedInIcon from "@material-ui/icons/TurnedIn";
import AddIcon from "@material-ui/icons/Add";

import "./styles.css";

export const Sidebar = () => {
  const user = useSelector(selectUser);
  const [imgURL, setimgURL] = useState("");
  const dispatch = useDispatch();

  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  const updateEmail = (url) => {
    auth.currentUser
      .updateProfile({
        displayName: user.name,
        photoURL: url,
      })
      .then(() => {
        dispatch(login({
          email: user.email,
          uid: user.uid,
          name: user.name,
          photoURL: url
        }))
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    const storeRef = storage.ref(`/avatar/${file.name}`).put(file);
    storeRef.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("avatar")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            updateEmail(url);
          });
      }
    );
  };

  return (
    <div className="sidebar_">
      <div className="sidebar_top">
        <img
          src="https://media.istockphoto.com/vectors/abstract-creative-background-vector-id1039532442?k=6&m=1039532442&s=612x612&w=0&h=yDIQZo3NdoBuGN6GZTiJitCPQGz2fAOBW-cvGsa8D4U="
          alt="Profile"
        />

        <Avatar src={user.photoURL} className="sidebar_avatar">
          {user.email[0]}
        </Avatar>
        <input type="file" className="files" onChange={handlePhoto} />
        <h3>{user.name}</h3>
        <h4>{user.email}</h4>
        <div className="sidebar_contents">
          <div className="sidebar_cont">
            <p>Contacto</p>
            <p>2</p>
          </div>
          <div className="sidebar_cont">
            <p>
              <a href="#">
                Acceder a informaci??n y <br />
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

import React from "react";

import "./styles.css";

import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

export const Widgets = () => {
  const Articulo = (title, subtitle) => {
    return (
      <div className="widgets-article">
        <div className="widgets-left">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets-right">
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets-header">
        <h2>Lo mas visto</h2>
        <InfoIcon />
      </div>
      {Articulo("Titulo Articulo Prueba 1", "Texto articulo prueba")}
      {Articulo("Titulo Articulo Prueba 2", "Texto articulo prueba")}
      {Articulo("Titulo Articulo Prueba 3", "Texto articulo prueba")}
      {Articulo("Titulo Articulo Prueba 4", "Texto articulo prueba")}
    </div>
  );
};

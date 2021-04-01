import React from "react";
import './styles.css';

export const InputIcon = ({ Icon, Title, Color }) => {
  return (
    <div className="input_icon">
      <Icon style={{ color: Color }} />
      <h3>{Title}</h3>
    </div>
  );
};

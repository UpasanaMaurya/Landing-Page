import React from "react";
import "./Button.css";
const Button = ({ label }) => {
  return (
    <div>
      <button className="btn">{label}</button>
    </div>
  );
};

export default Button;

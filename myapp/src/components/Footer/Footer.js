import React from "react";
import "./Footer.css";

const Footer = props => (
  <div className="Footer">
    <div className={props.alert} role="alert" >
    <h2 className={props.alert} role="alert">{props.winLose}</h2>
    </div>
  </div>
);

export default Footer;

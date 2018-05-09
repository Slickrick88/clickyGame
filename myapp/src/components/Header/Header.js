import React from "react";
import "./Header.css";


const Header = props => (
  <nav class="navbar navbar-default">
    <div className="left-Header">
    <h2>{props.title}</h2>
    </div>

    <div className="content">
    <div className="right-Header">
    <h2>Score: {props.score} | Top Score: {props.topScore}</h2>
    </div>

    </div>
  </nav>
);

export default Header;

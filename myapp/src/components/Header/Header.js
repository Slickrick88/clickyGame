import React from "react";
import "./Header.css";
let score = 0;
let topScore = 0;

const Header = props => (
  <div className="Header">
    <div className="left-Header">
    <h2>Left Header Content</h2>
    </div>

    <div className="content">Header Content
    <div className="right-Header">
    <h2>Score: {score} | Top Score: {topScore}</h2>
    </div>

    </div>
  </div>
);

export default Header;

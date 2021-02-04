import React from "react";
import { Link } from "react-router-dom";

const Header = ({ title, icon }) => {
  return (
    <div className="navbar bg-primary">
      <h1>{title}</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/browse">Browse</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

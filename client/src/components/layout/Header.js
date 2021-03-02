import React from "react";
import { Link } from "react-router-dom";

const Header = ({ title, icon }) => {
  return (
    <div className="bg-primary">
      <h1 className="pl-5">{title}</h1>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/add">
            Add
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/browse">
            Browse
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

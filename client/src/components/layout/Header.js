import React from "react";

const Header = ({ title, icon }) => {
  return (
    <div className="navbar bg-primary">
      <h1>{title}</h1>
    </div>
  );
};

export default Header;

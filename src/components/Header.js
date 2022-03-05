import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

const Header = ({ handleChange }) => {
  // ffb72b abe06a 68b28f
  const [active, setActive] = useState(0);
  const header = [
    { navItemName: "Home", navPath: "/" },
    { navItemName: "Recipe", navPath: "recipes" },
    { navItemName: "About", navPath: "about" },
  ];
  return (
    <header>
      <div className="logo">
        <img src={logo} />
        <div className="detail">
          <p>Table Treats</p>
          <span>Unleashing The best cook in you</span>
        </div>
      </div>
      <ul>
        {header.map((item, index) => (
          <Link
            className="link"
            to={item.navPath}
            onClick={() => setActive(index)}
            key={index}
          >
            <li className={`${index === active ? "active" : ""}`}>
              {item.navItemName}
            </li>
          </Link>
        ))}
      </ul>
      <div className="empty-container" />
    </header>
  );
};
export default Header;

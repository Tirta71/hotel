import React from "react";
import { useLocation } from "react-router-dom";
import { menuItems } from "../../data/dataNavbar";

function MyNavbar() {
  const location = useLocation();

  return (
    <div id="site-menu">
      <nav className="nav-menu">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.path}
              className={`menu-item ${
                location.pathname === item.path ? "current-menu-item" : ""
              }`}
            >
              <a href={item.path}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MyNavbar;

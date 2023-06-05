import React from "react";
import { NavLink } from "react-router-dom";
import "./navbarAdmin.css";

export default function NavbarAdmin() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink
            exact
            to="/"
            className="navbar-link"
            activeClassName="active-NavbarKu"
          >
            Home
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/admin-tambah"
            className="navbar-link"
            activeClassName="active-NavbarKu"
          >
            Tambah Menu Item
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/tampil-contact"
            className="navbar-link"
            activeClassName="active-NavbarKu"
          >
            Tampil contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

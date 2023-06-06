import React from "react";
import { NavLink } from "react-router-dom";
import "./navbarAdmin.css";

export default function NavbarAdmin() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink
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
        <li className="navbar-item">
          <NavLink
            to="/admin-tambah-kamar"
            className="navbar-link"
            activeClassName="active-NavbarKu"
          >
            Tambah Kamar
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/admin-checker"
            className="navbar-link"
            activeClassName="active-NavbarKu"
          >
            Admin Cek Tiket
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

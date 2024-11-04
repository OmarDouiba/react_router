import React from 'react';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <div className="header-container">
      <nav className="header-nav">
        <NavLink
          to="/"
          active
          end
          className="nav-link"
          activeClassName="active-link"
        >
          Home
        </NavLink>
        <NavLink
          to="/product"
          className="nav-link"
          activeClassName="active-link"
        >
          Product List
        </NavLink>
        <NavLink
          to="/productinfo"
          className="nav-link"
          activeClassName="active-link"
        >
          Product
        </NavLink>
        <NavLink
          to="/contact"
          className="nav-link"
          activeClassName="active-link"
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
}

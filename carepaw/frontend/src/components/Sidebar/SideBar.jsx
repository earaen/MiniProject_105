import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCalendarCheck,
  faListCheck,
  faPaw,
  faCircleUser,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
import "./SideBar.css";

function SideBar() {
  const location = useLocation();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="sidebar">
      <div className={`drawer ${click ? "open" : ""}`}>
        <div className="menu-bar" onClick={handleClick}>
          {click ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
        <div className="logo">
          <img src="./assets/logo.png" alt="Logo" />
        </div>
        <NavLink
          exact
          to="/"
          className={`sidebar-icon ${
            location.pathname === "/" ? "selected" : "notselected"
          }`}
          onClick={closeMobileMenu}
        >
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink
          to="/mypet"
          className={`sidebar-icon ${
            location.pathname === "/mypet" ? "selected" : "notselected"
          }`}
          onClick={closeMobileMenu}
        >
          <FontAwesomeIcon icon={faPaw} />
        </NavLink>
        <NavLink
          to="/profile"
          className={`sidebar-icon ${
            location.pathname === "/profile" ? "selected" : "notselected"
          }`}
          onClick={closeMobileMenu}
        >
          <FontAwesomeIcon icon={faCircleUser} />
        </NavLink>
      </div>
    </div>
  );
}

export default SideBar;

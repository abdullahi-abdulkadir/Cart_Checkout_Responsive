
import React from "react";
import { Link } from "react-router-dom";
import "../styles/css/nav.css"
import Background from "../../assets/images/logos/Background_tailo_logo.png";
import Menu from '../../assets/images/logos/menu_tailor.png' // Ensure the path is correct

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li className="menu-left-tab">
          <img src={Menu} alt="Menu" />
        </li>
        <li className="logo-desktop">
          <img src={Background} alt="Logo" />
        </li>
        <li className="group">
          <Link to="/">HOME</Link>
          <Link to="/cart">CART</Link>
          <Link to="/profile">PROFILE</Link>
          <Link to="/signout" className="sign-out">SIGN OUT</Link>
        </li>
        <li className="menu-desktop">
          <img src={Menu} alt="Menu" />
        </li>
        <li className="logo-right-tab">
          <img src={Background} alt="Logo" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;


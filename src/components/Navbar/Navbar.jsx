import React from "react";
import style from "./index.module.css";
import { NavLink as Link } from "react-router-dom";
import { NavLink } from "../";
import { Logo } from "../../assets";
const navLinks = [
  {
    text: "Integrate Product",
    to: "/integrateproduct",
  },
  {
    text: "About Us",
    to: "/aboutus",
  },
  {
    text: "Contact Us",
    to: "/contactus",
  },
]
const Navbar = () => {
  return (
    <nav className={style.Navbar}>
      <div className={style.Navbar__logo}>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <ul className={style.Navbar__links}>
        {navLinks.map(({ text, to }) => (
          <li key={text}>
          <NavLink to={to}>     
            {text}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={style.Navbar__button}>
        <NavLink to="/signup" >
          Get Started
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;

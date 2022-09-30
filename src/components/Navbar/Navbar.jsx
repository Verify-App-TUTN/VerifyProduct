import React, { useEffect } from "react";
import style from "./index.module.css";
import { NavLink as Link } from "react-router-dom";
import { GetStarted, NavLink } from "../";
import { Logo } from "../../assets";
import { useState } from "react";
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
];
const Navbar = () => {
  const [toggleDropDown, setToggleDropDown] = useState(false);
  useEffect(() => {
    const handleScroll = (e) => {
      const nav = document.querySelector("nav");
      if (e.currentTarget.scrollY > 50) {
        nav.classList.add(style.nav__scrolled);
      } else {
        nav.classList.remove(style.nav__scrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={style.Navbar}>
      <div className={style.Navbar__logo}>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className={`${style.Navbar__links__container} ${toggleDropDown && style.Navbar__links__container__active}`}>
        <ul className={style.Navbar__links}>
          {navLinks.map(({ text, to }) => (
            <li key={text}>
              <NavLink to={to}>{text}</NavLink>
            </li>
          ))}
        </ul>
        <GetStarted className={style.Navbar__button} />
      </div>
      <div
        className={`${style.Navbar__hamburgermenu} ${
          toggleDropDown && style.Navbar__hamburgermenu__active
          }`}
        onClick={() => setToggleDropDown(toggle => !toggle)}
      ></div>
    </nav>
  );
};

export default Navbar;

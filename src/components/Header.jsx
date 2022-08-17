import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./../App.css";

const Header = ({
  img,
  link1,
  link2,
  link3,
  link4,
  buttonText,
  button,
  div,
}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", (e) => setIsNavOpen(false));
  return (
    <Nav state={isNavOpen ? 1 : 0} className="container">
      <Link to="/">
        <div className="brand">
          <img src={img} alt="logo" />
        </div>
      </Link>
      <div className="toggle">
        {isNavOpen ? (
          <FaTimes className="cancel" onClick={() => setIsNavOpen(false)} />
        ) : (
          <FaBars
            onClick={(e) => {
              e.stopPropagation();
              setIsNavOpen(true);
            }}
          />
        )}
      </div>
      <ul className={`headerLinks ${isNavOpen ? "show" : ""}`}>
        <li>{link1}</li>
        <li>{link2}</li>
        <li>{link3}</li>
        <li className="none">{link4}</li>
      </ul>
      {button && (
        <Link to="/verifyform" className="button">
          <button className="btn">{buttonText}</button>
        </Link>
      )}
      {div && <div className="lastDiv"></div>}
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  .brand {
    img {
      width: 80%;
    }
  }
  .headerLinks {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    li {
      color: #001a13;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
    }
    .none {
      display: none !important;
    }
  }
  .toggle {
    display: none;
  }
  button {
    background-color: #009f78;
    border-color: #009f78;
  }
  @media screen and (max-width: 1299px) {
    position: relative;
    z-index: 999;
    button,
    .lastDiv,
    .button {
      display: none !important;
    }
    .toggle {
      display: block;
      z-index: 51;
      svg {
        color: #292d32;
        font-size: 1.5rem;
      }
      .cancel {
        color: #ffffff !important;
      }
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
    .headerLinks {
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "40%" : "0%")};
      background-color: #ffffff;
      opacity: 0;
      visibility: hidden;
      z-index: 50;
      transition: all 0.7s ease-in-out;
      flex-direction: column;
      text-align: center;
      height: 90vh !important;
      background-color: #009f78;
      .none {
        display: flex !important;
      }
      li {
        padding-top: 9vh;
        color: #ffffff;
      }
    }
  }
  @media screen and (max-width: 395px) {
    .brand {
      width: 80%;
      img {
        width: 60%;
      }
    }
    .headerLinks {
      width: ${({ state }) => (state ? "50%" : "0%")};
      li {
        font-size: 16px;
      }
    }
  }
`;

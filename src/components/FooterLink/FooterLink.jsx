import React from "react";
import { Link } from "react-router-dom";
import style from "./index.module.css";

const FooterLink = ({ heading, links }) => {
  
  return (
    <div className={style.FooterLink}>
      <h1 className={style.FooterLink__heading}>{ heading }</h1>
      <div className={style.FooterLink__links}>
        {links.map(({ text, to }) => (
          <div className={style.FooterLink__links__link} key={text}>
            <Link to={to}>{text}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FooterLink;

import React from "react";
import style from "./index.module.css";

const FooterLink = () => {
  return (
    <div className={style.FooterLink}>
      <h1 className={style.FooterLink__heading}>Home</h1>
      <div className={style.FooterLink__links}>
          <span>About Us</span>
          <span>Contact US</span>
      </div>
    </div>
  );
}

export default FooterLink;

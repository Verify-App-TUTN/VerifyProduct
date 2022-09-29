import React from "react";
import { GreenLogo } from "../../assets";
import FooterLink from "../FooterLink/FooterLink";
import style from "./index.module.css";

const Footer = () => {
  return (
    <footer className={style.Footer}>
      <div className={style.Footer__content}>
        <div className={style.Footer__content__left}>
          <div className={style.Footer__content__left__logo}></div>
          <div className={style.Footer__content__left__description}>
            <GreenLogo />
            <p>
              Get access to select your choice product from our list of Product
              Categories Get access to select your choice product from our list
              of Product Categories Get access
            </p>
          </div>
        </div>
        <div className={style.Footer__content__right}>
          <div className={style.Footer__content__right__links}>
            <div className={style.Footer__content__right__links__heading}>
              <h3>Links</h3>
            </div>
            <div className={style.Footer__content__right__links__list}>
              <FooterLink />
            </div>
          </div>
          <div className={style.Footer__content__right__social}>
            <div className={style.Footer__content__right__social__heading}>
              <h3>Social</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={style.Footer__bottom}></div>
    </footer>
  );
};

export default Footer;

import React from "react";
import style from "./index.module.css";

const Footer = () => {
  return (
    <footer className={style.Footer}>
      <div className={style.Footer__content}>
        <div className={style.Footer__content__left}>
          <div className={style.Footer__content__left__logo}>

          </div>
          <div className={style.Footer__content__left__description}>
            <p>
              ff
            </p>
          </div>
        </div>
        <div className={style.Footer__content__right}>
          <div className={style.Footer__content__right__links}>
            <div className={style.Footer__content__right__links__heading}>
              <h3>Links</h3>
            </div>
            <div className={style.Footer__content__right__links__list}>
              <ul>
                <li>Home</li>
                <li>Features</li>
                <li>Blog</li>
                <li>FAQ</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className={style.Footer__content__right__social}>
            <div className={style.Footer__content__right__social__heading}>
              <h3>Social</h3>
          </div>
        </div>
        </div>
      </div>
      <div className={style.Footer__bottom}>
      </div>
    </footer>
  );
}

export default Footer;

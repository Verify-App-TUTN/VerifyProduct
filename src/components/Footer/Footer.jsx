import React, { useState } from "react";
import {
  FaceBook,
  GreenLogo,
  Instagram,
  LinkedIn,
  Twitter,
} from "../../assets";
import { isEmail } from "../../utils/functions";
import { useInput } from "../../utils/hooks";
import FooterLink from "../FooterLink/FooterLink";
import style from "./index.module.css";
const footDetails = [
  {
    heading: "Home",
    links: [
      { text: "About Us", to: "aboutus" },
      { text: "Contact Us", to: "contactus" },
    ],
  },
  {
    heading: "Services",
    links: [
      { text: "Verify Products", to: "verifyproduct" },
      { text: "Report Product", to: "reportproduct" },
      { text: "Product Category", to: "productcategory" },
      { text: "Integrate Product", to: "integrateproduct" },
    ],
  },
  {
    heading: "Legals",
    links: [
      { text: "Terms of Use", to: "termsofuse" },
      { text: "Privacy Policy", to: "privacypolicy" },
    ],
  },
];
const Footer = () => {
  const [email, setEmailChange] = useInput("");
  const [invalidEmail, setInvalidEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEmail(email)) {
      setInvalidEmail(true);
      setTimeout(() => {
        setInvalidEmail(false);
      }, 3000);
    } else {
      window.location.reload();
    }
  };
  return (
    <footer className={style.Footer} id="footer">
      <div className={style.Footer__content}>
        <div className={style.Footer__content__left}>
          <div className={style.Footer__content__left__logo}>
            <GreenLogo />
          </div>
          <div className={style.Footer__content__left__description}>
            <p>
              Let us join hands to eradicate counterfeit products from circulation.
            </p>
          </div>
        </div>
        {/* <div className={style.Footer__content__right}>
          <div className={style.Footer__content__right__links}>
            {footDetails.map((props) => (
              <FooterLink {...props} key={props.heading} />
            ))}
          </div>
          <div className={style.Footer__content__right__social}>
            <h3 className={style.Footer__content__right__social__heading}>
              Social Media
            </h3>
            <div className={style.Footer__content__right__social__links}>
              <LinkedIn
                className={style.Footer__content__right__social__links__icon}
              />
              <Twitter
                className={style.Footer__content__right__social__links__icon}
              />
              <Instagram
                className={style.Footer__content__right__social__links__icon}
              />
              <FaceBook
                className={style.Footer__content__right__social__links__icon}
              />
            </div>
          </div>
        </div> */}
      </div>
      <div className={style.Footer__bottom}>
        <label htmlFor="emailInput" className={style.Footer__bottom__heading}>
          Get Updated. Join Our Newsletter
        </label>
        <form className={style.Footer__bottom__input__container}
          onSubmit={handleSubmit}
        >
          <input
            value={email}
            onChange={setEmailChange}
            id="emailInput"
            type="email"
            placeholder="Enter your email address"
            className={style.Footer__bottom__input}
          />
          <button
            className={style.Footer__bottom__input__button}
            type="submit"
          >
            Subscribe
          </button>
        </form>
        <p
          className={`${style.Footer__bottom__error__hidden} ${
            invalidEmail && style.Footer__bottom__error
          } `}
        >
          Please enter a valid email address
        </p>
      </div>
      <div className={style.Footer__bottom__copy}>
        {" "}
        Verduct 2022 All rights reserved{" "}
      </div>
    </footer>
  );
};

export default Footer;

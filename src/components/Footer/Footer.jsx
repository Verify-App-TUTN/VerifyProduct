import React from "react";
import { FaceBook, GreenLogo, Instagram, LinkedIn, Twitter } from "../../assets";
import FooterLink from "../FooterLink/FooterLink";
import style from "./index.module.css";
const footDetails = [
  {
    heading: "Home",
    links: [{text:"About Us", to: "aboutus"}, {text:"Contact Us", to: "contactus"}]
  },
  {
    heading: "Services",
    links: [{ text: "Verify Products", to: "verifyproduct" }, { text: "Report Product", to: "reportproduct" }, { text: "Product Category", to: "productcategory" }, { text: "Integrate Product", to: "integrateproduct" }],
  },
  {
    heading: "Legals",  
    links: [{ text: "Terms of Use", to: "termsofuse" }, { text: "Privacy Policy",to:"privacypolicy" }]
  }
  ]
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
              {footDetails.map((props) => (<FooterLink {...props} key={props.heading} />))}
          </div>
          <div className={style.Footer__content__right__social}>
            <h3 className={style.Footer__content__right__social__heading}>
              Social Media
            </h3>
            <div className={style.Footer__content__right__social__links}>
              <LinkedIn className={style.Footer__content__right__social__links__icon} />
              <Twitter className={style.Footer__content__right__social__links__icon} />
              <Instagram className={style.Footer__content__right__social__links__icon} />
              <FaceBook  className={style.Footer__content__right__social__links__icon}/>
            </div>
          </div>
        </div>
      </div>
      <div className={style.Footer__bottom}></div>
    </footer>
  );
};

export default Footer;

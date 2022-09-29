import React from "react";
import GetStarted from "../GetStarted/GetStarted";
import style from "./index.module.css";
const Details = ({ reversed, image, title, description }) => {
  return (
    <div className={`${style.Details} ${reversed && style.Details__reverse}`}>
      <img src={image} className={style.Details__image} alt={title} />
      <div className={style.Details__content}>
        <h3 className={style.Details__content__title}>{title}</h3>
        <p className={style.Details__content__description}>{description}</p>
        <GetStarted className={style.Details__content__button} />
      </div>
    </div>
  );
};

export default Details;

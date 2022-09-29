import React from "react";
import { AboutImage } from "../../assets";
import GetStarted from "../GetStarted/GetStarted";
import style from "./index.module.css";
const Details = () => {
  return (
    <div className={style.Details}>
      <img src={AboutImage} className={style.Details__image} alt="description" />
      <div className={style.Details__content}>
        <h3 className={style.Details__content__title}>We offer a close range monitoring system.</h3>
        <p className={style.Details__content__description}>Report Fake Products You’ve Come Across With Report Fake Products You’ve Come Across With Report Fake Products You’ve Come Across With</p>
        <GetStarted className={style.Details__content__button} />
      </div>
    </div>
  );
}

export default Details;

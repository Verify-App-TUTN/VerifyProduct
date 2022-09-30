import React from "react";
import style from "./index.module.css";

const FeatureCard = ({ children: Children, heading, description }) => {
  return (
    <div className={style.FeatureCard}>
      <div className={style.FeatureCard__icon}>{<Children />}</div>
      <div className={style.FeatureCard__heading}>{heading}</div>
      <div className={style.FeatureCard__description}>{description}</div>
    </div>
  );
};

export default FeatureCard;

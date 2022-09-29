import React from "react";
import { GreenLogo } from "../../assets";
import FeatureCards from "../FeatureCards/FeatureCards";
import style from "./index.module.css";


const Features = () => {

  return (
    <div className={style.Features}>
      <span className={style.Features__heading}><h3>Why</h3> <GreenLogo /> <h3>?</h3></span>
      <FeatureCards />
    </div>
  );
}

export default Features;

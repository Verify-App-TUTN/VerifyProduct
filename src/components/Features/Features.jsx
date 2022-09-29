import React from "react";
import { GreenLogo } from "../../assets";
import FeatureCards from "../FeatureCards/FeatureCards";
import style from "./index.module.css";


const Features = () => {

  return (
    <div className={style.Features}>
      <div className={style.Features__heading}><h3>Why</h3> <GreenLogo /> <h3>?</h3></div>
      <FeatureCards />
    </div>
  );
}

export default Features;

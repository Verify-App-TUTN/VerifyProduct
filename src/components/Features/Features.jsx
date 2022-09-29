import React from "react";
import { GreenLogo } from "../../assets";
import style from "./index.module.css";


const Features = () => {

  return (
    <div className={style.Features}>
      <span className={style.Features__heading}><h3>Why</h3> <GreenLogo /> <h3>?</h3></span>
      <div className={style.Features__cards}>

      </div>
    </div>
  );
}

export default Features;

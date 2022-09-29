import React from "react";
import { HeroIllustration } from "../../assets";
import GetStarted from "../GetStarted/GetStarted";
import style from "./index.module.css";

const Hero = () => {
  return <div className={style.Hero}>
    <div className={style.Hero__content}>
      <h1 className={style.Hero__title}>Integrate Your Products Into Our Database</h1>
      <p className={style.Hero__subtitle}>Get accesss to select your choice product from our list of Product Categories Get accesss to select your choice product from our list of Product Categories Get accesss to</p>
      <GetStarted className={style.Navbar__button} />
    </div>
    <div className={style.Hero__illustration_container}>
    <span className={style.Hero__illustration_blur}>
    </span>
      <HeroIllustration className={style.Hero__illustration} />
    </div>
  </div>;
}

export default Hero;

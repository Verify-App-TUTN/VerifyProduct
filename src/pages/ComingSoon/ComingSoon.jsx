import React from "react";
import { ComingSoonIllustration } from "../../assets";
import { Layout } from "../../components";
import style from "./index.module.css";

const ComingSoon = () => {
  return (
    <Layout className={style.ComingSoon}>
      <div className={style.ComingSoon__content}>
        <h1 className={style.ComingSoon__content__heading}>Coming Soon</h1>
        <img src={ComingSoonIllustration} alt="Coming Soon Illustration" className={style.ComingSoon__illustration} />
      </div>
    </Layout>
  );
}

export default ComingSoon;

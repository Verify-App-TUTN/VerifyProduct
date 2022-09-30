import React from "react";
import { ComingSoonIllustration } from "../../assets";
import { Layout } from "../../components";
import style from "./index.module.css";

const ComingSoon = () => {
  return (
    <Layout className={style.ComingSoon}>
      <div className={style.ComingSoon__content}>
        <img src={ComingSoonIllustration} alt="Coming Soon Illustration" className={style.ComingSoon__illustration} />
        <h1 className={style.ComingSoon__content__heading}>Coming Soon</h1>
      </div>
    </Layout>
  );
}

export default ComingSoon;

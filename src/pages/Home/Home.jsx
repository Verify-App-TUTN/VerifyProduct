import React from "react";
import { CTA, Features, Hero, Layout } from "../../components";
import style from "./index.module.css";

const Home = () => {
  return (
    <Layout className={style.Home}>
      <Hero />
      <Features />
      <CTA />
    </Layout>
  );
}

export default Home;

import React from "react";
import { About, CTA, Features, Hero, Layout } from "../../components";
import style from "./index.module.css";

function Home() {
  return (
    <Layout className={style.Home}>
      <Hero />
      <Features />
      <About />
      <CTA />
    </Layout>
  );
}

export default Home;

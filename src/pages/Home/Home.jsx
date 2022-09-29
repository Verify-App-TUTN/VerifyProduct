import React from "react";
import { CTA, Features, Hero, Layout } from "../../components";
import Details from "../../components/Details/Details";
import style from "./index.module.css";

function Home() {
  return (
    <Layout className={style.Home}>
      <Hero />
      <Features />
      <Details />
    </Layout>
  );
}

export default Home;

import React from "react";
import { Authenticity, Growth, Reliability } from "../../assets";
import FeatureCard from "../FeatureCard/FeatureCard";
import style from "./index.module.css";
const featuresCards = [
  {
    icon: Authenticity,
    heading: "Authenticity",
    description: "Get access to select your choice product from our list of Product Categories Get accesss to select your ",
  },{
    icon: Growth,
    heading: "Product Growth",
    description: "Get access to select your choice product from our list of Product Categories Get accesss to select your ",
  },{
    icon: Reliability,
    heading: "Reliability",
    description: "Get access to select your choice product from our list of Product Categories Get accesss to select your ",
  },
]
const FeatureCards = () => {
  return (<div className={style.FeatureCards}>
    {featuresCards.map(({icon, ...props}) => (
      <FeatureCard {...props}>
        {icon}
      </FeatureCard>
      ))}
    
  </div>);
}

export default FeatureCards;

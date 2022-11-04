import React from "react";
import { Authenticity, Growth, Reliability } from "../../assets";
import FeatureCard from "../FeatureCard/FeatureCard";
import style from "./index.module.css";
const featuresCards = [
  {
    icon: Authenticity,
    heading: "Authenticity",
    description: "We want users to believe in all products they use.",
  },{
    icon: Growth,
    heading: "Product Growth",
    description: "Increase your revenue with sales of the original product.",
  },{
    icon: Reliability,
    heading: "Reliability",
    description: "Validating your product by your customers will increase their trust.",
  },
]
const FeatureCards = () => {
  return (<div className={style.FeatureCards}>

    {featuresCards.map(({icon, ...props}) => (
      <FeatureCard {...props} key={props.heading.trim()}>
        {icon}
      </FeatureCard>
      ))}
    
  </div>);
}

export default FeatureCards;

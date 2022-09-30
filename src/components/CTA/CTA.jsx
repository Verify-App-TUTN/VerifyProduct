import React from "react";
import { Details } from "../";
import { AccessibilityImage, SystemsImage } from "../../assets";
import style from "./index.module.css";
const ctaDetails = [
  {
    image: SystemsImage,
    title: "We offer a close range monitoring system.",
    description: "Report Fake Products You’ve Come Across With Report Fake Products You’ve Come Across With Report Fake Products You’ve Come Across With"
  },
  {
    image: AccessibilityImage,
    title: "We Categorize your products for slaying Accessibility",
    description: "Get access to select your choice product from our list of Product Categories Get access to select your choice product ",
    reversed: true
  },
]
const CTA = () => {
  return (
    <div className={style.CTA}>
      {ctaDetails.map((props, index) => (
        <Details {...props} key={props.title.trim()} />
      ))
      }
    </div>
  );
}

export default CTA;

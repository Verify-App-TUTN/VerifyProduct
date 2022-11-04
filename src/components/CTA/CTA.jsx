import React from "react";
import { Details } from "../";
import { AccessibilityImage, SystemsImage } from "../../assets";
import style from "./index.module.css";
const ctaDetails = [
  {
    image: SystemsImage,
    title: "We offer a close range monitoring system.",
    description: "Our product provides a global audience with a seamless way to verify product authenticity."
  },
  {
    image: AccessibilityImage,
    title: "We Categorize your products for slaying Accessibility",
    description: "Easy search of products by customers with the systematic arrangement of all items by category.",
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

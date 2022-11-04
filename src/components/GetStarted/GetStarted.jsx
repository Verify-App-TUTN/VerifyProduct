import React from "react";
import { Link } from "react-router-dom";
import style from "./index.module.css";

const GetStarted = ({className, ...props}) => {
  return(
    <a href="#footer"  {...props} className={`${style.GetStarted} ${className}`}>
        Get Started
    </a>
  );
}

export default GetStarted;

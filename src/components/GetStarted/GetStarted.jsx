import React from "react";
import { Link } from "react-router-dom";
import style from "./index.module.css";

const GetStarted = ({className, ...props}) => {
  return(
    <Link to="getStarted">
    <span {...props} className={`${style.GetStarted} ${className}`}>
        Get Started
      </span>
    </Link>
  );
}

export default GetStarted;

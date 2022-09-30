import React from "react";
import { Link } from "react-router-dom";
import style from "./index.module.css";

const GetStarted = ({className, ...props}) => {
  return(
    <Link to="getStarted"  {...props} className={`${style.GetStarted} ${className}`}>
        Get Started
    </Link>
  );
}

export default GetStarted;

import React from "react";
import style from "./index.module.css";

const FormDetail = ({details, setDetail}) => {
  return <div className={style.FormDetail}>{details}</div>;
}

export default FormDetail;

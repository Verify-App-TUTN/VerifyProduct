import React, { useEffect, useState } from "react";
import style from "./index.module.css";

const FormDetail = ({ details, setDetail, selected }) => {
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    setIsSelected(selected === details);
  }, [selected, details]);
  return <div className={`${style.FormDetail} ${isSelected && style.FormDetail__active}`}>{details}</div>;
}

export default FormDetail;

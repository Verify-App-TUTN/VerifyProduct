import React, { useEffect, useState } from "react";
import style from "./index.module.css";

const FormDetail = ({ details, setState, state }) => {
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    setIsSelected(state === details);
  }, [state, details]);
  return <div
    onClick={() => setState(details)}
    className={`${style.FormDetail} ${isSelected && style.FormDetail__active}`}>{details}</div>;
}

export default FormDetail;

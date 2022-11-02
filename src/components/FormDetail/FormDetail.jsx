import React, { useEffect, useState } from "react";
import style from "./index.module.css";

const FormDetail = ({ details, setState, state, close }) => {
  const [isSelected, setIsSelected] = useState(false);

  return <detail
    className={`${style.FormDetail} ${isSelected && style.FormDetail__active}`}>{details}</detail>;
}

export default FormDetail;

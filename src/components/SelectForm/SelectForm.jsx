import React, { useEffect, useRef, useState } from "react";
import { Arrow } from "../../assets";
import { FormDetail } from "../";
import style from "./index.module.css";

const SelectForm = ({ setState, state, details, label, errorMessage, placeholder }) => {
  const [toggleDetails, setToggleDetails] = useState(false);
  console.log(toggleDetails)
  const [detailsHeight, setDetailsHeight] = useState(0);
  const detailsContainerRef  = useRef(null);
  console.log(detailsHeight);
  return (
    <div className={style.Form}>
      <label className={style.Form__label}>{label}</label>
      <select
        // className={style.Form__details}
        className={style.Form__input}
        onChange={(e) => setState(e.target.value)}
        // value={state}
      >
        {details?.map((details) => (
          <option value={details}>{details === "" ? placeholder : details  }</option>
        ))}
      </select>
    </div>
  );
};

export default SelectForm;

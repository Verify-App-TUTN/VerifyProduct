import React, { useEffect, useRef, useState } from "react";
import { Arrow } from "../../assets";
import { FormDetail } from "../";
import style from "./index.module.css";

const SelectForm = ({ setState, state, details, label, errorMessage }) => {
  const [toggleDetails, setToggleDetails] = useState(false);
  console.log(toggleDetails)
  const [detailsHeight, setDetailsHeight] = useState(0);
  const detailsContainerRef  = useRef(null);
  useEffect(() => {
    setDetailsHeight(detailsContainerRef.current.scrollHeight);
  }, [detailsContainerRef]);
  console.log(detailsHeight);
  return (
    <div className={style.Form}>
      <label className={style.Form__label}>{label}</label>
      <div className={style.Form__input} onClick={() => setToggleDetails(prev => !prev)} >
        {state}
        <Arrow className={`${style.Form__input__icon} ${toggleDetails && style.Form__input__icon__rotate}`} />
      </div>
      <div
        ref={detailsContainerRef}
        style={{ height: toggleDetails ? `${detailsHeight}px` : 0 }}
        className={style.Form__details}

      >
        {details?.map((details) => (
          <FormDetail {...{ details, setState, state, close: ()=> setToggleDetails(false) }} />
        ))}
      </div>
    </div>
  );
};

export default SelectForm;

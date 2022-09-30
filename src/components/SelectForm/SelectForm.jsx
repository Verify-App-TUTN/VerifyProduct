import React, { useEffect, useRef, useState } from "react";
import { Arrow } from "../../assets";
import { FormDetail } from "../";
import style from "./index.module.css";

const SelectForm = () => {
  const details = ["United States", "Nigeria", "Croatia", "Germany"];
  const [toggleDetails, setToggleDetails] = useState(false);
  const [detailsHeight, setDetailsHeight] = useState(0);
  const detailsContainerRef  = useRef(null);
  useEffect(() => {
    // get the height of the details container
    setDetailsHeight(detailsContainerRef.current.scrollHeight);

  }, []);
  console.log(detailsHeight, detailsContainerRef);
  return (
    <div className={style.Form}>
      <label className={style.Form__label}>Company/Group Name</label>
      <div className={style.Form__input} onClick={()=> setToggleDetails(prev => !prev)}>
        Select Industry
        <Arrow className={toggleDetails && style.Form__input__icon} />
      </div>
      <div
        ref={detailsContainerRef}
        style={{ height: toggleDetails ? `${detailsHeight}px` : 0 }}
        className={style.Form__details}>
        {details.map((details) => (
          <FormDetail {...{details}} />
        ))}
      </div>
    </div>
  );
};

export default SelectForm;

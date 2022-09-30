import React from "react";
import { Arrow } from "../../assets";
import { FormDetail } from "../";
import style from "./index.module.css";

const SelectForm = () => {
  const details = ["United States", "Nigeria", "Croatia", "Germany"];
  return (
    <div className={style.Form}>
      <label className={style.Form__label}>Company/Group Name</label>
      <div className={style.Form__input}>
        Select Industry
        <Arrow />
      </div>
      <div className={style.Form__details}>
        {details.map((details) => (
          <FormDetail {...{details}} />
        ))}
      </div>
    </div>
  );
};

export default SelectForm;

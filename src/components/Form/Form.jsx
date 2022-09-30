import React from "react";
import style from "./index.module.css";

const Form = ({ errorMessage, label, placeholder }) => {
  return (
    <div className={style.Form}>
      <label className={style.Form__label}>Company/Group Name</label>
      {/* <input type="text" placeholder="Input Country/Group Name" className={style.Form__input} /> */}
      <div className={`${style.Form__select__input} ${style.Form__input}`}>
        Select Industry
      </div>
    </div>
  );
}

export default Form;

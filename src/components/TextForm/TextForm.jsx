import React from "react";
import { Arrow } from "../../assets";
import style from "./index.module.css";

const TextForm = ({ errorMessage, label, placeholder }) => {
  
  return (
    <div className={style.Form}>
      <label className={style.Form__label}>Company/Group Name</label>
      <input type="text" placeholder="Input Country/Group Name" className={style.Form__input} />
    </div>
  );
}

export default TextForm;
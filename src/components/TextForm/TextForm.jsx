import React, { useEffect } from "react";
import style from "./index.module.css";

const TextForm = ({ errorMessage, label, placeholder, state, type, setState }) => {

  return (
    <div className={style.Form}>
      <label className={style.Form__label}>Company/Group Name</label>
      <input type={type} value={state} onChange={setState} placeholder="Input Country/Group Name" className={style.Form__input} />
      <p className={style.Form__error}>{errorMessage}</p>
    </div>
  );
}

export default TextForm;

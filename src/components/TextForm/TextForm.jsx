import React from "react";
import style from "./index.module.css";

const TextForm = ({ errorMessage, label, placeholder, state, type, setState, error }) => {

  return (
    <div className={style.Form}>
      <label className={style.Form__label}>{ label }</label>
      <input type={type} value={state} onChange={setState} placeholder={placeholder} className={style.Form__input} />
      {error && <p className={style.Form__error}>{errorMessage}</p>}
    </div>
  );
}

export default TextForm;

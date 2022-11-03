import React from "react";
import style from "./index.module.css";

const SelectForm = ({ setState, state, details, label, errorMessage, placeholder, error }) => {
  return (
    <div className={style.Form}>
      <label className={style.Form__label}>{label}</label>
      <select
        className={style.Form__input}
        onChange={(e) => setState(e.target.value)}
        value={state}
      >
        {details?.map((details) => (
          <option value={details}>{details === "" ? placeholder : details  }</option>
        ))}
      </select>
      {error && <p className={style.Form__error}>{errorMessage}</p>}
    </div>
  );
};

export default SelectForm;

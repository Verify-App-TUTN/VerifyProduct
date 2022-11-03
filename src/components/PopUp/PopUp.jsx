import React from "react";
import Success from "../../assets/icons/Success";
import style from "./index.module.css";

const PopUp = ({active}) => {
  return (
    <main className={`${style.PopUp} ${active ? style.show : style.hide}`}>
      <div className={style.PopUp__container}>
        <Success className={style.PopUp__container__icon}/>
        <p>Data Submitted successfully</p>
      </div>
    </main>
  );
};

export default PopUp;

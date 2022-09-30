import React from "react";
import { Layout } from "../../components";
import style from "./index.module.css";

const ContactUs = () => {
  return (
    <Layout className={style.ContactUs}>
      <div className={style.ContactUs__content}>
        <div className={style.ContactUs__forms}>
          <h1 className={style.ContactUs__content__heading}>Integrate Your Products Into Our Database</h1>
        </div>
        
        <img src="image" alt="Contact Us" className={style.ContactUs__content__image} />
      </div>
    </Layout>
  )
    ;
}

export default ContactUs;

import React from "react";
import { ContactUsImage } from "../../assets";
import { Form, Layout, SelectForm, TextForm } from "../../components";
import style from "./index.module.css";

const ContactUs = () => {
  return (
    <Layout className={style.ContactUs}>
      <div className={style.ContactUs__content}>
        
        <div className={style.ContactUs__content__forms}>
          <h1 className={style.ContactUs__content__forms__heading}>Integrate Your Products Into Our Database</h1>
          <div className={style.ContactUs__content__forms__container}>
            <TextForm />
            <SelectForm />
          </div>
        </div>
        <div className={style.ContactUs__image}>
          <div className={style.ContactUs__image__watermark}></div>
          <img src={ContactUsImage} alt="Contact Us" className={style.ContactUs__image__content} />
        </div>
      </div>
    </Layout>
  )
    ;
}

export default ContactUs;

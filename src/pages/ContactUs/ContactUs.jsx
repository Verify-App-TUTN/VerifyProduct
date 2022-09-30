import React from "react";
import { ContactUsImage } from "../../assets";
import {  Layout, SelectForm, TextForm } from "../../components";
import { useTextForm } from "../../utils/hooks";
import style from "./index.module.css";

const ContactUs = () => {
  const [companyName, CompanyNameInput] = useTextForm({ placeholder: "Input Country/Group Name", label: "Company/Group Name", errorMessage: "Input Required", type: "text" });
  const [Email, EmailInput] = useTextForm({ placeholder: "Input Email", label: "Email", errorMessage: "Input Required", type: "email" });
  return (
    <Layout className={style.ContactUs}>
      <div className={style.ContactUs__content}>
        
        <div className={style.ContactUs__content__forms}>
          <h1 className={style.ContactUs__content__forms__heading}>Integrate Your Products Into Our Database</h1>
          <div className={style.ContactUs__content__forms__container}>
            <CompanyNameInput />
            <EmailInput />
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

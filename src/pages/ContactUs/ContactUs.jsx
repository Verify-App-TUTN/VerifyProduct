import React from "react";
import { ContactUsImage } from "../../assets";
import {  Layout } from "../../components";
import { useSelectForm, useTextForm } from "../../utils/hooks";
import style from "./index.module.css";

const ContactUs = () => {
  const [companyName, CompanyNameInput] = useTextForm({ placeholder: "Input Country/Group Name", label: "Company/Group Name", errorMessage: "Input Required", type: "text" });
  const [email, EmailInput] = useTextForm({ placeholder: "Input Email", label: "Email", errorMessage: "Input Required", type: "email" });
  const [industry, IndustryInput] = useSelectForm({ details: ["Fintech", "EduTech", "Stuff", "Other Stuff"], placeholder: "Select Industry", label: "Industry Type", errorMessage: "Select An Option" })
  const [country, CountryInput] = useSelectForm({ details: ["United States", "Nigeria", "Croatia", "Germany"], placeholder: "Select Country", label: "Country", errorMessage: "Select An Option" })
  return (
    <Layout className={style.ContactUs}>
      <div className={style.ContactUs__content}>
        
        <div className={style.ContactUs__content__forms}>
          <h1 className={style.ContactUs__content__forms__heading}>Integrate Your Products Into Our Database</h1>
          <div className={style.ContactUs__content__forms__container}>
            <CompanyNameInput />
            <EmailInput />
            <IndustryInput />
            <CountryInput />
            <div className={style.ContactUs__content__forms__container__text}>
              <label className={style.ContactUs__content__forms__container__text__label}>Send Us a Message</label>
              <textarea placeholder="Input your reviews here............" className={style.ContactUs__content__forms__container__text__input} />
            </div>
            <button className={style.ContactUs__content__forms__container__button}>Submit</button>
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

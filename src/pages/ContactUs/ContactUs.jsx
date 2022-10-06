import React, { useState } from "react";
import { ContactUsImage } from "../../assets";
import { Layout, SelectForm, TextForm } from "../../components";
import useInput from "../../utils/hooks/useInput";
import style from "./index.module.css";

const ContactUs = () => {
  const [companyName, changeCompanyName] = useInput("");
  const [email, setEmail] = useInput("");
  const [industry, setIndustry] = useState("Select Country");
  const [country, setCountry] = useState("Select Industry");
  console.log(companyName, email, industry, country);
  return (
    <Layout className={style.ContactUs}>
      <div className={style.ContactUs__content}>
        <div className={style.ContactUs__content__forms}>
          <h1 className={style.ContactUs__content__forms__heading}>
            Integrate Your Products Into Our Database
          </h1>
          <div className={style.ContactUs__content__forms__container}>
            <TextForm
              {...{
                placeholder: "Input Country/Group Name",
                label: "Company/Group Name",
                errorMessage: "Input Required",
                type: "text",
                value: companyName,
                setState: changeCompanyName
              }}
            />
            <TextForm
              {...{
                placeholder: "Input Email",
                label: "Email",
                errorMessage: "Input Required",
                type: "email",
                value: email,
                setState: setEmail
              }}
            />
            <SelectForm
              {...{
                details: ["Fintech", "EduTech", "Stuff", "Other Stuff"],
                label: "Industry Type",
                errorMessage: "Select An Option",
                state: industry,
                setState: setIndustry
              }}
            />
            <SelectForm
              {...{
                details: ["United States", "Nigeria", "Croatia", "Germany"],
                label: "Country",
                errorMessage: "Select An Option",
                state: country,
                setState: setCountry
              }}
            />
            <div className={style.ContactUs__content__forms__container__text}>
              <label
                className={
                  style.ContactUs__content__forms__container__text__label
                }
              >
                Send Us a Message
              </label>
              <textarea
                placeholder="Input your reviews here............"
                className={
                  style.ContactUs__content__forms__container__text__input
                }
              />
            </div>
            <button
              className={style.ContactUs__content__forms__container__button}
            >
              Submit
            </button>
          </div>
        </div>
        <div className={style.ContactUs__image}>
          <div className={style.ContactUs__image__watermark}></div>
          <img
            src={ContactUsImage}
            alt="Contact Us"
            className={style.ContactUs__image__content}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;

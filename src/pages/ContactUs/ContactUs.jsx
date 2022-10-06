import React from "react";
import { ContactUsImage } from "../../assets";
import { Layout, SelectForm } from "../../components";
import { useSelectForm, useTextForm } from "../../utils/hooks";
import useInput from "../../utils/hooks/useInput";
import style from "./index.module.css";

const ContactUs = () => {
  const [companyName, changeCompanyName] = useInput("");
  const [email, setEmail] = useInput("");
  const [industry, setIndustry] = useInput("");
  const [country, setCountry] = useInput("");
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
                placeholder: "Select Industry",
                label: "Industry Type",
                errorMessage: "Select An Option",
                value: industry,
                setState: setIndustry
              }}
            />
            <SelectForm
              {...{
                details: ["United States", "Nigeria", "Croatia", "Germany"],
                placeholder: "Select Country",
                label: "Country",
                errorMessage: "Select An Option",
                value: country,
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

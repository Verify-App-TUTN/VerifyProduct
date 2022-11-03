import React, { useState } from "react";
import { ContactUsImage } from "../../assets";
import { PopUp, Layout, SelectForm, TextForm } from "../../components";
import { useInput } from "../../utils/hooks";
import style from "./index.module.css";

const IntegrateProduct = () => {
  const [companyName, changeCompanyName] = useInput("");
  const [comapanyError, setCompanyError] = useState(false);
  const [email, setEmail] = useInput("");
  const [emailError, setEmailError] = useState(false);
  const [industry, setIndustry] = useState("Select Country");
  const [industryError, setIndustryError] = useState(false);
  const [country, setCountry] = useState("Select Industry");
  const [countryError, setCountryError] = useState(false);
  const [active, setActive] = useState(false);
  
  return (
    <Layout className={style.ContactUs}>
      <PopUp active={active} />
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
                setState: changeCompanyName,
                error: comapanyError,
              }}
            />
            <TextForm
              {...{
                placeholder: "Input Email",
                label: "Email",
                errorMessage: "Input Required",
                type: "email",
                value: email,
                setState: setEmail,
                error: emailError,
              }}
            />
            <SelectForm
              {...{
                details: ["", "Fintech", "EduTech", "Stuff", "Other Stuff"],
                label: "Industry Type",
                errorMessage: "Select An Option",
                state: industry,
                setState: setIndustry,
                placeholder: "Select Country",
                error: industryError,
              }}
            />
            <SelectForm
              {...{
                details: ["","United States", "Nigeria", "Croatia", "Germany"],
                label: "Country",
                errorMessage: "Select An Option",
                state: country,
                setState: setCountry,
                placeholder: "Select Industry",
                error: countryError,
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

export default IntegrateProduct;

import React, { useState } from "react";
import { ContactUsImage } from "../../assets";
import { PopUp, Layout, SelectForm, TextForm } from "../../components";
import { useInput } from "../../utils/hooks";
import { isEmail } from "../../utils/functions";
import style from "./index.module.css";

const IntegrateProduct = () => {
  const [companyName, changeCompanyName] = useInput("");
  const [comapanyError, setCompanyError] = useState(false);
  const [email, setEmail] = useInput("");
  const [emailError, setEmailError] = useState(false);
  const [industry, setIndustry] = useState("");
  const [industryError, setIndustryError] = useState(false);
  const [country, setCountry] = useState("");
  const [countryError, setCountryError] = useState(false);
  const [active, setActive] = useState(false);
  const handleSubmission = (e) => {
    e.preventDefault();
    if(companyName === "" || !isEmail(email) || industry === "" || country === "") {
    if (companyName === "") {
      setCompanyError(true);
      setTimeout(() => {
        setCompanyError(false);
      }
        , 3000);
    }
    if (!isEmail(email)) {
      setEmailError(true);
      setTimeout(() => {
        setEmailError(false);
      }
        , 3000);
    }
    if (industry === "") {
      setIndustryError(true);
      setTimeout(() => {
        setIndustryError(false);
      }
        , 3000);
    }
    if (country === "") {
      setCountryError(true);
      setTimeout(() => {
        setCountryError(false);
      }
        , 3000);
      }
      return;
  }
    else {
      setActive(true);
      setTimeout(() => {
        setActive(false);
      }
      , 3000);
    }
    return;
  }
  return (
    <Layout className={style.ContactUs}>
      <PopUp active={active} />
      <div className={style.ContactUs__content}>
        <div className={style.ContactUs__content__forms}>
          <h1 className={style.ContactUs__content__forms__heading}>
            Integrate Your Products Into Our Database
          </h1>
          <form className={style.ContactUs__content__forms__container}
            onSubmit={handleSubmission}
          >
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
                details: ["","Food and Beverage",
                  "Pharmaceutical and Medical Supply",
                  "Fashion",
                  "Electrical and Electronic",
                  "Automotive Parts",
                  "Optical Media(CDs & DVDs)",
                  "Cosmetics"],
                label: "Industry Type",
                errorMessage: "Select An Option",
                state: industry,
                setState: setIndustry,
                placeholder: "Select Industry",
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
                placeholder: "Select Country",
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
              type="submit"
            >
              Submit
            </button>
          </form>
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

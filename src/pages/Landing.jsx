import Header from "../components/Header";
import Logo from "../assets/logo.png";
import styled from "styled-components";
import Image1 from "../assets/image1.svg";
import Image2 from "../assets/image2.svg";
import Image3 from "../assets/image3.svg";
import Whylogo from "../assets/why-logo.svg";
import Icon1 from "../assets/icon1.svg";
import Icon2 from "../assets/icon2.svg";
import Icon3 from "../assets/icon3.svg";
import "./../App.css";

const Landing = () => {
  return (
    <>
      <Header
        img={Logo}
        link1="Integrate Product"
        link2="About Us"
        link3="Contact Us"
        link4="Sign Up"
        buttonText="Get Started"
        button={true}
        div={false}
      />
      <Section className="container">
        <div id="top-info">
          <div className="textedh1">
            <h1>
              <span>Integrate Your</span>
              <span> Products Into</span> <span>Our Database</span>
            </h1>
            <p>
              <span>
                Get accesss to select your choice product from our list of
                Product Categories Get
              </span>
              <span>
                accesss to select your choice product from our list of Product
                Categories Get accesss to
              </span>
            </p>
            <div className="button">
              <button className="btn">Get Started</button>
            </div>
          </div>
          <div className="top-image">
            <img src={Image1} alt="" className="image-1" />
          </div>
        </div>
        <div id="why-verify">
          <div className="head">
            <p className="heading">Why</p>
            <span>
              <img src={Whylogo} alt="" className="wLg" />
            </span>
            <p className="heading">?</p>
          </div>

          <div className="card-block">
            <div className="card-1">
              <div className="card-body">
                <img src={Icon1} alt="" />
                <p className="heading">Authenticity</p>
                <p className="text">
                  <span>Get accesss to select your choice product</span>
                  <span>from our list of Product Categories Get</span>
                  <span>accesss to select your</span>
                </p>
              </div>
            </div>
            <div className="card-2">
              <div className="card-body">
                <img src={Icon2} alt="" />
                <p className="heading">Product Growth</p>
                <p className="text">
                  <span>Get accesss to select your choice product</span>
                  <span>from our list of Product Categories Get</span>
                  <span>accesss to select your</span>
                </p>
              </div>
            </div>
            <div className="card-3">
              <div className="card-body">
                <img src={Icon3} alt="" />
                <p className="heading">Reliability</p>
                <p className="text">
                  <span>Get accesss to select your choice product</span>
                  <span>from our list of Product Categories Get</span>
                  <span>accesss to select your</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Div>
        <Section>
          <div className="container">
            <div>
              <div id="offers">
                <div>
                  <img src={Image2} alt="" className="image-2" />
                </div>
                <div>
                  <h1 className="heading">
                    <span>We offer a close</span>
                    <span> range monitoring</span> <span>system.</span>
                  </h1>
                  <p className="text">
                    Report Fake Products You’ve Come Acrossed With Report Fake
                    Products You’ve Come Acrossed With Report Fake Products
                    You’ve Come Acrossed With
                  </p>
                  <button className="btn">Get Started</button>
                </div>
              </div>
            </div>
            <div>
              <div id="category">
                <div className="left">
                  <p className="heading">
                    <span>We Categorize your</span>
                    <span> products for slaying</span>{" "}
                    <span>Assessibility</span>
                  </p>
                  <p className="text">
                    Get accesss to select your choice product from our list of
                    Product Categories Get accesss to select your choice product
                  </p>
                  <button className="btn">Get Started</button>
                </div>
                <div>
                  <img src={Image3} alt="" className="image-3" />
                </div>
              </div>
            </div>
          </div>
        </Section>
      </Div>
    </>
  );
};

export default Landing;
const Div = styled.section`
  background: rgba(90, 224, 191, 0.2);
  opacity: 1;
  padding: 2rem 1rem;
`;
const Section = styled.main`
  .section {
    margin: 1rem 0;
    padding: 1rem;
    margin-bottom: 7rem !important;
  }

  button {
    border-radius: 4px;
    outline: none;
    border: none;
    padding: 0.8em 3em;
    font-weight: 500;
    font-size: 17px;
    color: #fff;
    margin-top: 10px;
    cursor: pointer;
    margin-top: 10px;
  }
  a {
    text-decoration: none;
  }
  button:hover {
    opacity: 0.3;
    transition: 0.3s ease;
  }

  #top-info {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    padding: 1rem;
  }
  #top-info .textedh1 {
    padding: 10px;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 20px;
  }

  #top-info .textedh1 h1 {
    color: #000d09;
    font-weight: 900;
    font-size: 40px;
    span {
      display: block;
    }
  }

  #top-info .textedh1 p {
    color: #000d09;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    span {
      display: block;
    }
  }

  #top-info .btn {
    background: #009f78;
  }

  #why-verify {
    padding: 2px;
    margin: 1rem 0;
    padding: 1rem;
  }

  #why-verify .heading {
    text-align: center;
    font-weight: 700;
    font-size: 30px;
    line-height: 40px;
    margin: 10px;
  }

  #why-verify .card-1 {
    border: 0.5px solid #001a13;
    box-shadow: 0px 4px 4px rgba(255, 219, 84, 0.25);
    border-radius: 10px;
    align-items: center;
    text-align: center;
    padding: 10px 15px;
    margin-top: 10px;
  }
  #why-verify .card-2 {
    border: 0.5px solid #001a13;
    box-shadow: 0px 4px 4px rgba(0, 159, 120, 0.25);
    border-radius: 10px;
    align-items: center;
    text-align: center;
    padding: 10px 15px;
    margin-top: 10px;
  }
  #why-verify .card-3 {
    border: 0.5px solid #001a13;
    box-shadow: 0px 4px 4px rgba(234, 70, 0, 0.25);
    border-radius: 10px;
    align-items: center;
    text-align: center;
    padding: 10px 15px;
    margin-top: 10px;
  }

  #why-verify .card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  #why-verify .head {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  #why-verify .card-body .heading {
    font-weight: 400;
    font-size: 28px;
    line-height: 24px;
  }
  #why-verify .card-body .text {
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    span {
      display: block;
    }
  }
  .wLg {
    width: 100%;
  }
  #offers {
    padding-top: 20px;
  }
  .image-1 {
    width: 100%;
    height: auto;
  }
  .image-2 {
    width: 100%;
    height: auto;
    margin: 10px 0px;
  }

  #offers .heading {
    color: #000d09;
    font-weight: 400;
    font-size: 35px;
    line-height: 40px;
  }

  #offers .text {
    color: #000d09;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-top: 10px;
  }

  #offers .btn {
    background: #241818;
  }

  #category {
    margin-top: 10px;
  }

  .image-3 {
    width: 100%;
    height: auto;
    margin: 10px 0px;
  }

  #category .heading {
    color: #000d09;
    font-weight: 400;
    font-size: 30px;
    line-height: 40px;
    margin-top: 30px;
  }

  #category .text {
    color: #000d09;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-top: 10px;
  }
  #category .btn {
    background: #241818;
  }

  @media (min-width: 1144px) and (max-width: 1299px) {
    #top-info {
      display: flex;
      flex-direction: row;
    }

    #why-verify .head {
      display: flex;
      justify-content: center;
    }
    #why-verify .card-block {
      display: grid;
      grid-gap: 1em;
      grid-template-columns: repeat(3, 1fr);
      margin-bottom: 25px;
    }

    .image-1 {
      width: 620px;
    }

    .card-1,
    .card-2,
    .card-3 {
      width: 300px;
      height: 250px;
    }

    #category {
      margin: 70px;
      display: flex;
      justify-content: space-between;
      gap: 2rem;
    }
    #offers {
      margin: 70px 40px;
      display: flex;
      justify-content: space-between;
      gap: 2rem;
    }
  }

  @media (min-width: 452px) and (max-width: 1023px) {
    #why-verify .head {
      display: flex;
      justify-content: center;
    }
  }
  @media screen and (min-width: 1300px) {
    #top-info {
      display: flex;
      flex-direction: row;
    }
    .textedh1 {
      transform: translateY(120px);
    }
    #top-info .textedh1 h1 {
      font-size: 72px;
      line-height: 80px;
      color: #000d09;
      text-align: left;
      margin-bottom: 10px;
    }

    #top-info .text {
      max-width: 60%;
    }

    .button {
      margin-top: 15px;
    }

    #why-verify {
      margin-top: 15em;
    }

    #why-verify .heading {
      margin: 10px;
    }

    #why-verify .head {
      display: flex;
      justify-content: center;
    }
    #why-verify .card-block {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin-bottom: 25px;
    }

    .card-1,
    .card-2,
    .card-3 {
      width: 374px;
      height: 264px;
    }

    #offers {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 3rem;
    }
    .image-1 {
      width: 67%;
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1;
    }

    .image-2,
    .image-3 {
      width: 100%;
      height: 25rem;
    }

    .image-3 {
      margin-top: 50px;
    }

    #offers .heading {
      font-weight: 700;
      font-size: 50px;
      line-height: 60px;
      width: 60%;
      color: #000d09;
      span {
        display: block;
      }
    }
    #offers .text {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      width: 90%;
    }

    #category {
      padding: 1rem;
      display: flex;
      align-items: flex-start;
      margin: 0;
    }

    #category .heading {
      font-weight: 700;
      font-size: 56px;
      line-height: 60px;
      margin-top: 70px;
      color: #000d09;
      span {
        display: block;
      }
    }
    #category .text {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      width: 50%;
    }
  }
`;

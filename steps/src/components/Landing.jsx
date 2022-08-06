import Header from "./Header";
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
        buttonText="Sign Up"
        button={true}
        div={false}
      />
      <Section className="container">
        <section id="top-info">
          <div className="text">
            <h1>Integrate Your Products Into Our Database</h1>
            <span>
              Get accesss to select your choice product from our list of Product
              Categories Get accesss to select your choice product from our list
              of Product Categories Get accesss to
            </span>
            <div className="button">
              <button className="btn">Get Started</button>
            </div>
          </div>
          <div className="top-image">
            <img src={Image1} alt="" className="image-1" />
          </div>
        </section>
        <section id="why-verify">
          <div class="head">
            <p class="heading">Why</p>
            <span>
              <img src={Whylogo} alt="" />
            </span>
            <p class="heading">?</p>
          </div>

          <div class="card-block">
            <div class="card-1">
              <div class="card-body">
                <img src={Icon1} alt="" />
                <p class="heading">Authenticity</p>
                <p class="text">
                  Get accesss to select your choice product from our list of
                  Product Categories Get accesss to select your{" "}
                </p>
              </div>
            </div>
            <div class="card-2">
              <div class="card-body">
                <img src={Icon2} alt="" />
                <p class="heading">Product Growth</p>
                <p class="text">
                  Get accesss to select your choice product from our list of
                  Product Categories Get accesss to select your{" "}
                </p>
              </div>
            </div>
            <div class="card-3">
              <div class="card-body">
                <img src={Icon3} alt="" />
                <p class="heading">Reliability</p>
                <p class="text">
                  Get accesss to select your choice product from our list of
                  Product Categories Get accesss to select your{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
      </Section>
      <Section>
        <div className="colored-bg">
          <div id="offers">
            <div>
              <img src={Image2} alt="" className="image-2" />
            </div>
            <div>
              <h1 className="heading">
                We offer a close range monitoring system.
              </h1>
              <p className="text">
                Report Fake Products You’ve Come Acrossed With Report Fake
                Products You’ve Come Acrossed With Report Fake Products You’ve
                Come Acrossed With
              </p>
              <button className="btn">Get Started</button>
            </div>
          </div>
          <div id="category">
            <div className="left">
              <p className="heading">
                We Categorize your products for slaying Assessibility
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
      </Section>
    </>
  );
};

export default Landing;

const Section = styled.section`
  .section {
    margin: 1rem 0;
    padding: 1rem;
    margin-bottom: 7rem !important;
  }

  button {
    /* background: #009F78; */
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
    margin-bottom: 7rem !important;
  }
  #top-info .text {
    padding: 10px;
    text-align: left;
  }

  #top-info .text h1 {
    color: #000d09;
    font-weight: 900;
    font-size: 40px;
    line-height: 60px;
  }

  #top-info .text span {
    color: #000d09;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
  }
  /* #top-info .text span{
    color: #000D09;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    
} */

  #top-info .btn {
    background: #009f78;
  }

  #why-verify {
    padding: 2px;
    margin: 1rem 0;
    padding: 1rem;
    margin-bottom: 7rem !important;
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
  }

  #why-verify .head {
    display: flex;
    justify-content: space-evenly;
  }

  #why-verify .card-body .heading {
    font-weight: 400;
    font-size: 28px;
    line-height: 24px;
  }
  /* #why-verify .card-body .heading {
    font-weight: 900;
    font-size: 28px;
    line-height: 24px;
} */

  #why-verify .card-body .text {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  .colored-bg {
    background: rgba(156, 191, 182, 0.2);
    opacity: 1;
    height: 750px;
  }
  #offers {
    padding: 0px 60px;
    padding-top: 20px;
  }
  .image-1 {
    width: 100%;
    height: auto;
    padding-right: 70px;
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
    padding: 0px 40px;
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
    font-size: 35px;
    line-height: 40px;
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

  @media screen and (min-width: 1201px) {
    #top-info {
      display: flex;
      flex-direction: row;
    }

    #top-info .text h1 {
      color: #000d09;
      font-weight: 900;
      font-size: 70px;
      line-height: 80px;
      text-align: left;
      /* max-width: 50%; */
      margin-bottom: 10px;
    }

    .top-image {
      // margin-top: 900px;
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
      margin: 70px 70px;
      display: flex;
      justify-content: space-between;
    }
    .image-1 {
      width: 70%;
      position: absolute;
      right: 0;
      top: 0;
      // border: 1px solid blue;
    }

    .image-2,
    .image-3 {
      width: 80%;
      height: auto;
    }

    .image-3 {
      margin-top: 50px;
    }

    #offers .heading {
      font-weight: 700;
      font-size: 56px;
      line-height: 60px;
      margin-top: 65px;
      width: 60%;
      color: #000d09;
    }
    #offers .text {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      width: 90%;
    }

    #category {
      margin: 100px;
      display: flex;
      /* justify-content: space-between; */
    }

    #category .heading {
      font-weight: 700;
      font-size: 56px;
      line-height: 60px;
      margin-top: 70px;
      color: #000d09;
      /* width: 70%; */
    }
    #category .text {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      width: 50%;
    }

    /* #category .left{
        width: 60%;
    } */
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    #top-info {
      display: flex;
      flex-direction: row;
    }

    #why-verify {
      // margin: 10px;
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
      /* border: 1px solid green; */
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
    }
    #offers {
      margin: 70px 40px;
      display: flex;
      justify-content: space-between;
    }
  }

  @media (min-width: 452px) and (max-width: 1023px) {
    #why-verify .head {
      display: flex;
      justify-content: center;
    }
  }
`;

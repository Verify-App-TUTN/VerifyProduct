import React from 'react';
import Header from './Header';
import Logo from '../assets/logo.png'
import styled from 'styled-components';
import Coke from '../assets/coke.png';
import Rating from '../assets/rating.png';
import Star from '../assets/Star1.png';
import Arrow from '../assets/arrows.png';

const Verifyproduct = () => {
  return (
    <>
      <Header
        img={Logo}
        link1="Integrate Product"
        link2="About Us"
        link3="Contact Us"
        link4="Sign Up"
        buttonText="Sign Up"
        button={false}
        div={true}
      />
      <Section className='container'>
        <div className="title">
          <h2>Thank You for Verifying this Product.</h2>
          <h5>This is an Original product of Company name</h5>
        </div>
        <div className="productDetails">
          <h6>Product Details</h6>
          <div className="productImages">
            <img src={Coke} alt="Coke" />
            <img src={Rating} alt="Details" />
          </div>
        </div>
        <div className="reviewProduct">
          <div className="leftSide">
            <div className="reviewP">
              <h3>Kindly Review this Product</h3>
              <p>Give a star rating</p>
              <div className="starsArea">
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
              </div>
            </div>
            <form className="comments">
              <label htmlFor="comments" className="commentsLabel">Comments</label>
              <textarea name="comments" id="comments" cols="30" rows="10"
                placeholder="Type your reviews here,............"></textarea>
              <button className="btn">Submit</button>
            </form>
            <div className="moreP">
              <h4>Verify Another Product?</h4>
              <button className="btn">Verify Now</button>
            </div>
          </div>
          <div className="rightSide">
            <img src={Arrow} alt="" />
          </div>
        </div>
      </Section>
    </>
  )
}

export default Verifyproduct;

const Section = styled.section`
          .title {
              display: flex;
              flex-direction: column;
              text-align: center;
              margin-bottom: 10px;
            h2 {
              font-size: 60px;
              font-style: normal;
              font-weight: 900;
              color: #000D09;
              margin-top: 20px;
             }
              h5 {
              font-size: 35px;
              font-style: normal;
              font-weight: 700;
              color: #000D09;
              opacity: 0.5;
            }
          }
          .productDetails {
              display: flex;
              flex-direction: column;
              text-align: center;
              justify-content: center;
              align-items: center;
              gap: 1.5rem;
              margin-bottom: 20px;
              h6 {
                font-size: 25px;
                font-weight: 900;
                color: #000D09;
              }
             .productImages {
              display: flex;
              justify-content: center;
              align-items: flex-start;
              gap: 4rem;
              img:first-child {
               width: 485px;
               height: 408px;
              }
              img:last-child {
                width: 590px;
               height: 336px;
              }
            }
        }
            .reviewProduct {
              display: flex;
              justify-content: center;
              position: relative;
              .leftSide {
                flex: 1;
                padding: 1.5rem;
                padding-left: 4rem;
                margin-bottom: 30px;
              .reviewP {
                display: flex;
                flex-direction: column;
                gap: 10px;
                justify-content: center;
                align-items: flex-start;
                margin-bottom: 2rem;
              h3 {
                font-size: 30px;
                font-weight: 700;
                color: #000D09;
              }
              p {
                font-size: 20px;
                font-size: 400;
                color: #009F78;
              }
              .starsArea {
                display: flex;
                gap: 8px;
               img {
                 width: 40px;
                 height: 40px;
                 cursor: pointer;
                 transition: all 300ms ease;
                 &:hover {
                  transform: scale(1.5);
                 }
                }
              }
            }
              .comments {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                gap: 10px;
                margin-bottom: 3rem;
             .commentsLabel {
                font-size: 18px;
                font-weight: 700;
                color: #000D09;
              }
              #comments {
                width: 85%;
                height: 136px;
                padding: 16px;
                background: rgba(90, 224, 191, 0.2);
                outline: none;
                border: 1px solid #b5e6dd;
                border-radius: 8px;
                opacity: 0.5;
                font-size: 14px;
                font-weight: 400;
                color: #000D09 !important;
               &::placeholder {
                 color: #000d09;
                 font-size: 14px;
                 font-weight: 400;
                }
               &:focus {
                 border: 2px solid #009F78;
               }
              }
              button{
               background: #009F78;
               border-color: #009F78;
              }
            }
              .moreP {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 5px;
               h4 {
                font-size: 48px;
                font-weight: 400;
                color: #000d09;
               }
               button{
                background: #241818;
                border-color: #241818;
               }
              }
            }
              .rightSide {
                flex: 1;
                overflow: hidden;
              img {
                position: absolute;
                top: -277px;
                left: 541px;
                height: 52rem;
                max-width: 100%;
                z-index: -1;
              }
            }
        }
@media screen and (max-width: 1437px){
          .leftSide {
            padding: 0 !important;
            padding-left: 0 !important;
          }
          .rightSide {
            img{
              height: 48rem !important;
              left: 500px;
            }
          }
        }
        @media screen and (max-width:1350px){
          .rightSide {
            img{
              left: 440px !important;
            }
          }
        }
@media screen and (max-width: 1200px) {
    .title h2,
    .moreP h4 {
        font-size: 40px !important;
    }
     .title h5,
    .reviewP h3 {
        font-size: 25px;
    }
    .productDetails h6 {
        font-size: 20px;
    }
    .productImages {
        gap: 2rem;
    }
    .productImages img {
        width: 50% !important;
    }
    .rightSide img {
        height: 40rem !important;
        left: 430px !important;
        top: -200px !important;
    }
    .reviewP p {
        font-size: 18px;
    }
}
@media screen and (max-width: 1098px){
  .rightSide{
    img{
      left:391px !important;
    }
  }
}
@media screen and (max-width: 998px) {
  .title h2,
  .moreP h4 {
    font-size: 30px !important;
  }
  .title h5 {
    font-size: 18px !important;
  }
  .productDetails h6 {
    font-size: 15px !important;
  }
  .productImages {
    flex-direction: column;
    align-items: center;
  }
  .productImages img {
    width: 90% !important;
  }
  .reviewProduct {
    flex-direction: column;
    align-items: center;
  }
  .rightSide img {
    position: relative;
    left: 0 !important;
  }
  .comments{
    #comments{
      width: 100% !important;
    }
  }
}
@media screen and (max-width: 645px) {
    padding: 1rem !important;    
  .productImages img {
    width: 100% !important;
    height: 306px !important;
  }
  .rightSide img {
    height: 100% !important;
    width: 100% !important;
    top: -462px !important;
  }
}

 `;

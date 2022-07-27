import React from 'react';
import styled from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';
import Coke from '../assets/coke.png';
import Arrow from '../assets/arrows.png';
import { Link } from 'react-router-dom';
import Header from './Header';
import Logo from '../assets/logo.png';

const ProductN = () => {
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
            <div className="container">
                <Section>
                    <div className='goBack'>
                        <FaChevronLeft />
                        <span>Back</span>
                    </div>
                    <div className="productContainer">
                        <div className="productText">
                            <h2>Product Name</h2>
                            <p>
                                <span>
                                    Get accesss to select your choice product from our list of Product Categories
                                    Get accesss to
                                </span>
                                <span>
                                    select your choice product from our list of Product Categories
                                    Get accesss to select your choice
                                </span>
                                <span>product from our list of Product Categories</span>
                            </p>
                            <button className="btn"><Link to="verifyform">Verify Product</Link></button>
                        </div>
                        <div className="productImages">
                            <div className='coke'><img src={Coke} alt="productImg" /></div>
                            <div className='img'><img src={Arrow} alt="productImg" /></div>
                        </div>
                    </div>
                </Section>
            </div>
        </>
    )
}

export default ProductN;

const Section = styled.section`
      margin: 1rem 0;
      padding: 1rem;
      margin-bottom: 7rem !important;
     .goBack{
        display: flex;
        align-items: baseline;
        gap: 10px;
        cursor: pointer;
        margin-bottom: 3rem;
        svg{
            color: #292D32 !important;
        }
        span{
            font-weight: 700;
            font-size: 20px;
            color: #000000;
        }
     }
     .productContainer{
        display: flex;
        flex-direction: column;
        justify-content: center !important;
        align-items: center !important;
        text-align: center;
        gap: 3rem;
        .productText{
            display: flex;
            flex-direction: column;
            align-items: center !important;
            gap: 2rem;
            h2{
                font-size: 60px;
                font-weight: 900;
                color: #000D09;
            }
            p{
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
                span{
                    display: block !important;
                }
            }
            button {
                background-color: #009F78;
            }
        }
     }
     .productImages{
        position: relative;
        width: 100%;
        height: max-content;
        .img{
            position: absolute;
            left: 180px;
            top: -330px;
            z-index: -1;
            height: 0%;
            img{
                height: 60rem;
            }
        }
     }
     @media screen and (max-width: 1200px){
        .productImages{
            max-width: 100%;
            .img{
                top: -200px;
                left: 180px;
                img{
                    height: 50rem;
                }
            }
        }
     }
     @media screen and (max-width: 998px){
        .productImages{
            .img{
                left: 130px;
            }
        }
     }
     @media screen and (max-width: 890px){
        .productImages{
            .img{
                top: -120px;
                left: 60px;
                img{
                    height: 45rem;
                }
            }
        }
     }
     @media screen and (max-width: 742px){
        .productImages{
            .img{
                top: -120px;
                left: 0px;
                img{
                    height: 45rem;
                }
            }
        }
     }
     @media screen and (max-width: 690px){
        .productImages{
            .coke{
                img{
                    width: 80%;
                }
            }
            .img{
                top: -60px;
                left: 0;
                img{
                    height: 35rem;
                }
            }
        }
     }
     @media screen and (max-width: 490px){
         margin: 10px 0;
         .goBack{
            display: none;
         }
         .productContainer{
            gap: 2rem;
            .productText{
                gap: 1rem;
                h2{
                    font-size: 40px;
                }
            }
         }
        .productImages{
            .img{
                top: -80px;
                img{
                    height: 35rem;
                }
            }
        }
     }
     @media screen and (max-width: 410px){
        .productImages{
            .img{
                left: 0;
                img{
                    height: 28rem;
                }
            }
        }
     }
     @media screen and (max-width: 395px){
        .productImages{
            .img{
                left: -22px;
                height: 100%;
                img{
                    width: 325px;
                    height: 24em;
                }
            }
        }
     }
`;

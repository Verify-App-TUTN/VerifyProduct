import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/footerlg.png';
import { FaFacebookSquare, FaLinkedin, FaInstagram, FaTwitterSquare } from 'react-icons/fa';


const Footer = () => {
    return (
        <div style={{ background: "#001A13" }}>
            <div className="container">
                <Section>
                    <div className="leftSide">
                        <div className="brand">
                            <img src={Logo} alt="logo" />
                            <p>
                                <span>Get accesss to select your choice product from our list of Product</span>
                                <span>Categories Get accesss to select your choice product from our list</span>
                                <span> of Product Categories Get accesss</span>
                            </p>
                        </div>
                        <div className="news">
                            <p>Get Updated. Join Our Newsletter</p>
                            <form className="subcribe">
                                <input type="text" placeholder='Enter your email address' />
                                <button className='btn'>Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className="rightSide">
                        <div className="row">
                            <h3>Home</h3>
                            <ul>
                                <li>About Us</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className="row">
                            <h3>Services</h3>
                            <ul>
                                <li>Verify Products</li>
                                <li>Report Product</li>
                                <li>Product Category</li>
                            </ul>
                        </div>
                        <div className="row">
                            <h3>Legals</h3>
                            <ul>
                                <li>Terms of Use</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="row">
                            <h3>Social Media</h3>
                            <div className='socialIcon'>
                                <FaLinkedin className='icon' />
                                <FaTwitterSquare className='icon' />
                                <FaInstagram className='icon' />
                                <FaFacebookSquare className='icon' />
                            </div>
                        </div>
                    </div>
                </Section>
            </div>
        </div>
    )
}

export default Footer;

const Section = styled.footer`
     display: flex;
     justify-content: space-between;
     padding: 2rem 1rem;
     .leftSide{
        flex: 1;
        display:  flex;
        flex-direction: column;
        gap: 3rem;
        .brand{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
            p{
                font-weight: 400 !important;
                font-size: 16px;
                line-height: 24px;
                color: #FEFEFF;
                span{
                    display: block;
                }
            }
        }
        .news{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;  
            p {
                font-weight: 700 !important;
                font-size: 20px;
                line-height: 24px;
                color: #FEFEFF;  
            }
            .subcribe{
                display: flex;
                align-items: center;
                width: 90%;
                input{
                    width: 90%;
                    padding: 11px 45px;
                    padding-left: 15px !important;
                    border-radius: 4px;
                    outline: none;
                    border: none;
                    color: #333333;
                    font-weight: 700;
                    font-size: 14px;
                    &::placeholder{
                        color: #333333;
                    font-weight: 700;
                    font-size: 14px;
                    }
                    &:focus{
                        border: 2px solid #009F78;
                        border-radius: 4px;
                    }
                }
                button {
                 background-color: #009F78;
                 border-color: #009F78;
                }
            }
        }
     }
     .rightSide{
        flex: 1;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        justify-content:  center;
        align-items: flex-start;
        .row{
            color: #FEFEFF;
            h3{
                margin-bottom: 20px;
                font-weight: 900;
                font-size: 16px;
            }
            ul{
                li{
                    font-size: 16px;
                    font-weight: 400 !important;
                    line-height: 35px;
                }
            }
            .socialIcon{
                background-color: #fff;
                display: flex;
                gap: 1rem;
                padding: 2px 8px;
                border-radius: 8px;
                .icon{
                    font-size: 1.5rem;
                    color: #202428;
                }
            }
        }
     }
     @media screen and (max-width: 1200px){
        padding: 1rem;
        gap: 2rem;
        .leftSide{
            flex: 0;
        }
     }
     @media screen and (max-width: 929px){
        flex-direction: column;
     }
     @media screen and (max-width: 500px){
        .leftSide{
            margin-top: 20px;
            gap: 2rem;
            .brand{
                img{
                    width: 80%;
                }
            }
            .news{
                p{
                    font-size: 18px !important;
                }
             .subcribe{
                width: 100%;
                input{
                    padding: 12px;
                }
                button{
                    padding: 10px;
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                }
              }
           }
        }
     }
`;

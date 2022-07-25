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
            p{
                font-weight: 700 !important;
                font-size: 20px;
                line-height: 24px;
                color: #FEFEFF;  
            }
        }
     }
     .rightSide{
        flex: 1;
     }
`;

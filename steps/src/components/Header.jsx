import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import styled from 'styled-components';


const Header = ({ img, link1, link2, link3, link4, buttonText, button,div }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const html = document.querySelector("html");
    html.addEventListener("click", (e) => setIsNavOpen(false));
    return (
        <Nav state={isNavOpen ? 1 : 0} className="container">
            <div className="brand">
                <img src={img} alt="logo" />
            </div>
            <div className="toggle">
                {isNavOpen ? (
                    <FaTimes className='cancel' onClick={() => setIsNavOpen(false)} />
                ) : (
                    <FaBars onClick={(e) => {
                        e.stopPropagation();
                        setIsNavOpen(true)
                    }} />
                )}
            </div>
            <ul className={`headerLinks ${isNavOpen ? "show" : ""}`}>
                <li>{link1}</li>
                <li>{link2}</li>
                <li>{link3}</li>
                <li className='none'>{link4}</li>
            </ul>
            {button && <button className='btn'>{buttonText}</button>}
            {div && <div></div>}
        </Nav>
    )
}

export default Header;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem;
    background-color: #fff;
        .brand {
            img {
                width: 80%;
            }
        }
        .headerLinks {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            li {
                color: #001A13;
                font-size: 18px;
                font-weight: 700;
                cursor: pointer;
            }
            .none {
                display: none !important;
            }
        }
        .toggle {
            display: none;
        }
        button {
            background-color: #009F78;
            border-color: #009F78;
        }
        @media screen and (max-width: 930px) {
           position: relative;
           z-index: 999;
           button{
            display: none;
           }
           .toggle{
            padding-right: 1rem;
            display: block;
            z-index: 51;
            svg{
                color: #292D32;
                font-size: 1.5rem;
            }
            .cancel{
                color: #ffffff !important;
            }
           }
           .show{
            opacity: 1 !important;
            visibility: visible !important;
           }
           .headerLinks{
               position: absolute;
               overflow-x: hidden;
               top: 0;
               right: 0;
               width: ${({ state }) => (state ? "40%" : "0%")};
               background-color:#ffffff;
               opacity: 0;
               visibility: hidden;
               z-index: 50;
               transition: all .7s ease-in-out;
               flex-direction: column;
               text-align: center;
               height: 90vh !important;
               background-color: #009F78;
               .none{
                display: flex !important;
               }
               li{
                padding-top: 9vh;
                color: #ffffff;
               }
           }
        }  
        @media screen and (max-width: 395px){
            .brand {
                width: 80%;
               img {
                width: 60%;
              }
            }
            .headerLinks{
                width: ${({ state }) => (state ? "50%" : "0%")};
                li{
                    font-size: 16px;
                }
            }
        }
`;

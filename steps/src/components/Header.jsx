import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo.png';

const Header = () => {
    return (
        <Nav>
            <div className="brand">
                <img src={Logo} alt="logo" />
            </div>
            <ul className="headerLinks">
                <li>Integrate Product</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
            <button className='btn'>Sign Up</button>
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
        .headerLinks{
            display: flex;
            align-items: center;
            gap: 1.5rem;
            li {
                color: #001A13;
            }
        }
`;

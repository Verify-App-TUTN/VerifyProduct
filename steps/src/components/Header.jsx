import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo.png';

const Header = () => {
    return (
        <Nav>
            <div className="header">
                <div className="brand">
                    <img src={Logo} alt="logo" />
                </div>
                <ul className="headerLinks">
                    <li>Integrate Product</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <button>Sign Up</button>
        </Nav>
    )
}

export default Header;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

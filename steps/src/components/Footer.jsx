import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/footerlg.png';

const Footer = () => {
    return (
        <div style={{ background: "#001A13" }}>
            <div className="container">
                <Section>
                    <div className="leftSide">
                        <div className="brand">
                            <img src={Logo} alt="logo" />
                        </div>
                    </div>
                    <div className="rightSide">Right</div>
                </Section>
            </div>
        </div>
    )
}

export default Footer;

const Section = styled.footer`
     display: flex;
     justify-content: center;
     padding: 1rem;
     .leftSide{
        flex: 1;
     }
`;

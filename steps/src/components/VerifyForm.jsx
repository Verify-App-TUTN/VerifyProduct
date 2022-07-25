import React from 'react';
import styled from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';

const VerifyForm = () => {
    return (
        <Section className='container'>
            <div className='goBack'>
                <FaChevronLeft />
                <span>Back</span>
            </div>
            <h2 className="stepTitle">
                <span>The Platform for</span>
                <span> Verifying Products</span>
            </h2>
        </Section>
    )
}

export default VerifyForm;

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
`;

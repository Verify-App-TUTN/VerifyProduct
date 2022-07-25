import React from 'react';
import styled from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';

const ProductN = () => {
    return (
        <Section>
            <div className='goBack'>
                <FaChevronLeft />
                <span>Back</span>
            </div>
        </Section>
    )
}

export default ProductN;

const Section = styled.section`
      margin: 1rem 0;
      padding: 1rem;
     .goBack{
        display: flex;
        align-items: baseline;
        gap: 10px;
        cursor: pointer;
        margin-bottom: 1rem;
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

import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';
import Detail from './Detail';
import CodeP from './CodeP';
import Product from '../assets/Pp.png';
import Complete from '../assets/complete.png'
import notComplete from '../assets/pp1.png'
import './../App.css';


const VerifyForm = () => {
    const [activeState, setActiveState] = useState(0);

    const Form = () => activeState === 0 ? <Detail /> : <CodeP />

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
            <div className="stepsProgress">
                <div className="stepArea">
                    <p>Just 2 Steps Away</p>
                    {activeState === 0 ? (
                        <img src={notComplete} alt="" />
                    ) : (
                        <img src={Complete} alt="" />
                    )}
                </div>
            </div>
            <div className="formsArea">
                <Form />
                <div className="productImg">
                    <img src={Product} alt="" />
                </div>
            </div>
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
     .stepTitle{
        font-weight: 900;
        font-size: 64px;
        line-height: 72px;
        color: #000D09;
        margin-bottom: .5rem;
        span{
            display: block;
        }
     }
     .stepsProgress{
        margin-bottom: 4rem;
        .stepArea{
            display: flex;
            gap: 14.5rem;
            p{
                font-size: 25px;
                font-weight: 400;
                color: #009F78;
            }
            img{
                width: 297.06px;
            }
        }
     }
     .formsArea{
        display: flex;
        gap: 1rem;
     }
`;
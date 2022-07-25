import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';
import Detail from './Detail';
import CodeP from './CodeP';
import Product from '../assets/Pp.png';


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
                    <div className="divProgess">
                        <div className="active"></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="formsArea">
                <Form />
                <img src={Product} alt="" />
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
            .divProgess{
                display: flex;
                align-items: center;
                position: relative;
                width: 297.06px;
                height: 3px;
                background: linear-gradient(to right,#009F78,#5ae0bf3b 80% );
                margin-top: 10px;
                div:nth-child(1){
                    position: absolute;
                    top: -14px;
                    left: -8px;
                    background-color:#009F78 ;
                    width: 30px;
                    height: 30px;
                    border-radius: 100%;
                }
                div:nth-child(2){
                    position: absolute;
                    top: -14px;
                    right: -8px;
                    background-color: #B5E6DD;
                    width: 30px;
                    height: 30px;
                    border-radius: 100%;
                }
            }
        }
     }
`;

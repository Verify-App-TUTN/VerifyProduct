import React from 'react';
import styled from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';
import Coke from '../assets/coke.png';
import Arrow from '../assets/arrows.png';

const ProductN = () => {
    return (
        <Section>
            <div className='goBack'>
                <FaChevronLeft />
                <span>Back</span>
            </div>
            <div className="productContainer">
                <div className="productText">
                    <h2>Product Name</h2>
                    <p>
                        <span>
                            Get accesss to select your choice product from our list of Product Categories
                            Get accesss to
                        </span>
                        <span>
                            select your choice product from our list of Product Categories
                            Get accesss to select your choice
                        </span>
                        <span>product from our list of Product Categories</span>
                    </p>
                    <button className="btn">Verify Product</button>
                </div>
                <div className="productImages">
                    <div><img src={Coke} alt="productImg" /></div>
                    <div className='img'><img src={Arrow} alt="productImg" /></div>
                </div>
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
     .productContainer{
        display: flex;
        flex-direction: column;
        justify-content: center !important;
        align-items: center !important;
        text-align: center;
        gap: 3rem;
        .productText{
            display: flex;
            flex-direction: column;
            align-items: center !important;
            gap: 2rem;
            h2{
                font-size: 60px;
                font-weight: 900;
                color: #000D09;
            }
            p{
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
                span{
                    display: block !important;
                }
            }
            button {
                background-color: #009F78;
            }
        }
     }
     .productImages{
        position: relative;
        width: 100%;
        height: max-content;
        .img{
            position: absolute;
            left: 180px;
            top: -330px;
            z-index: -1;
            height: 0%;
            img{
                line-height: 0%;
            }
        }
     }
`;

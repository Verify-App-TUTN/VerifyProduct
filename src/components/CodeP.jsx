import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Arrows from '../assets/arrows.png';
import { useNavigate } from 'react-router-dom';

const CodeP = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();
    const onSubmit = data => {
        console.log(data);
        navigate("/verifyproduct", { replace: true })
    }
    return (
        <Div>
            <h4>Kindly Fill in Your Details</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="Form">
                <div className="form-control">
                    <label htmlFor="PID">Product Identification Number</label>
                    <input type="number" placeholder="Input product ID" id="PID" {...register("PID", { required: true, minLength: 6, maxLength: 80 })} />
                    <div className="error">
                        {errors.PID && <span>Hint: Kindly check the top of the cover for product code</span>}
                    </div>
                    <button type='submit' className={`btn ${!errors.PID ? "button" : "disebutton"}`} disabled={!errors}>Verify Product Now</button>
                </div>
                <div className="arrowImg">
                    <img src={Arrows} alt="pI" />
                </div>
            </form>
        </Div>
    )
}

export default CodeP;

const Div = styled.div`
     display: flex;
     flex-direction: column;
     gap: 1rem;
     flex: 1;
     margin-bottom: 60vh;
     h4{
         font-size: 20px;
        font-weight: 400;
     }
     .Form{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        position: relative;
        .form-control{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 9px;
            label{
                color: #333333;
                font-weight: 400;
                font-size: 16px;
                line-height: 132.1%; 
                letter-spacing: 0.02em;
                font-family: 'Lato', sans-serif !important;
            }
            .error{
                margin-bottom: 2rem;
                color: #D92408;
            }
            input {
                width: 70%;
                background: #FFFFFF;
                border: 1px solid rgba(36, 24, 24, 0.25);
                border-radius: 8px;
                padding: 16px 0px 16px 24px;
                color: #333333;
                font-size: 18px;
                font-weight: 400;
                font-family: 'Lato', sans-serif !important;
                outline: none;
                &:focus{
                    border: 1px solid #009F78;
                }
            }
            .button{
               width: max-content !important;
               background: #009F78 !important;
            }
            .disebutton{
               width: max-content !important;
               background: #B5E6DD !important;
            }
        }
    }
        .arrowImg{
            position: absolute;
            right: -458px;
            z-index: -1;
            img{
                height: 50rem;
            }
        }
        @media screen and (max-width: 1200px){
            .Form{
               .form-control {
                  input,select{
                     width: 100%;
                 }
                  .phone{
                      width: 100%;
                   }
                }
            }
        }
        @media screen and (max-width: 950px){
            margin-bottom: 10vh;
            .arrowImg{
                right: 0 !important;
                top: -214px;
            }
        }
        @media screen and (max-width: 710px){
            .arrowImg{
                img{
                    height: 35rem;
                }
            }
        }
        @media screen and (max-width: 410px){
            .arrowImg{
                top: -150px;
                right: -30px !important;
                img{
                    height: 28rem;
                }
            }
            .error{
                font-size: 13px;
            }
        }
`;

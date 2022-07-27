import React from 'react';
import 'react-phone-number-input/style.css';
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Arrows from '../assets/arrows.png';

const Detail = ({ next }) => {
    const { register, control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        next();
        console.log(data)
    };

    return (
        <Div>
            <h4>Kindly Fill in Your Details</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="Form">
                <div className="form-control">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" placeholder="Full name" id="fullname" {...register("fullname", { required: true, maxLength: 80 })} />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id='email' placeholder="helenmorshood@gmail.com" {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })} />
                </div>
                <div className="form-control">
                    <label htmlFor="tel">Phone Number</label>
                    <PhoneInputWithCountry
                        name="phoneInputWithCountrySelect"
                        control={control}
                        rules={{ required: true, minLength: 6, maxLength: 12 }}
                        className="phone"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="sex">Sex</label>
                    <select id='sex' {...register("sex", { required: true })}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="Pnts">Preferred not to say</option>
                    </select>
                </div>
                <div className="form-control-check">
                    <input type="checkbox" name="check" id="check"  {...register('check', { required: true })} />
                    <label htmlFor="check">Remember me</label>
                </div>
                <button className='btn'>Next</button>
                <div className="arrowImg">
                    <img src={Arrows} alt="" />
                </div>
            </form>
        </Div>
    )
}

export default Detail;

const Div = styled.div`
     display: flex;
     flex-direction: column;
     gap: 1rem;
     flex: 1;
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
            input,select{
                width: 60%;
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
            .phone{
                width: 60%;
                background: #FFFFFF;
                border: 1px solid rgba(36, 24, 24, 0.25);
                border-radius: 8px;
                padding-left: 25px;
                .PhoneInputCountrySelect{
                    width: 100% !important;
                }
                input{
                    border: none;
                    border-left: 1px solid rgba(36, 24, 24, 0.25);
                    border-top-left-radius: 0%;
                    border-bottom-left-radius: 0%;
                }
            }
        }
        .form-control-check{
            display: flex;
            align-items: initial;
            gap: 10px;
        }
        button{
            width: 183px;
            background: #009F78;
        }
        .arrowImg{
            position: absolute;
            top: -170px;
            left: 40px;
            z-index: -1;
            img{
                height: 55rem;
            }
        }
     }
     @media screen and (max-width: 1300px){
        .Form{
            .form-control {
                input,select{
                    width: 80%;
                }
                .phone{
                    width: 80%;
                }
            }
        }
     }
     @media screen and (max-width: 1120px){
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
     @media screen and (max-width: 710px){
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
`;
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Detail = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Div>
            <h4>Kindly Fill in Your Details</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="Form">
                <div className="form-Control">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" placeholder="Full name" id="fullname" {...register("Full name", { required: true, maxLength: 80 })} />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email Address</label>
                    <input type="text" id='email' placeholder="helenmorshood@gmail.com" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                </div>
                <div className="form-control">
                    <label htmlFor="tel">Phone Number</label>
                    <input type="tel" id='tel' placeholder="+234" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
                </div>
                <div className="form-control">
                    <label htmlFor="sex">Sex</label>
                    <select id='sex' {...register("Title", { required: true })}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="Pnts">Preferred not to say</option>
                    </select>
                </div>
                <button className='btn'>Next</button>
            </form>
        </Div>
    )
}

export default Detail;

const Div = styled.div``;
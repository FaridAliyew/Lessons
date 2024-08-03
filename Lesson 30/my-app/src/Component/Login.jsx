import React, { useState } from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { TbLock } from "react-icons/tb";
import { DotPulse } from '@uiball/loaders';

function Login() {

    const [data, setData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [noUser, setNoUser] = useState("");
    const [newAccountCreat, setNewAccountCreat] = useState("");


    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const getLocalStorage = localStorage.getItem("Register");
    const result = JSON.parse(getLocalStorage);


    const onSubmit = (e) => {
        e.preventDefault();
        const errors = {};

        if (!data.email) {
            errors.email = "Email daxil edin";
        }
        if (!data.password) {
            errors.password = "Password daxil edin";
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
        } else if (result.email === data.email && result.password === data.password) {
            document.querySelector(".loader-wrapperr").style.display = "flex";
            setTimeout(() => {
                document.querySelector("#login").style.display = "none";
                document.querySelector("#data").style.display = "block";
            }, 3000);

        } else {
            setNoUser("This user doesn’t exist");
            setNewAccountCreat("Create new account now");
        }
    }

    const creatNewAccount = ()=>{
        document.querySelector("#login").style.display = 'none';
        document.querySelector("#register").style.display = 'block';
        document.querySelector(".loader-wrapper").style.display = "none";
    }

    return (
        <section id='login' style={{ display: "none" }}>
            <form id='login-form' onSubmit={onSubmit}>
                <h2>Login</h2>

                <HiOutlineMail className='icon' />
                <input
                    type="email"
                    placeholder='Email'
                    name='email'
                    value={data.email}
                    onChange={onChange} /> <br />
                {errors.email && <p>{errors.email}</p>}

                <TbLock className='icon' />
                <input
                    type="password"
                    placeholder='Password'
                    name='password'
                    value={data.password}
                    onChange={onChange} /> <br />
                {errors.password && <p>{errors.password}</p>}
                {noUser && <p>{noUser}</p>}

                <input type="checkbox" className='checkbox' id='checkbox' /> <label htmlFor='checkbox'>Remember Password</label>
                {newAccountCreat && <p className='newAccount' onClick={creatNewAccount} style={{ color: 'white', marginTop: '10px', fontStyle: 'italic', cursor: 'pointer' }}>{newAccountCreat}</p>}

                <button type='submit' id='login-submit'>Login</button>

                <div className="loader-wrapperr" style={{ display: 'none' }}>
                    <DotPulse size={40} speed={0.9} color="white" />
                </div>
            </form>
        </section>

    )
}

export default Login
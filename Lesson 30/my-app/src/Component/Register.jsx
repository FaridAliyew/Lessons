import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { TbLock } from "react-icons/tb";
import { DotSpinner } from '@uiball/loaders';


import '../style/style.css'

function Register() {
    const [data, setData] = useState({ username: "", email: "", password: "" });
    const [errors, setErrors] = useState({});

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        const usernameRegex = /^[A-Za-z]+$/;

        if (!data.username) {
            errors.username = "Username daxil edin";
        } else if (!usernameRegex.test(data.username)) {
            errors.username = "Username hərflərdən ibarət olmalıdır";
        }

        if (!data.email) {
            errors.email = "Email daxil edin";
        }
        if (!data.password) {
            errors.password = "Password daxil edin";
        } else if (data.password.length < 6) {
            errors.password = "Passwordun uzunluğu 6 simvoldan az olmamalıdır";
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
        } else {
            alert("Register success");

            document.querySelector(".loader-wrapper").style.display = "flex";

            setTimeout(() => {
                localStorage.setItem("Register", JSON.stringify(data));
                document.querySelector("#register").style.display = "none";
                document.querySelector("#login").style.display = "block";
            }, 3000);

        }
    }

    return (
        <section id='register'>
            <form id='register-form' onSubmit={onSubmit}>
                <h2>REGISTER</h2>

                <FaUser className='icon' />
                <input
                    type="text"
                    placeholder='Username'
                    name='username'
                    value={data.username}
                    onChange={onChange} /> <br />
                {errors.username && <p>{errors.username}</p>}

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

                <button type='submit' id='register-submit'>Register</button>

                <div className="loader-wrapper" style={{ display: "none" }}>
                    <DotSpinner size={40} speed={0.9} color="white" />
                </div>
            </form>
        </section>
    );
}

export default Register;

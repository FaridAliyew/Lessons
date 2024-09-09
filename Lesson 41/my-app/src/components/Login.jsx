import React, { useState, useEffect } from 'react'
import { supabase } from '../client'
import { Link, useNavigate } from 'react-router-dom'
import img from '../img/img.png'
import { tailChase } from 'ldrs'  // Spinner-in kitabxanasını import edirik

function Login({ setToken }) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        tailChase.register();  // Spinner-i qeydiyyatdan keçirmək üçün istifadə edirik
    }, []);

    const handleChange = (e) => {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password
            });
            if (error) throw error;
            setToken(data);
            navigate('/homepage');
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='login-container'>
            <div className='login'>
                <form onSubmit={handleSubmit} className='form-container'>
                    <h1>Welcome Back</h1>
                    <label>Email address</label>
                    <input
                        type="email"
                        name='email'
                        placeholder='Enter your email'
                        onChange={handleChange} />
                    <label>Password</label>
                    <input
                        type="password"
                        name='password'
                        placeholder='Enter your password'
                        onChange={handleChange}
                    /> <br />
                    <button type='submit' disabled={loading}>
                        {loading ? <l-tail-chase size="25" speed="1.75" color="white"></l-tail-chase> : 'Login'}
                    </button>
                    <span style={{ display: 'block', textAlign: 'center' }}>
                        Don't have an account? <Link to="/signup" style={{ color: 'green', textDecoration:'none' }}>Sign Up</Link>
                    </span>
                </form>
                <div className='img-container'>
                    <img src={img} alt="nature" />
                </div>
            </div>
        </div>
    )
}

export default Login;

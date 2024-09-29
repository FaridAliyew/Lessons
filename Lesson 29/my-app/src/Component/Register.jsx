import React, { Component } from 'react';
import { FaRegUser } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            errors: {
                username: "",
                email: "",
                password: ""
            }
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        let errors = {};
        if (!this.state.username) {
            errors.username = "Username daxil edin";
        }
        if (!this.state.email) {
            errors.email = "Email daxil edin";
        }
        if (!this.state.password) {
            errors.password = "Password daxil edin";
        }

        if (Object.keys(errors).length > 0) {
            this.setState({ errors });
        } else {
            const { username, email, password } = this.state;
            const data = { username, email, password };
            console.log("Success :)");
            localStorage.setItem("Register", JSON.stringify(data));
        }

    }

    render() {
        return (
            <div className='main-container'>
                <div className='container'>
                    <h2>Register</h2>
                    <form onSubmit={this.onSubmit}>
                        <FaRegUser className='icon' />
                        <input
                            type="text"
                            value={this.state.username}
                            name='username'
                            onChange={this.onChange}
                            placeholder='Username'
                        /><br />
                        {this.state.errors.username && <p>{this.state.errors.username}</p>}


                        <MdOutlineAlternateEmail className='icon' />
                        <input
                            type="email"
                            value={this.state.email}
                            name='email'
                            onChange={this.onChange}
                            placeholder='Email'
                        /><br />
                        {this.state.errors.email && <p>{this.state.errors.email}</p>}


                        <RiLockPasswordLine className='icon' />
                        <input
                            type="password"
                            value={this.state.password}
                            name='password'
                            onChange={this.onChange}
                            placeholder='Password'
                        /><br />
                        {this.state.errors.password && <p>{this.state.errors.password}</p>}
                        <button type='submit' id='submit'>Register</button>
                    </form>
                </div>
            </div>
        )
    }
}

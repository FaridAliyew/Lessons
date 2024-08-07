import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const myFunc = ()=>{
        navigate('/');    
    }

    return (
        <nav>
            <div className='container-fluid'>
                <div className='row d-flex justify-content-around'>
                    <div className='col-6    logo'>
                        <img
                            src="https://www.oli-lacke.de/fileadmin/_processed_/f/4/csm_Logo_OLI_NATURA_2-72dpi_0dced655e8.jpg"
                            height={90}
                            alt="Logo"
                        onClick={myFunc}/>
                    </div>

                    <div className='col-6 d-flex justify-content-evenly align-items-center'>
                        <Link className='link' to="/">Home</Link>
                        <Link className='link' to="/blogs">Blogs</Link>
                        <Link className='link' to="/about">About</Link>
                        <Link className='link' to="/login">Login</Link>
                        <Link className='link' to="/register">Register</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

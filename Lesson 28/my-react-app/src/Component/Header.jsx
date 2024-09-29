import React from 'react';

function Header() {
    return (
        <div className="header">
            <div className="container ">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand p-3" href="#page-top">Start Bootstrap</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                                <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                                <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                                <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
                                <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="row">
                    <div className="col-12 text-center">
                        <h5 className="text-white text-one">Welcome To Our Studio!</h5>
                    </div>
                    <div className="col-12 text-center">
                        <h1 className="text-white text-two">IT'S NICE TO MEET YOU</h1>
                    </div>
                    <div className="col-12 text-center">
                        <button className="btn btn-warning mt-5 text-white my-button">TELL ME MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

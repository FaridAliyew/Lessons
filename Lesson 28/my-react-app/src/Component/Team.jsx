import React from 'react'
import team1 from '../imgs/team-1.jpg'
import team2 from '../imgs/team-2.jpg'
import team3 from '../imgs/team-3.jpg'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";

function Team() {
    return (
        <>
            <div id='team' className='team'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <h1 className='fw-bold'>OUR AMAZING TEAM</h1>
                            <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>

                    <div className='row text-center teams'>
                        <div className='col-12 mb-5 mb-lg-0 col-lg-4'>
                            <div className='team1 mb-4'>
                                <img src={team1} className='img-fluid' alt="#" />
                            </div>
                            <h3>Parveen Anand</h3>
                            <p className='mb-4'>Lead Designer</p>
                            <span><FaTwitter className='text-white twitter' /></span>
                            <span><FaFacebookF className='text-white facebook' /></span>
                            <span><BiLogoLinkedin className='text-white linkedin' /></span>
                        </div>
                        <div className='col-12 mb-5 mt-4 mt-lg-0 mb-lg-0 col-lg-4'>
                            <div className='team2 mb-4'>
                                <img src={team2} className='img-fluid' alt="#" />
                            </div>
                            <h3>Diana Petersen</h3>
                            <p className='mb-4'>Lead Marketer</p>
                            <span><FaTwitter className='text-white twitter' /></span>
                            <span><FaFacebookF className='text-white facebook' /></span>
                            <span><BiLogoLinkedin className='text-white linkedin' /></span>
                        </div>
                        <div className='col-12 mt-4 mt-lg-0 col-lg-4'>
                            <div className='team3 mb-4'>
                                <img src={team3} className='img-fluid' alt="#" />
                            </div>
                            <h3>Larry Parker</h3>
                            <p className='mb-4'>Lead Developer</p>
                            <span><FaTwitter className='text-white twitter' /></span>
                            <span><FaFacebookF className='text-white facebook' /></span>
                            <span><BiLogoLinkedin className='text-white linkedin' /></span>
                        </div>

                        <div className='row mt-5'>
                            <div className='col-12 w-75 ms-auto me-auto mt-5'>
                                <p className='fs-5 text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                            </div>
                        </div>
                    </div>

                    <div className='row logos'>
                        <div className='col-12 col-md-3'>
                            <img className="img-fluid mx-auto img-brand" width={250} src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/logos/microsoft.svg" alt="..."  />
                        </div>

                        <div className='col-12 mt-4 mt-md-0 col-md-3'>
                            <img className="img-fluid img-brand" width={250} src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/logos/google.svg" alt="..."  />
                        </div>

                        <div className='col-12 mt-4 mt-md-0 col-md-3'>
                            <img className="img-fluid img-brand" width={250} src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/logos/facebook.svg" alt="..."  />
                        </div>

                        <div className='col-12 mt-4 mt-md-0 col-md-3'>
                            <img className="img-fluid img-brand" width={250} src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/logos/ibm.svg" alt="..."  />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team
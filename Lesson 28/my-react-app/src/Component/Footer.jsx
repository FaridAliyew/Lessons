import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";

function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row mt-4 my-footer'>
                    <div className='col-12 mb-2 mb-lg-0 col-lg-3'>
                        <p className='text-center'>Copyright © Your Website 2023</p>
                    </div>

                    <div className='col-12 mb-3  mb-lg-0 col-lg-3 ms-lg-4 text-center text-lg-none'>
                        <span className='ms-2 ms-lg-0 icon'><FaTwitter className='text-white twitter' /></span>
                        <span className='ms-2 me-3 icon'><FaFacebookF className='text-white facebook' /></span>
                        <span className='icon'><BiLogoLinkedin className='text-white linkedin' /></span>
                    </div>

                    <div className='col-12 col-lg-3 text-center'>
                        <span className='me-3'>Privacy Policy</span>
                        <span>Terms of Use</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
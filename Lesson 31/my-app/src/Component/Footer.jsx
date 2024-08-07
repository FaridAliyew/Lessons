import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { GrGooglePlus } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Footer() {
    return (
        <footer>
            <div className='container text-center '>
                <div className='row'>
                    <div className='col-12 icons'>
                        <FaFacebookF />
                        <FaTwitter className='mx-4'/>
                        <TfiYoutube />
                        <GrGooglePlus className='mx-4'/>
                        <FaInstagram />
                        <FaGithub className='ms-4'/>
                    </div>

                    <div className='col-12 mt-3'>
                        <p className='fst-italic text-center text-body-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, perspiciatis?</p>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
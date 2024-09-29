import React from 'react'
import { SlBasket } from "react-icons/sl";
import { LuLaptop2 } from "react-icons/lu";
import { FaLock } from "react-icons/fa";

function Services() {
    return (
        <>
            <div id='services' className="services">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-5 text-center">
                            <h1  className="fw-bold">SERVICES</h1>
                            <p className="fst-italic">Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>

                    <div className="row my-services">
                        <div className="col-12 col-md-4  text-center">
                            <span><SlBasket className='basket text-white'/></span>
                            <h4 className='mt-4'> E-Commerce</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>

                        <div className="col-12 mt-5 mt-md-0 col-md-4 text-center">
                            <span><LuLaptop2 className='laptop text-white' /></span>
                            <h4 className='mt-4'>Responsive Design</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>

                        <div className="col-12 mt-5 mt-md-0 col-md-4 text-center">
                            <span><FaLock className='lock text-white' /></span>
                            <h4 className='mt-4'>Web Security</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
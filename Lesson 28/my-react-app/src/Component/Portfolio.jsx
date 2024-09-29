import React from 'react'
import img1 from '../imgs/1.jpg';
import img2 from '../imgs/2.jpg';
import img3 from '../imgs/3.jpg';
import img4 from '../imgs/4.jpg';
import img5 from '../imgs/5.jpg';
import img6 from '../imgs/6.jpg';


function Portfolio() {
    return (
        <>
            <div id='portfolio' className='portfolio'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <h1 className='fw-bold'>PORTFOLIO</h1>
                            <p className='fst-italic mb-5'>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>

                        <div className='container cards'>
                            <div className='row'>
                                <div className='col-12 col-md-6 col-lg-4 text-center'>
                                    <img src={img1} className='img-fluid' alt="#" />
                                    <h3 className='fw-bold mt-4'>Threads</h3>
                                    <p className='fst-italic'>Illustration</p>
                                </div>
                                <div className='col-12 col-md-6 col-lg-4 text-center'>
                                    <img src={img2} className='img-fluid' alt="#" />
                                    <h3 className='fw-bold mt-4'>Explore</h3>
                                    <p className='fst-italic'>Graphic Design
                                    </p>
                                </div>
                                <div className='col-12 col-md-6 col-lg-4 text-center'>
                                    <img src={img3} className='img-fluid' alt="#" />
                                    <h3 className='fw-bold mt-4'>Finish</h3>
                                    <p className='fst-italic'>Identity
                                    </p>
                                </div>
                                <div className='col-12 col-md-6 col-lg-4 text-center mt-4'>
                                    <img src={img4} className='img-fluid' alt="#" />
                                    <h3 className='fw-bold mt-4'>Lines</h3>
                                    <p className='fst-italic'>Branding
                                    </p>
                                </div>
                                <div className='col-12 col-md-6 col-lg-4 text-center mt-4'>
                                    <img src={img5} className='img-fluid' alt="#" />
                                    <h3 className='fw-bold mt-4'>Southwest
                                    </h3>
                                    <p className='fst-italic'>Website Design

                                    </p>
                                </div>
                                <div className='col-12 col-md-6 col-lg-4 text-center mt-4'>
                                    <img src={img6} className='img-fluid' alt="#" />
                                    <h3 className='fw-bold mt-4'>Window</h3>
                                    <p className='fst-italic'>Photography
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio
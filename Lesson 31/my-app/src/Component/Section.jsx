import React from 'react'
import img1 from '../img/img-1.jpg'
import img2 from '../img/img-2.jpg'


function Section() {
    return (
        <div className='container section'>
            <div className='row card-1'>
                <div className='col-6'>
                    <img src={img1} className='img-fluid mt-4' alt="#" />
                </div>
                <div className='col-6 d-flex align-items-center'>
                    <div>
                        <h5 className='fs-1'>Post Format: Standard</h5>
                        <p className='text-body-secondary'>Posted on October 5, 2016 by Aigars</p>
                    </div>
                </div>
            </div>

            <div className='row card-2'>
                <div className='col-6 d-grid align-items-center'>
                    <div className='text-end'>
                        <h5 className='fs-1'>Post Format: Standard</h5>
                        <p className='text-body-secondary'>Posted on October 5, 2016 by Aigars</p>
                    </div>
                </div>
                <div className='col-6'>
                    <img src={img2} className='img-fluid' alt="#" />
                </div>
            </div>


            {/* ----------- Cards ---------- */}
            <div className='row cards'>
                <div className='col-12 text-center'>
                    <h1>Lorem ipsum dolor sit.</h1>
                    <p className='fst-italic text-body-secondary'>Lorem, ipsum.</p>
                </div>

                <div className='col-6 text-center mt-5'>
                    <h6>Template: Featured Image</h6>
                    <p className='text-body-secondary'>Posted on November 11, 2015by Aigars</p>
                    <img src="https://149842022.v2.pressablecdn.com/activello/wp-content/uploads/sites/57/2012/03/photo-1437915015400-137312b61975-330x220.jpg" className='d-block mx-auto' alt="#" />

                </div>

                <div className='col-6 text-center mt-5'>
                    <h6>Template: Featured Image</h6>
                    <p className='text-body-secondary'>Posted on November 11, 2015by Aigars</p>
                    <img src="https://149842022.v2.pressablecdn.com/activello/wp-content/uploads/sites/57/2015/11/photo-1431578500526-4d9613015464-330x220.jpg" className='d-block mx-auto' alt="#" />

                </div>

                <div className='col-6 text-center mt-5'>
                    <h6>Template: More Tag</h6>
                    <p className='text-body-secondary'>Posted on November 1, 2015by Aigars</p>
                    <img src="https://149842022.v2.pressablecdn.com/activello/wp-content/uploads/sites/57/2015/11/oIpwxeeSPy1cnwYpqJ1w_Dufer-Collateral-test-330x220.jpg" className='d-block mx-auto' alt="#" />
                </div>

                <div className='col-6 text-center mt-5' >
                    <h6 className='text-center'>Template: Excerpt</h6>
                    <p className='text-center text-body-secondary'>Posted on November 1, 2015by Aigars</p>
                    <img src="https://149842022.v2.pressablecdn.com/activello/wp-content/uploads/sites/57/2015/11/16386149745_f56818fbd4_o-330x220.jpg" className='d-block mx-auto' alt="#" />
                </div>
            </div>
        </div>
    )
}

export default Section
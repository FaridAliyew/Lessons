import React from 'react'


function ContactUs() {
  return (
    <div id='contact' className='contactUs mt-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center text'>
            <h1 className='text-white fw-bold'>CONTACT US</h1>
            <p className='fst-italic text-secondary fs-5'>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

        <div className='row mt-5'>
          <div className='col-12 col-md-6'>
            <form>
              <input type="text" placeholder='Your Name' className='w-100' /> <br />
              <input type="email" placeholder='Your Email' className='my-3 w-100' /> <br />
              <input type="tel" placeholder='Your Phone' className='w-100' />
            </form>
          </div>

          <div className='col-12 col-md-6'>
            <textarea className='w-100 h-100 mt-4 mt-md-0' style={{ borderRadius: "10px" }}></textarea>
          </div>
          
          <div className='col-12 mt-5'>
            <button className='btn bg-warning text-white'>SEND MESSAGE</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ContactUs
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import fab from '../images/Group 5.png'
import insta from '../images/Group 9.png'
import tiw from '../images/Group 10.png'
import lin from '../images/Group 11.png'
import '../components/css/Footer.css'

function Footer() {
  return (
    <div className='text-white pt-5 pb-2 footer'>
      <div className='container mt-5'>
        <div className='row text-center text-md-start'>
          {/* First Column */}
          <div className='col-md-4 mb-3 heading-icons'>
            <img src='/logo.svg' alt='logo' />
            <p className='fot-para' style={{ color: '#fff' }}>
              At Foody Zone, we deliver Delicious Dishes and exclusive deals,
              delightful flavors, and unforgettable dining experiences!
            </p>
            {/* Social Icons */}
            <div className='d-flex justify-content-center justify-content-md-start footer-icons'>
              <img src={fab} alt='icon1' className='mx-0 icon' width='60px' />
              <img src={insta} alt='icon2' className='mx-0 icon' width='60px' />
              <img src={tiw} alt='icon3' className='mx-0 icon' width='60px' />
              <img src={lin} alt='icon4' className='mx-0 icon' width='60px' />
            </div>
          </div>

          {/* Second Column */}
          <div className='col-md-4 mb-3 ' style={{ color: '#fff' }}>
            <h5 style={{ textAlign: 'center' }} className='small-heading'>
              Links
            </h5>
            <p className='fot-para' style={{ color: '#fff' }}>
              <a
                href='#about'
                className='text-decoration-none text-white d-block footer-link'
              >
                Menu
              </a>
              <a
                href='#projects'
                className='text-decoration-none text-white d-block footer-link'
              >
                Reviews
              </a>
              <a
                href='#about'
                className='text-decoration-none text-white d-block footer-link'
              >
                About Us
              </a>
              <a
                href='#contact'
                className='text-decoration-none text-white d-block footer-link '
              >
                Contact
              </a>
            </p>
          </div>

          {/* Third Column */}
          <div className='col-md-4 mb-3'>
            <h5 className='fw-bold small-heading '>Contact Us</h5>
            <p className='fot-para' style={{ color: '#fff' }}>
              Whether you have a question about features, pricing, or anything
              else, our team is ready to answer all your questions.
              <br />
              +92 334 4565295
            </p>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className='hor' />

        {/* Copyright */}
        <div className='text-center footer-last' style={{ color: '#fff' }}>
          <p className='last-line'>
            © 2024 Copyright by Foody Zoone (Pvt) LTD. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer

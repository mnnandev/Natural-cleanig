import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import logo from '../assets/logo.png'
import ProgressBar from './ProgressBar'
const Header = () => {
  return (
    < >
      <nav id="mainNav" className="navbar navbar-light bg-white fixed-top">
      <div className="container">
        <a href="#" className="navbar-brand">
          <h1 className="visually-hidden">Naturalcare Cleaning Services</h1>
          <img src={logo} className="d-inline-block align-top" />
        </a>
        <span className="spacer"></span>
        <p className="  nav-item " style={{ verticalAlign: 'middle' }}>
          <a href="tel:2816670535">
            <FaPhoneAlt className="middle text-navy phone-margin phone" />
            <span className="hidden-xs visible-sm text-navy">281-667-0535</span>
          </a>
        </p>
        {/* <div className="pricing-container ml-2 d-lg-none visible-xs">
          <p className="d-inline-block m-0 mr-4">
            <span className="small d-block mb-1 text-muted price">First</span>
            <span className="price">$284</span>
          </p>
          <p
            aria-label="Toggle Overview"
            className="m-0 d-inline pointer d-lg-none visible-xs"
          >
            <i className="material-icons p-1">keyboard_arrow_down</i>
            <i className="material-icons p-1" hidden>
              keyboard_arrow_up
            </i>
          </p>
        </div> */}
      </div>
     <ProgressBar />
    </nav>
    </>
  )
}

export default Header

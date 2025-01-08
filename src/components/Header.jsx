import React, { useState } from "react";
import { FaPhoneAlt, FaTimes } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import logo from "../assets/maidsbygrace.png";
import ProgressBar from "./ProgressBar";
import Overview from "./Overview";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav id="mainNav" className="navbar navbar-light bg-white fixed-top">
        <div className="container">
          <a href="#" className="navbar-brand">
            <h1 className="visually-hidden">Naturalcare Cleaning Services</h1>
            <img src={logo} className="d-inline-block align-top" alt="Logo" />
          </a>
          <span className="spacer"></span>
          <p className="nav-item" style={{ verticalAlign: "middle" }}>
            <a href="#" className="phone-number">
              <FaPhoneAlt className="middle text-navy phone-margin phone" />
              <span className="hidden-xs visible-sm text-navy">281-667-0535</span>
              <FaAngleDown
                className="text-navy d-lg-none "
                onClick={() => setShow(true)}
                style={{ cursor: "pointer" }}
              />
            </a>
          </p>
        </div>
        <ProgressBar />
      </nav>

      {/* Sidebar */}
      <div className={`sidebar-overlay ${show ? "view" : ""}`} onClick={() => setShow(false)}>
         
          
          <Overview show = {show} setShow={setShow} />
      </div>

     
    </>
  );
};

export default Header;

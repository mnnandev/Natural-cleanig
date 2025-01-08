import React from "react";
import Icon_LocationMarker from "../assets/Icon_LocationMarker@2x.png";
import Icon_Email from "../assets/Icon_Email@2x.png";
import { FaTimes } from "react-icons/fa";

import Icon_Phone from "../assets/Icon_Phone@2x.png";
import Icon_Calendar from "../assets/Icon_Calendar@2x.png";
import Icon_Time_Grey from "../assets/Icon_Time_Grey@2x.png";
import Icon_House from "../assets/Icon_House@2x.png";
import Icon_Checkmark from "../assets/Icon_Checkmark@2x.png";
import { FaUser } from "react-icons/fa6";

const Overview = ({ show, setShow }) => {
  return (
    <div
      className={`page_right col-lg-5 ${
        show ? "d-block" : "d-none"
      } d-lg-block`}
    >
      <button className="close-btn" onClick={() => setShow(false)}>
        <FaTimes size={24} />
      </button>
      <div className="  card" style={{ width: "18rem" }}>
        <div className="mat-mdc-card-content" style={{ padding: 0 }}>
          <ul className="card-list">
            <li>
              <img
                alt="Address Marker"
                src={Icon_LocationMarker}
                className="card-icon"
              />
              6800 W Sam Houston Pkwy S
            </li>
            <li>
              <FaUser className="card-icon material-icons text-success" />
              mnnan mazhar
            </li>
            <li>
              <img alt="Email" src={Icon_Email} className="card-icon" />
              mnnanhavibhutta@gmail.com
            </li>
            <li>
              <img alt="Phone" src={Icon_Phone} className="card-icon" />
              (031) 268-1391
            </li>
          </ul>
        </div>
      </div>

      <div className="  card" style={{ width: "18rem" }}>
        <div className="mat-mdc-card-content" style={{ padding: 0 }}>
          <ul className="card-list">
            <li>
              <p>
                <img
                  alt="Arrival Date"
                  src={Icon_Calendar}
                  className="card-icon"
                />
                November 3, 2025
              </p>
            </li>
            <li>
              <p>
                <img
                  alt="Arrival Window"
                  src={Icon_Time_Grey}
                  className="card-icon"
                />
                Flexible Arrival
              </p>
            </li>
            <hr className="mat-divider mat-divider-horizontal" />
            <li>
              <p>
                <img
                  alt="Cleaning Level"
                  src={Icon_House}
                  className="card-icon"
                />
                Get it Clean
                <span className="float-end price">185</span>
                <small className="subline">1 bedroom, 1 bathroom</small>
              </p>
            </li>
            <li>
              <p className="d-flex align-items-center">
                <img alt="Email" src={Icon_Checkmark} className="card-icon" />
                <span className="px-2">Hand-wipe Baseboards</span>
                <span className="ml-auto price text-right">55</span>
              </p>
            </li>
            <li>
              <p className="d-flex align-items-center">
                <img alt="Email" src={Icon_Checkmark} className="card-icon" />
                <span className="px-2">Hand-wipe Shutters</span>
                <span className="ml-auto price text-right">65</span>
              </p>
            </li>
            <li>
              <p className="d-flex align-items-center">
                <img alt="Email" src={Icon_Checkmark} className="card-icon" />
                <span className="px-2">Inside Oven</span>
                <span className="ml-auto price text-right">45</span>
              </p>
            </li>
            <li>
              <p className="d-flex align-items-center">
                <img alt="Email" src={Icon_Checkmark} className="card-icon" />
                <span className="px-2">Inside Windows</span>
                <span className="ml-auto price text-right">55</span>
              </p>
            </li>
            <hr className="mat-divider border-primary mt-2 mat-divider-horizontal" />
            <li>
              <div className="row align-items-center subtotal">
                <div className="col-6">First Clean</div>
                <div className="col-6">
                  <span className="float-end price text-right d-flex flex-column align-items-end">
                    $405 <small className="taxline">+tax</small>
                  </span>
                </div>
              </div>
            </li>
            <hr className="mat-divider mat-divider-horizontal" />
            <li className="bg-pink2">
              <div className="row align-items-center subtotal">
                <div className="col-6">
                  Full Clean <br />
                  <small className="subline ">Every 2 Weeks</small>
                </div>
                <div className="col-6  d-flex flex-column align-items-end">
                  <span className="float-end price">$104</span>
                  <small className="taxline">+tax</small>
                </div>
              </div>
            </li>
            <div className="strike bg-info" hidden>
              <span> &amp; </span>
            </div>
            <li className="bg-info" hidden>
              <div className="row align-items-center subtotal">
                <div className="col-6">TidyUp+ </div>
                <div className="col-6">
                  <span className="float-end price text-right">$0</span>
                  <small className="taxline">+tax</small>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="card faq" style={{ width: "18rem", border: "none" }}>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What is included in a cleaning service?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                See what is included in a cleaning service <a href="#">here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

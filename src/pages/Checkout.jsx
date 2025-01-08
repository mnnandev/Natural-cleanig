import React from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import visa from '../assets/Visa@2x.png';
import Mastercard from '../assets/Mastercard@2x.png';
import Discovery from '../assets/Discovery@2x.png';
import AMEX from '../assets/AMEX@2x.png';
import { Link } from "react-router-dom";
import { CiLock } from "react-icons/ci";
import {
 
    decrementStep,
  } from "../redux/features/progressBarSlice";
import Overview from "../components/Overview";
import { useDispatch } from "react-redux";

const Checkout = () => {
    const dispatch = useDispatch();

  

  const handlePrevious = () => {
    dispatch(decrementStep());
  };
  return (
    <div className="row page">
      <div className="page_left col-lg-7 col-12">
        <div className="page-title text-center">
          <div className="float-start">
            
            <Link to={'/schedule'} className="text-pink" onClick={handlePrevious} >
              <FaCircleArrowLeft />
            </Link>
          </div>
          Book For Free
        </div>
        <div className="bg-pink text-white text-center py-3 rounded">
  <strong>Free cancellation or reschedule</strong>
  <br />
  up to 24 hours before clean.
</div>
<div className="row mt-3">
  {/* First Name */}
  <div className="col-md-6 col-12">
    <label className="text-secondary m-0">First Name</label>
    <input
      required
      className="form-control ng-pristine ng-valid ng-touched"
    />
  </div>

  {/* Last Name */}
  <div className="col-md-6 col-12">
    <label className="text-secondary m-0">Last Name</label>
    <input
      required
      className="form-control ng-pristine ng-invalid ng-touched"
    />
  </div>
</div>

<div className="row mt-3">
  {/* Email */}
  <div className="col-md-6 col-12">
    <label className="text-secondary m-0">Email</label>
    <input
      required
      className="form-control ng-untouched ng-pristine ng-valid"
    />
  </div>

  {/* Phone */}
  <div className="col-md-6 col-12">
    <label className="text-secondary m-0">Phone</label>
    <input
      required
      className="form-control ng-untouched ng-pristine ng-valid"
    />
  </div>
</div>

<div className="row mt-3">
  {/* Promo Code */}
  <div className="col-12 col-sm-6">
    <label className="text-secondary m-0">Promo Code</label>
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control ng-untouched ng-pristine ng-valid"
      />
      <div className="input-group-append">
        <button type="button" className="btn bg-pink text-white">
          Apply
        </button>
      </div>
    </div>
  </div>
</div>
<div className="mx-3 my-5 border-top"></div>
<div className="row">
  <div className="col-12 text-center">
    <p className="mat-headline fs-4">
      You will not be charged until after your service.
    </p>
  </div>
</div>
<div className="row ng-star-inserted ">
  {/* Credit Card Number */}
  <div className="col-12 col-sm-6">
    <label className="text-secondary m-0">Credit Card Number</label>
    <div className="input-group mb-3">
      <input
        required
        className="form-control ng-untouched ng-pristine ng-invalid"
        placeholder="0000 0000 0000 0000"
      />
    </div>
  </div>

  {/* Expiration */}
  <div className="col-4 col-sm-3">
    <label className="text-secondary m-0">Expiration</label>
    <input
      className="form-control ng-untouched ng-pristine ng-valid"
      placeholder="MM/YYYY"
    />
  </div>

  {/* CVC */}
  <div className="col-4 col-sm-3">
    <label className="text-secondary m-0">CVC</label>
    <input
      className="form-control ng-untouched ng-pristine ng-valid"
      placeholder="000"
    />
  </div>

  {/* Credit Card Icons and Info */}
  <p className="col-12 mt-3 mt-md-0  mb-3 small align-middle">
    <img
      alt="Visa"
      src={visa }
      className="credit-card-image"
    />
    <img
      alt="Mastercard"
      src={Mastercard}
      className="credit-card-image"
    />
    <img
      alt="Discover"
      src={Discovery}
      className="credit-card-image"
    />
    <img
      alt="American Express"
       src={AMEX}
      className="credit-card-image"
    />
    <CiLock className="fs-2" />All
    transactions are safe and secure with 256 Bit SSL encryption via Stripe.
  </p>
</div>
<button className="bg-pink booking-button mb-3" >
Reserve your booking
</button>
<p   className="mat-subheading-1 text-center pb-2 mb-md-0">By clicking “reserve your booking”, you are agreeing to our terms of service and privacy policy. </p>
      </div>
      <Overview/>
    </div>
  );
};

export default Checkout;

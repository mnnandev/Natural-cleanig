import React, { useState } from "react";
import DianaandEllie from "../assets/DianaandEllie.png";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { incrementStep  } from '../redux/features/progressBarSlice';
import { Link } from "react-router-dom";


const GetStarted = () => {
  const [bedroomCount, setBedroomCount] = useState(1); // Bedroom counter
  const [bathroomCount, setBathroomCount] = useState(1); // Bathroom counter
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(incrementStep());
  };

  
  // Bedroom handlers
  const handleBedroomIncrement = () => {
    if (bedroomCount < 10) {
      setBedroomCount(bedroomCount + 1);
    }
  };

  const handleBedroomDecrement = () => {
    if (bedroomCount > 1) {
      setBedroomCount(bedroomCount - 1);
    }
  };

  // Bathroom handlers
  const handleBathroomIncrement = () => {
    if (bathroomCount < 10) {
      setBathroomCount(bathroomCount + 0.5);
    }
  };

  const handleBathroomDecrement = () => {
    if (bathroomCount > 1) {
      setBathroomCount(bathroomCount - 0.5);
    }
  };
  const formatBathroomCount = (bathroomCount) => {
    return bathroomCount % 1 === 0 ? bathroomCount.toString() : bathroomCount.toFixed(1);
  }; 

  return (
    <div className="row page">
      <div className="page_left col-lg-7 col-12">
        <div className="page-title text-center">
          Ready to Customize your Home Cleaning?
        </div>
        <blockquote className="blockquote mt-3">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img
                src={DianaandEllie}
                className="img-circle"
                style={{ width: "100px", height: "100px" }}
                alt="Diana and Ellie"
              />
            </div>
            <div className="col-sm-9">
              <p className="mb-0 question-label">
                Simply enter your home details. You can customize your cleaning,
                check available dates, and even book online!{" "}
                <small>
                  <em>~Diana, Owner and Mom</em>
                </small>
              </p>
            </div>
          </div>
        </blockquote>
        <div className="row">
          {/* Address Input */}
          <div className="col-9">
            <label className="text-secondary m-0" htmlFor="my-address-field">
              Address
            </label>
            <input
              autoCorrect="off"
              autoComplete="new-password"
              id="my-address-field"
              autoCapitalize="off"
              spellCheck="off"
              type="text"
              className="form-control"
              style={{ resize: "none", height: "38px" }}
              placeholder="Enter a location"
            />
          </div>

          {/* Apartment Number Input */}
          <div className="col">
            <label className="text-secondary m-0" htmlFor="apt-field">
              Apt #
            </label>
            <input type="text" id="apt-field" className="form-control" />
          </div>
        </div>
        <div className="form-group mt-1">
          <label className="text-secondary m-0" htmlFor="first-name">
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            className="form-control"
            required
            placeholder="Enter your first name"
          />
        </div>
        <div className="form-group mt-1">
          <label className="text-secondary m-0" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group mt-1">
          <label className="text-secondary m-0" htmlFor="phone-number">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone-number"
            name="phone-number"
            className="form-control"
            required
            placeholder="(000) 000-0000"
          />
        </div>

        {/* Bedroom Counter */}
        <div className="form-group row mt-4 mb-1">
          <p className="question-label col-6">
            <IoBedOutline style={{ fontSize: "32px", color: "#444" }} />
            Bedroom
          </p>
          <div className="col-6 d-flex justify-content-end">
            <button
              type="button"
              className="custom-mat-fab text-warning"
              onClick={handleBedroomDecrement}
              disabled={bedroomCount <= 1}
            >
              -
            </button>
            <span className="counter-input-display">{bedroomCount}</span>
            <button
              className="custom-mat-fab text-warning"
              onClick={handleBedroomIncrement}
              disabled={bedroomCount >= 10}
            >
              +
            </button>
          </div>
        </div>

        {/* Bathroom Counter */}
        <div className="form-group row mt-4 mb-1">
          <p className="question-label col-6">
            <LuBath style={{ fontSize: "32px", color: "#444" }} />
            Bathroom
          </p>
          <div className="col-6 d-flex justify-content-end">
            <button
              type="button"
              className="custom-mat-fab text-warning"
              onClick={handleBathroomDecrement}
              disabled={bathroomCount <= 1}
            >
              -
            </button>
            <span className="counter-input-display">
            {formatBathroomCount(bathroomCount)}
            </span>
            <button
              className="custom-mat-fab text-warning"
              onClick={handleBathroomIncrement}
              disabled={bathroomCount >= 10}
            >
              +
            </button>
          </div>
        </div>
        <div className="form-group">
      <label className="question-label">What is the approximate size?</label>
      <select
        name="area"
        className="custom-select form-control"
        defaultValue=""
      >
        <option value="0: Object">0 — 999</option>
        <option value="1: Object">1000 — 1499</option>
        <option value="2: Object">1500 — 1999</option>
        <option value="3: Object">2000 — 2499</option>
        <option value="4: Object">2500 — 2999</option>
        <option value="5: Object">3000 — 3499</option>
        <option value="6: Object">3500 — 3999</option>
        <option value="7: Object">4000 — 4499</option>
        <option value="8: Object">4500+</option>
      </select>
    </div>
    <div className="d-flex justify-content-end gap-3">
 
     
    <Link to={'/details'}><div  className="clearfix mt-3"><button   className="float-end bg-warning  text-white btn btn-lg" onClick={handleNext} >Next </button></div> </Link>
    </div>
    
    <div className="row mt-4">
      <div className="col-12">
        <p className="alert alert-secondary text-muted" style={{ lineHeight: "14px" }}>
          <small style={{ fontSize: "10px" }}>
            By pressing 'Next' button above, I am expressing an interest in services from Naturalcare Cleaning Service. I agree to receive calls, emails, or automated text messages from Naturalcare at the contact information I have provided above. I understand I am not required to provide consent as a condition of purchasing services. Message and Data Rates May Apply. Reply Stop to Cancel. See terms and conditions
          </small>
        </p>
      </div>
    </div>
      </div>
    </div>
  );
};

export default GetStarted;

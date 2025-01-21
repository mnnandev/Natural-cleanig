import React, { useState } from "react";
import AccordionWithCheckboxes from "../components/Accordion";
import { incrementStep, decrementStep } from '../redux/features/progressBarSlice';
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

const Details = () => {
    const dispatch = useDispatch();

    const handleNext = () => {
      dispatch(incrementStep());
    };
  
    const handlePrevious = () => {
      dispatch(decrementStep());
    };
  

  const [selectedTab, setSelectedTab] = useState("One Time");  
  const [selectedOption, setSelectedOption] = useState("Get it Clean");  
  const [selectedLevel, setSelectedLevel] = useState("Level 1");

  const handleTabSelection = (event) => {
    setSelectedTab(event.target.value); 
    setSelectedOption("Get it Clean");
  };

  const handleOptionSelection = (event) => {
    setSelectedOption(event.target.value); 
  };

  // Handle selection of dirt level
  const handleLevelSelection = (event) => {
    setSelectedLevel(event.target.value); 
  };

  const levelText = {
    "Level 1": "Level 1: My home has been cleaned within the last 2 weeks. Very light to minimal buildup.",
    "Level 2": "Level 2: My home has been cleaned in the last 4 weeks. It is light to normal buildup.",
    "Level 3": "Level 3: My home has been cleaned in the last 2 months. It is normal to moderate buildup and might need some extra attention.",
    "Level 4": "Level 4: My home has not been cleaned within the last 2 month. We have some heavy buildup and need some extra attention to get it back in shape.",
    "Level 5": "Level 5: My home has not had a cleaning in a good while. It needs a lot of extra attention for Issues like extreme buildup, construction dust, or hoarding. Please help!",
  };

  return (
    <div className="row page">
      <div className="page_left col-lg-7 col-12">
        <div className="page-title">Customize your cleaning</div>
        <p className="alert alert-success">
          <strong>11 neighbors</strong> in <strong>77072</strong> already use
          Naturalcare. Join them today!
        </p>

        {/* Question for cleaning frequency */}
        <p className="question-label">How often would you like cleanings?</p>
        <div>
          {/* First Group of Radio Buttons: Cleaning Frequency */}
          <div className=" d-lg-block">
            <div className="button-group row gapX" >
              {/* Option: One Time */}
              <div className="col-12 col-sm-6 col-lg-3 pl-2 pr-2">
                <label className={selectedTab === "One Time" ? "checked" : ""}>
                  <span className="button-content">
                    <input
                      type="radio"
                      name="clean_frequency"
                      value="One Time"
                      checked={selectedTab === "One Time"}
                      onChange={handleTabSelection}
                    />
                    One Time
                  </span>
                </label>
              </div>

              {/* Option: Every Week */}
              <div className="col-12 col-sm-6 col-lg-3 pl-2 pr-2">
                <label
                  className={selectedTab === "Every Week" ? "checked" : ""}
                >
                  <span className="button-content">
                    <input
                      type="radio"
                      name="clean_frequency"
                      value="Every Week"
                      checked={selectedTab === "Every Week"}
                      onChange={handleTabSelection}
                    />
                    Every Week
                    <small className="d-block text-center">30% off</small>
                  </span>
                </label>
              </div>

              {/* Option: Every 2 Weeks */}
              <div className="col-12 col-sm-6 col-lg-3 pl-2 pr-2 best-value">
                <label
                  className={selectedTab === "Every 2 Weeks" ? "checked" : ""}
                >
                  <span className="button-content">
                    <input
                      type="radio"
                      name="clean_frequency"
                      value="Every 2 Weeks"
                      checked={selectedTab === "Every 2 Weeks"}
                      onChange={handleTabSelection}
                    />
                    Every 2 Weeks
                    <small className="d-block text-center">20% off</small>
                  </span>
                </label>
              </div>

              {/* Option: Every 4 Weeks */}
              <div className="col-12 col-sm-6 col-lg-3 pl-2 pr-2">
                <label
                  className={selectedTab === "Every 4 Weeks" ? "checked" : ""}
                >
                  <span className="button-content">
                    <input
                      type="radio"
                      name="clean_frequency"
                      value="Every 4 Weeks"
                      checked={selectedTab === "Every 4 Weeks"}
                      onChange={handleTabSelection}
                    />
                    Every 4 Weeks
                    <small className="d-block text-center">10% off</small>
                  </span>
                </label>
              </div>
            </div>
          </div>
          <p className="question-label mt-4">
            Cleaning Code: Sometimes homes need a little extra attention. Let us
            know your home's condition: (1 being best to 5 being worst)
          </p>
          <div className="button-group row justify-content-around mb-4 mx-0 gap-2">
            {["Level 1", "Level 2", "Level 3", "Level 4", "Level 5"].map(
              (level) => (
                <div
                  key={level}
                  className="col-12 col-sm-6 col-lg-2 px-0 pb-0 ng-star-inserted"
                >
                  <label
                    className={`align-middle py-3 ${selectedLevel === level ? "checked" : ""}`}
                  >
                    <span className="button-content">
                      <input
                        type="radio"
                        name="dirt_code"
                        value={level}
                        checked={selectedLevel === level}
                        onChange={handleLevelSelection}
                      />
                      {level}
                    </span>
                  </label>
                </div>
              )
            )}
          </div>
          <p className="alert alert-success">{levelText[selectedLevel]}</p>

          {/* Question for cleaning level */}
          <p className="question-label mt-4">Pick the level of your first cleaning</p>
          {selectedTab === "One Time" ? (
            // Show 4 options if "One Time" is selected
            <div className=" d-lg-block mb-4">
              <div className="button-group row justify-content-md-center">
                {/* Options specific to "One Time" */}
                {["Get it Clean", "Deep Clean", "Move In/Out", "Remodel"].map(
                  (option) => (
                    <div
                      key={option}
                      className="col-12 col-sm-6 pl-2 pr-2 pb-0 col-lg-3"
                    >
                      <label
                        className={`${
                          selectedOption === option ? "checked" : ""
                        } ${option === "Get it Clean" ? "check" : ""}`}
                      >
                        <span className="button-content">
                          <input
                            type="radio"
                            name="first_clean"
                            value={option}
                            checked={selectedOption === option}
                            onChange={handleOptionSelection}
                          />
                          {option}
                        </span>
                      </label>
                    </div>
                  )
                )}
              </div>
            </div>
          ) : selectedTab ? (
            // Show 5 options for other cleaning frequencies
            <div className=" d-lg-block mb-4">
              <div className="button-group row justify-content-md-center">
                {/* Options for other tabs */}
                {[
                  "Keep it Clean",
                  "Get it Clean",
                  "Deep Clean",
                  "Move In/Out",
                  "Remodel",
                ].map((option) => (
                  <div
                    key={option}
                    className="col-12 col-sm-6 pl-2 pr-2 pb-0 col-lg-4 gy-2"
                  >
                    <label
                      className={`${
                        selectedOption === option ? "checked" : ""
                      } ${option === "Get it Clean" ? "check" : ""}`}
                    >
                      <span className="button-content">
                        <input
                          type="radio"
                          name="first_clean"
                          value={option}
                          checked={selectedOption === option}
                          onChange={handleOptionSelection}
                        />
                        {option}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          <p  className={`alert  ${selectedOption === 'Remodel' ? 'alert-danger':'alert-success'} `}>
            {
                selectedOption === 'Get it Clean' ? 'Get it Clean Estimate - Recommended for new clients or homes that have been cleaned and maintained within the 30 days and needs a little more attention! This is for light to normal build up. If more time is needed we will contact you for approval.':''
            }
            {
                selectedOption === 'Deep Clean' ? 'Deep Clean Estimate - Recommended for extremely thorough cleaning where we hand wipe items like fans, door frames, light switches down to top and fronts of cabinets. This is like a Yearly Spring Clean and good for normal to heavy build up. This is an estimate and if more time is needed we will contact you for approval.':''
            }
            {
                selectedOption === 'Move In/Out' ? 'Move In/Out-This is our Deep Clean package that includes inside your empty cabinets, drawers and pantries.':''
            }
            {
                selectedOption === 'Keep it Clean' ? 'Keep it Clean Esimate - ONLY for homes that have a current cleaning service or have been maintained within the last two weeks. This is a light duty cleaning and if more time is needed we will contact you for approval.':''
            }
            {
                selectedOption === 'Remodel' ? 'We currently do not offer construction or post-remodel cleaning services. If your home has recently undergone remodeling, we are unable to accommodate the cleaning. Selecting Deep Cleaning for this type of service will not be valid and may result in cancellation of the appointment.':''
            }
            
            
            </p>
            <AccordionWithCheckboxes/>
            <div className="d-flex justify-content-end gap-3 mb-3">
 
     
             <Link to={'/'}> <div  className="clearfi"><button   className="float-end bg-warning  text-white btn btn-lg" onClick={handlePrevious} >back </button></div></Link>
    <Link to={'/schedule'}><div  className="clearfix "><button   className="float-end bg-warning  text-white btn btn-lg" onClick={handleNext} >Next </button></div> </Link>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

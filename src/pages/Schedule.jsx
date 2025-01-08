import React, { useState } from "react";
import {
  incrementStep,
  decrementStep,
} from "../redux/features/progressBarSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import MyDatePicker from "../components/MyDatePicker";

const Schedule = () => {
  const [activeIndex, setActiveIndex] = useState(0);  
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(incrementStep());
  };

  const handlePrevious = () => {
    dispatch(decrementStep());
  };

  const timeSlots = [
    { id: 0, label: "Flexible - 8:00am - 4:00pm" },
    { id: 1, label: "Morning - 8:00am - 12:00pm" },
    { id: 2, label: "Afternoon - 11:00am - 4:00pm" },
  ];

  return (
    <div className="row page">
      <div className="page_left col-lg-7 col-12">
        <h1 className="page-title">When would you like us to come clean?</h1>
        <p className="question-label text-pink mb-3">
          Save by booking off-peak dates and arrival windows
        </p>
        <MyDatePicker/>
        <div className="form-group col-12">
          <p className="question-label">Pick an arrival window</p>
          <ul className="list-group list-group-flush">
            {timeSlots.map((slot, index) => (
              <li
                key={slot.id}
                className={`list-group-item pointer ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {slot.label}
              </li>
            ))}
          </ul>

          <div className="d-flex justify-content-end gap-3 my-3">
            <Link to={"/details"}>
              
              <div className="clearfi">
                <button
                  className="float-end bg-warning  text-white btn btn-lg"
                  onClick={handlePrevious}
                >
                  back
                </button>
              </div>
            </Link>
            <Link to={"/checkout"}>
              <div className="clearfix ">
                <button
                  className="float-end bg-warning  text-white btn btn-lg"
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;

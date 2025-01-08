import React, { useState } from 'react';

const AccordionWithCheckboxes = () => {
  const [checkedAnswers, setCheckedAnswers] = useState(Array(7).fill(false)); // State for answer checkboxes
  const [checkedQuestion, setCheckedQuestion] = useState(false); // State for question checkbox

  // Handle clicking an answer checkbox
  const answers  = [
    'Hand-wipe Baseboards - 55',
    'Hand-wipe Shutters - 65',
    'Inside Fridge - 45',
    'Inside Oven - 45',
    'Inside Windows - 55',
    'Fridge, Oven, and Window - 130 Premium combo of our top selling addons for %10 OFF',
    'Steam Clean Floors - 75',
    'Disinfecting Fog Service - 85'
  ]
  const handleAnswerChange = (index) => {
    const updatedAnswers = [...checkedAnswers];
    updatedAnswers[index] = !updatedAnswers[index];
    setCheckedAnswers(updatedAnswers);

    // Update the question checkbox if any answer is checked
    setCheckedQuestion(updatedAnswers.some(answer => answer));
  };

  // Handle toggling question checkbox (only when clicked on answer)
  const handleQuestionChange = () => {
    // Do nothing when clicking on the question itself, this is handled by answer changes
  };

  return (
    <div className="accordion mb-3" id="accordionExample">
      {/* Accordion Item (Question) */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
            onClick={handleQuestionChange} // Open/close accordion when clicking question
            style={{ backgroundColor: 'transparent', border: 'none' }} // Custom styling
          >
            <input 
              type="checkbox" 
              checked={checkedQuestion} 
              onChange={handleQuestionChange} // Do nothing here
              className={`form-check-input me-2 ${checkedQuestion ? 'bg-green  ' : ''}`} 
              style={{
                borderRadius: '50%',
                width: '20px', 
                height: '20px', 
                transition: 'background-color 0.3s ease', 
              }} 
            />
            Select your first clean add-ons. Click for details.
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body mx-4 my-2" style={{ padding: '0px' }}>
            {/* Answer Checkboxes */}
            {answers.map((val,ind) => (
              <div 
                key={ind} 
                className={`d-flex align-items-center p-2 mb-1 ${checkedAnswers[ind] ? 'bg-pink text-white' : ''}`} 
                style={{
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                }}
                onClick={() => handleAnswerChange(ind)} // Select checkbox when clicking on the entire answer
              >
                <input 
                  type="checkbox" 
                  checked={checkedAnswers[ind]} 
                  onChange={() => handleAnswerChange(ind)} 
                  className={`form-check-input me-2 ${checkedAnswers[ind] ? 'bg-green   text-white' : ''}`} 
                  style={{
                    borderRadius: '50%', 
                    width: '20px', 
                    height: '20px', 
                    transition: 'background-color 0.3s ease', 
                    border: ' 2px solid #dc2480',
                  }}
                />
                <span> {val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionWithCheckboxes;

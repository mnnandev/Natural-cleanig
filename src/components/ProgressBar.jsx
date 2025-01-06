import React from 'react';
import { useSelector } from 'react-redux';

const ProgressBar = () => {
  // Get current step and total steps from the Redux store
  const { currentStep, totalSteps } = useSelector((state) => state.progressBar);

  // Calculate progress as a percentage
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div
      
      className="progress-bar-container"
    >
      <div
        className="progress-bar-fill"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;

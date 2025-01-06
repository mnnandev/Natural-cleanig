import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './app.css'
import { useDispatch, useSelector } from "react-redux";
import { incrementStep, decrementStep } from "./redux/features/progressBarSlice";
import GetStarted from "./pages/GetStarted";

const App = () => {
  const dispatch = useDispatch();
  const { currentStep, totalSteps } = useSelector((state) => state.progressBar);
  const handleNext = () => {
    dispatch(incrementStep());
  };

  const handlePrevious = () => {
    dispatch(decrementStep());
  };
  return (
    <>
      <Header />
      <div className="main-content page-1">
        <div className="container">
          <GetStarted/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;

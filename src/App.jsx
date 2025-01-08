import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./app.css";
 
import GetStarted from "./pages/GetStarted";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
import Schedule from "./pages/Schedule";
import Checkout from "./pages/Checkout";

const App = () => {
   
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="main-content page-1">
          <div className="container">
            <Routes>
              <Route path="/" element={ <GetStarted />}/>
              <Route path="/details" element={ <Details />}/>
              <Route path="/schedule" element={ <Schedule />}/>
              <Route path="/checkout" element={ <Checkout />}/>
             
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

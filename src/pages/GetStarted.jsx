import React, { useState } from "react";
import DianaandEllie from "../assets/DianaandEllie.png";
import { IoBedOutline } from "react-icons/io5";
import * as Yup from "yup";
import { LuBath } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { incrementStep } from "../redux/features/progressBarSlice";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const GetStarted = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      address: "",
      aptNumber: "",
      firstName: "",
      email: "",
      phoneNumber: "",
      bedrooms: 1,
      bathrooms: 1,
      size: "",
    },
    validationSchema: Yup.object({
      address: Yup.string().required("Address is required"),
      aptNumber: Yup.string(),
      firstName: Yup.string().required("First name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phoneNumber: Yup.string().required("Phone number is required"),
      bedrooms: Yup.number().min(1).max(10).required("Bedrooms are required"),
      bathrooms: Yup.number().min(1).max(10).required("Bathrooms are required"),
      size: Yup.string().required("Size is required"),
    }),
    onSubmit: (values) => {
      dispatch(incrementStep());
      navigate("/details");
      console.log('values',values)
    },
  });

  // Handlers for Bedrooms and Bathrooms
  const handleBedroomChange = (increment) => {
    const newCount = formik.values.bedrooms + increment;
    if (newCount >= 1 && newCount <= 10) {
      formik.setFieldValue("bedrooms", newCount);
    }
  };

  const handleBathroomChange = (increment) => {
    const newCount = formik.values.bathrooms + increment;
    if (newCount >= 1 && newCount <= 10) {
      formik.setFieldValue("bathrooms", newCount);
    }
  };

  return (
    <form className="row page" onSubmit={formik.handleSubmit}>
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
            <label className="text-secondary m-0" htmlFor="address">
              Address
            </label>
            <input
              id="address"
              type="text"
              className={`form-control ${
                formik.touched.address && formik.errors.address
                  ? "is-invalid"
                  : ""
              }`}
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter a location"
            />
            {formik.touched.address && formik.errors.address && (
              <div className="invalid-feedback">{formik.errors.address}</div>
            )}
          </div>

          {/* Apartment Number Input */}
          <div className="col">
            <label className="text-secondary m-0" htmlFor="aptNumber">
              Apt #
            </label>
            <input
              type="text"
              id="aptNumber"
              className="form-control"
              name="aptNumber"
              value={formik.values.aptNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.aptNumber && formik.errors.aptNumber && (
              <div className="invalid-feedback">{formik.errors.aptNumber}</div>
            )}
          </div>
        </div>
        <div className="form-group mt-1">
          <label className="text-secondary m-0" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className={`form-control ${
              formik.touched.firstName && formik.errors.firstName
                ? "is-invalid"
                : ""
            }`}
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your first name"
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div className="invalid-feedback">{formik.errors.firstName}</div>
          )}
        </div>
        <div className="form-group mt-1">
          <label className="text-secondary m-0" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className={`form-control ${
              formik.touched.email && formik.errors.email ? "is-invalid" : ""
            }`}
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your email"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="invalid-feedback">{formik.errors.email}</div>
          )}
        </div>
        <div className="form-group mt-1">
          <label className="text-secondary m-0" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            className={`form-control ${
              formik.touched.phoneNumber && formik.errors.phoneNumber
                ? "is-invalid"
                : ""
            }`}
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="(000) 000-0000"
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <div className="invalid-feedback">{formik.errors.phoneNumber}</div>
          )}
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
              onClick={() => handleBedroomChange(-1)}
              disabled={formik.values.bedrooms <= 1}
            >
              -
            </button>
            <span className="counter-input-display">
              {formik.values.bedrooms}
            </span>
            <button
              type="button"
              className="custom-mat-fab text-warning"
              onClick={() => handleBedroomChange(1)}
              disabled={formik.values.bedrooms >= 10}
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
              onClick={() => handleBathroomChange(-0.5)}
              disabled={formik.values.bathrooms <= 1}
            >
              -
            </button>
            <span className="counter-input-display">
              {formik.values.bathrooms}
            </span>
            <button
              type="button"
              className="custom-mat-fab text-warning"
              onClick={() => handleBathroomChange(0.5)}
              disabled={formik.values.bathrooms >= 10}
            >
              +
            </button>
          </div>
        </div>

        {/* Size Select */}
        <div className="form-group">
          <label className="question-label">What is the approximate size?</label>
          <select
            name="size"
            className={`custom-select form-control ${
              formik.touched.size && formik.errors.size ? "is-invalid" : ""
            }`}
            value={formik.values.size}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select size</option>
            <option value="0">0 — 999</option>
            <option value="1">1000 — 1499</option>
            <option value="2">1500 — 1999</option>
            <option value="3">2000 — 2499</option>
            <option value="4">2500 — 2999</option>
            <option value="5">3000 — 3499</option>
            <option value="6">3500 — 3999</option>
            <option value="7">4000 — 4499</option>
            <option value="8">4500+</option>
          </select>
          {formik.touched.size && formik.errors.size && (
            <div className="invalid-feedback">{formik.errors.size}</div>
          )}
        </div>

        {/* Submit Button */}
        <div className="d-flex justify-content-end gap-3">
          <button
            className="float-end bg-warning text-white btn btn-lg my-3"
            type="submit"
          >
            Next
          </button>
        </div>
      </div>
    </form>
  );
};

export default GetStarted;

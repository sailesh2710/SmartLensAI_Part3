import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const handleGoToPricing = () => {
    navigate("/pricing"); // This will navigate to the Pricing page
  };
  return (
    <div class="container col-xxl-9 px-4 py-4">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src="https://assets1.chainstoreage.com/s3fs-public/2024-09/daily-shop-produce-2.jpg?VersionId=JLmQfFy597v6FFYLEyIxGUK2uzE_7PEZ"
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3">
            Revolutionizing the Retail Experience with Advanced Visual Analytics
          </h1>
          <div class="d-grid gap-2 d-md-flex justify-content-md-center">
            <button
              type="button"
              class="btn btn-primary btn-lg px-4 me-md-2"
              onClick={handleGoToPricing}
            >
              Get Started
            </button>
            <a
              href="https://www.youtube.com/watch?v=964Y0FUqIwY&t=11s"
              class="btn btn-outline-secondary btn-lg px-4"
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

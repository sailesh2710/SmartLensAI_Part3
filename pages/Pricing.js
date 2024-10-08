// src/components/Pricing.js
import React from "react";
import "./Pricing.css";
import { useNavigate } from "react-router-dom";

function Pricing() {
  const navigate = useNavigate();
  const handleGoToPricing = () => {
    navigate("/pricing"); // This will navigate to the Pricing page
  };

  const handleGoToContactUs = () => {
    navigate("/contact"); // This will navigate to the contact page
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">SmartLens AI Plans</h1>
      <p className="lead text-center">
        Choose the plan that best suits your business needs.
      </p>

      {/* Basic Plan */}
      <div className="row justify-content-center my-4">
        <div className="col-md-6">
          <div className="card pricing-card shadow-sm mb-4">
            <div className="card-header text-center">
              <h3>Basic</h3>
              <p>$99 / month</p>
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li>Real-time Inventory Tracking</li>
                <li>Basic Customer Analytics</li>
                <li>Email Support</li>
              </ul>
              <button
                type="button"
                class="btn btn-outline-primary"
                onClick={handleGoToPricing}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pro Plan */}
      <div className="row justify-content-center my-4">
        <div className="col-md-6">
          <div className="card pricing-card shadow-sm mb-4">
            <div className="card-header text-center">
              <h3>Pro</h3>
              <p>$199 / month</p>
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li>Advanced Customer Behavior Analytics</li>
                <li>AI-Powered Inventory Management</li>
                <li>Priority Email Support</li>
                <li>Monthly Performance Reports</li>
              </ul>
              <button
                type="button"
                class="btn btn-outline-primary"
                onClick={handleGoToPricing}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enterprise Plan */}
      <div className="row justify-content-center my-4">
        <div className="col-md-6">
          <div className="card pricing-card shadow-sm mb-4">
            <div className="card-header text-center">
              <h3>Enterprise</h3>
              <p>Contact Us for Pricing</p>
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li>Fully Customized Solutions</li>
                <li>Dedicated AI Specialist</li>
                <li>24/7 Support</li>
                <li>On-Site Training & Consultation</li>
              </ul>
              <button
                type="button"
                class="btn btn-outline-primary"
                onClick={handleGoToContactUs}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

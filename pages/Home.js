// src/components/Home.js
import React from "react";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import "./Home.css"; // Optional for custom styles

function Home() {
  return (
    <div>
      <HeroSection />
      <HowItWorks />

      {/* Features Section */}
      <section id="features" className="container my-5">
        <h2 className="text-center mb-5">Our Key Features</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="feature-card">
              <img
                src="https://www.datasciencecentral.com/wp-content/uploads/2022/03/Automated-Inventry-Management-System.png"
                alt="Feature 1"
                className="img-fluid mb-3"
                width="350"
                height="350"
              />
              <h3>Automated Inventory Tracking</h3>
              <p>
                Using in-store cameras to monitor shelves in real-time,
                SmartLens AI detects stockouts or misplaced items and notifies
                staff for prompt action.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card">
              <img
                src="https://www.mhcautomation.com/wp-content/uploads/2020/12/How-to-Conduct-Customer-Behavior-Analysis-Social-Media.png"
                alt="Feature 2"
                className="img-fluid mb-3"
                width="350"
                height="350"
              />
              <h3>Customer Behavior Analytics</h3>
              <p>
                Analyze customer movements and preferences within retail stores,
                enabling businesses to optimize product placement and improve
                sales strategies.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyuW3DJr_2v4QcDlQWEMDpefOnY3xp-esOuw&s"
                alt="Feature 3"
                className="img-fluid mb-3"
                width="350"
                height="350"
              />
              <h3>AI-Powered Security</h3>
              <p>
                Our advanced AI algorithms monitor and identify suspicious
                activities, enhancing in-store security with real-time alerts
                for potential threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container my-5">
        <h2 className="text-center mb-5">What Our Clients Say</h2>
        <blockquote className="blockquote text-center">
          <p>
            "SmartLens AI transformed our retail store by automating inventory
            tracking, and our sales have increased by 15%."
          </p>
          <footer className="blockquote-footer">
            John Doe, Retail Manager
          </footer>
        </blockquote>
        <blockquote className="blockquote text-center">
          <p>
            "The customer behavior analytics helped us redesign our store layout
            for better product visibility. Incredible results!"
          </p>
          <footer className="blockquote-footer">Jane Smith, Store Owner</footer>
        </blockquote>
      </section>
    </div>
  );
}

export default Home;

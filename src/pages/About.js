import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "../styles/globalStyles.css";

const About = () => {
  return (
    <div className="landing-page">
      <div className="herosection-e-aboutUs">
        <Header />
        <div className="about-page">
          <div className="header-overlay">
            <h1>About us</h1>
          </div>
        </div>
      </div>
      <div className="about-story">
        <div className="story-image">
          <img src="/images/Image.png" alt="Our Story" />
        </div>
        <div className="story-content">
          <h2>Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla.
          </p>
          <button className="get-started-button">Get Started</button>
        </div>
      </div>

      <div className="partners-section">
        <h2>Our Partners</h2>
        <div className="partners-list">
          <button className="partner-button">2020INC</button>
          <button className="partner-button">THE PMAY</button>
          <button className="partner-button">Arise Health</button>
        </div>
      </div>
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>How can I pay for your logistics services?</h3>
          <p>Payment options include cash, credit card, and other methods.</p>
        </div>
        <div className="faq-item">
          <h3>What payment methods are supported?</h3>
          <p>
            We accept various forms of payment, including online payment
            methods.
          </p>
        </div>
        <div className="faq-item">
          <h3>Do you have different pricing for large clients?</h3>
          <p>Yes, we offer special pricing for large orders.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;

import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "../styles/globalStyles.css";

const Contact = () => {
  return (
    <div className="landing-page">
      <div className="herosection-e-aboutUs">
        <Header />
        <div className="about-page">
          <div className="header-overlay">
            <h1>Contact</h1>
          </div>
        </div>
      </div>
      <div className="testimonial-column-light">
        <div className="text-11">Testimonial section</div>
        <div className="testimonial-content">
          <div className="testimonial-card">
            <p>
              “Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat.”
            </p>
            <div className="author">
              <img src="/images/Image_6.png" alt="Author" />
              <div>
                <h4>Author Name</h4>
                <p>VP of Company</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p>
              “Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat.”
            </p>
            <div className="author">
              <img src="/images/Image_7.png" alt="Author" />
              <div>
                <h4>Author Name</h4>
                <p>VP of Company</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p>
              “Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat.”
            </p>
            <div className="author">
              <img src="/images/Image_8.png" alt="Author" />
              <div>
                <h4>Author Name</h4>
                <p>VP of Company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

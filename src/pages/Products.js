import React from "react";
import "../styles/globalStyles.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Products = () => {
  return (
    <div className="landing-page">
      <div className="herosection-e-aboutUs">
        <Header />
        <div className="about-page">
          <div className="header-overlay">
            <h1>Our Products</h1>
          </div>
        </div>
      </div>
      <div className="team-circles">
        <div className="container-2">
          <div className="columns">
            {/* Card 1 */}
            <div className="card">
              <div className="image-wrapper-2">
                <img
                  src="https://uploads-ssl.webflow.com/66bedb35bcc767bc5d766e6f/66bedc935ad2f3752076e7db_Vectors-Wrapper.svg"
                  loading="lazy"
                  width="100"
                  height="100"
                  alt="Fresh Bake Icon"
                  className="vectors-wrapper-2"
                />
              </div>
              <div className="content">
                <div className="info">
                  <div className="text-5">Fresh Bake</div>
                  <div className="text-6">Everyday</div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card">
              <div className="image-wrapper-2">
                <img
                  src="https://uploads-ssl.webflow.com/66bedb35bcc767bc5d766e6f/66bedc94bd4916eac8ec8871_Vectors-Wrapper.svg"
                  loading="lazy"
                  width="100"
                  height="100"
                  alt="Free Delivery Icon"
                  className="vectors-wrapper-2"
                />
              </div>
              <div className="content">
                <div className="info">
                  <div className="text-5">Free Delivery</div>
                  <div className="text-6">Clients</div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card">
              <div className="image-wrapper-3">
                <img
                  src="https://uploads-ssl.webflow.com/66bedb35bcc767bc5d766e6f/66bedc943dd85e40d2e86c7e_Vectors-Wrapper.svg"
                  loading="lazy"
                  width="100"
                  height="100"
                  alt="Croissants Icon"
                  className="vectors-wrapper-2"
                />
              </div>
              <div className="content">
                <div className="info">
                  <div className="text-5">Croissants</div>
                  <div className="text-6">Fresh</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;

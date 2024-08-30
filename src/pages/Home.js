import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "../styles/globalStyles.css";

const Home = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <Header />
        <div className="hero-content">
          <h1 className="hero-title">Title Copy Goes Here Be Awesome</h1>
          <p className="hero-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <button className="hero-button">GET STARTED</button>
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

      <div className="hero-heading-right">
        <div className="container">
          <div className="column-3">
            <div className="image-wrapper-4">
              <img src="/images/Image.png" className="image" />
            </div>
          </div>
          <div className="column-4">
            <div className="text-7">Title Copy Goes Here Be Awesome</div>
            <div className="text-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </div>
            <div className="button-2">
              <div className="text-9">Get started</div>
            </div>
          </div>
        </div>
      </div>

      <div className="gallery-overview">
        <div className="columns-2">
          <div className="column-5">
            <div className="content-2">
              <div className="list-items">
                <div className="text-10">Our Handmade Baked Range</div>
                <div className="description">
                  A selection of our finest products
                </div>
              </div>
            </div>
          </div>
          <div className="small-columns">
            <div className="column-6">
              <div className="image-wrapper-5">
                <div className="image_wrapper">
                  <div className="image-2">
                    <div className="image_1">Breads, Rolls &amp; Bagels</div>
                  </div>
                </div>
              </div>
              <div className="image-wrapper-5">
                <div className="image_wrapper">
                  <div className="image-3">
                    <div className="image_1">Slices &amp; Treats</div>
                  </div>
                </div>
              </div>
              <div className="image-wrapper-5">
                <div className="image_wrapper">
                  <div className="image-4">
                    <div className="image_1">Cakes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="small-columns">
            <div className="column-6">
              <div className="image-wrapper-5">
                <div className="image_wrapper">
                  <div className="image-5">
                    <div className="image_1">Croissants, Danish</div>
                  </div>
                </div>
              </div>
              <div className="image-wrapper-5">
                <div className="image_wrapper">
                  <div className="image-6">
                    <div className="image_1">Scones</div>
                  </div>                  
                </div>
              </div>
              <div className="image-wrapper-5">
                <div className="image_wrapper">
                  <div className="image-7">
                    <div className="image_1">Other Products</div>
                  </div>
                  
                </div>
              </div>
            </div>
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

      <div className="testimonial-column-light">
        <div className="div-block">
          <div className="imageBlock">
            <img src="/images/Image_9.png" className="image" />
          </div>

          <div className="content-4">
            <div className="text-14">
              <h2 className="text-15">Why Us?</h2>
              <p className="text-16">
                “Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat.”
              </p>
            </div>
            <div className="features">
              <div className="_1">
                <div className="_1-2">
                  <img
                    src="https://uploads-ssl.webflow.com/66bedb35bcc767bc5d766e6f/66bedd5bb7a568e701b6a22d_Vectors-Wrapper.svg"
                    loading="lazy"
                    width="63"
                    height="63"
                    alt="Finance Available"
                    className="vectors-wrapper-3"
                  />
                  <div className="text-17">Finance Available</div>
                </div>
                <div className="_2">
                  <img
                    src="https://uploads-ssl.webflow.com/66bedb35bcc767bc5d766e6f/66bedd5ced0b7d05cf7b08af_Vectors-Wrapper.svg"
                    loading="lazy"
                    width="63"
                    height="63"
                    alt="Brochures"
                    className="vectors-wrapper-3"
                  />
                  <div className="text-17">Brochures</div>
                </div>
              </div>
              <div className="_2-2">
                <div className="_2-3">
                  <img
                    src="https://uploads-ssl.webflow.com/66bedb35bcc767bc5d766e6f/66bedd5cd85522bc322e899b_Vectors-Wrapper.svg"
                    loading="lazy"
                    width="63"
                    height="63"
                    alt="All year Supply"
                    className="vectors-wrapper-3"
                  />
                  <div className="text-17">All year Supply</div>
                </div>
                <div className="_4">
                  <img
                    src="https://uploads-ssl.webflow.com/66bedb35bcc767bc5d766e6f/66bedd5ded0b7d05cf7b0970_Vectors-Wrapper.svg"
                    loading="lazy"
                    width="63"
                    height="63"
                    alt="In Time Delivery"
                    className="vectors-wrapper-3"
                  />
                  <div className="text-17">In Time Delivery</div>
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

export default Home;

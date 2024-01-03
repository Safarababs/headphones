import React, { useState } from "react";
import "./Accordion.css"; // Import your CSS file or define styles within the component
import product from "../images/final/1.png";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <h2 className="title">What People Asks From Us</h2>
      <p>
        Catch answers to common queries effortlessly in our Frequently Asked
        Questions (FAQ) section. Browse through our curated list of responses
        addressing popular inquiries about our products, services, and more.
        Simplify your experience and find instant solutions, allowing you to
        make informed decisions and get the most out of your journey with us
      </p>
      <div className="box-container">
        <div className="image">
          <img src={product} alt=""></img>
        </div>

        <div className="accordion-container">
          <div className={`accordion ${activeIndex === 0 ? "active" : ""}`}>
            <button onClick={() => handleAccordionClick(0)}>
              What makes BeatUp headphones stand out?
            </button>
            <div
              className="panel"
              style={{ maxHeight: activeIndex === 0 ? "1000px" : "0" }}
            >
              <p>
                BeatUp headphones are meticulously crafted with cutting-edge
                technology and premium materials, ensuring an unparalleled blend
                of superior sound quality and long-lasting comfort. Our
                dedication to innovation elevates your listening experience to
                new heights.
              </p>
            </div>
          </div>
          <div className={`accordion ${activeIndex === 1 ? "active" : ""}`}>
            <button onClick={() => handleAccordionClick(1)}>
              Are BeatUp headphones suitable for different activities?
            </button>
            <div
              className="panel"
              style={{ maxHeight: activeIndex === 1 ? "1000px" : "0" }}
            >
              <p>
                Yes, BeatUp headphones are designed to adapt to various
                lifestyles. Whether you're immersed in intense workouts,
                enjoying leisurely walks, or focused on work, our headphones
                provide exceptional sound quality and a secure fit for every
                moment.
              </p>
            </div>
          </div>
          <div className={`accordion ${activeIndex === 2 ? "active" : ""}`}>
            <button onClick={() => handleAccordionClick(2)}>
              How does BeatUp ensure customer satisfaction?
            </button>
            <div
              className="panel"
              style={{ maxHeight: activeIndex === 2 ? "1000px" : "0" }}
            >
              <p>
                Customer satisfaction is at the core of our mission. We offer a
                dedicated 24/7 customer support team ready to assist with any
                inquiries or issues. Additionally, our commitment extends beyond
                the purchase, providing a seamless experience from selection to
                usage.
              </p>
            </div>
          </div>

          <div className={`accordion ${activeIndex === 3 ? "active" : ""}`}>
            <button onClick={() => handleAccordionClick(3)}>
              Do BeatUp headphones provide noise-canceling features?
            </button>
            <div
              className="panel"
              style={{ maxHeight: activeIndex === 3 ? "1000px" : "0" }}
            >
              <p>
                Yes, our headphones are equipped with advanced noise-canceling
                technology, allowing you to immerse yourself fully in your music
                without external disruptions, providing an oasis of pure sound.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;

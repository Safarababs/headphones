import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>why choose us?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            libero ea repellendus aut commodi, sequi praesentium! Neque aliquam
            excepturi quas.
          </p>
        </div>

        <div className="box">
          <h3>quick links</h3>
          <a href="#">home</a>
          <a href="#">about</a>
          <a href="#">features</a>
          <a href="#">products</a>
          <a href="#">contact</a>
          <a href="#">FAQ</a>
        </div>

        <div className="box">
          <h3>contact us</h3>
          <p>
            {" "}
            <i className="fas fa-map-marker-alt"></i> bhera, pakistan 40540.{" "}
          </p>
          <p>
            {" "}
            <i className="fas fa-globe"></i> www.yourwebiste.com{" "}
          </p>
          <p>
            {" "}
            <i className="fas fa-phone"></i> +123-456-7890.{" "}
          </p>
        </div>
      </div>

      <h1 className="credit">
        {" "}
        created by <a href="#">mr. safar abbas</a> | all rights reserved.{" "}
      </h1>
    </section>
  );
};

export default Footer;

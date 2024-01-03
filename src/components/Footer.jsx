import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Why Choose BeatUp?</h3>
          <p>
            Skip the ordinary, embrace the BeatUp. Don't settle for headphones
            that cower at life's volume. Choose BeatUp, where rugged meets
            rhythm, where durability dances with immersive sound. These aren't
            just headphones, they're partners in your sonic adventures, built to
            take a beating and keep pumping out anthems for your soul. Whether
            you're scaling mountains or conquering concrete jungles, BeatUp
            fuels your hustle with audio that rocks as hard as you do. Dive
            deeper, push louder, experience sound that takes a beating and keeps
            singing your story. Welcome to the BeatUp revolution.
          </p>
        </div>

        <div className="box">
          <h3>quick links</h3>
          <a href="https://safarababs.github.io/safarweb/">home</a>
          <a href="https://safarababs.github.io/safarweb/">about</a>
          <a href="https://safarababs.github.io/safarweb/">features</a>
          <a href="https://safarababs.github.io/safarweb/">products</a>
          <a href="https://safarababs.github.io/safarweb/">contact</a>
          <a href="https://safarababs.github.io/safarweb/">FAQ</a>
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
        created by{" "}
        <a href="https://safarababs.github.io/safarweb/">mr. safar abbas</a> |
        all rights reserved.{" "}
      </h1>
    </section>
  );
};

export default Footer;

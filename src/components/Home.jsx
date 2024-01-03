import React from "react";
import homeImage from "./images/final/1.png";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <h1>best quality products for you</h1>
        <p>
          Life's loud. Your headphones shouldn't be afraid of it. BeatUp
          headphones are built tough, engineered for sound, and ready to
          soundtrack your every adventure.
        </p>
        <a href="https://safarababs.github.io/safarweb/">
          <button className="btn">order now</button>
        </a>
      </div>
      <div className="image">
        <img src={homeImage} alt="" />
      </div>
    </section>
  );
};

export default Home;

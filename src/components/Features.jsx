import React from "react";


const Features = () => {
  return (
    <section className="features" id="features">
      <h1 className="heading">product features</h1>
      <h1 className="title">new and outstanding features</h1>
      <p className="description">
        Immerse in unparalleled sound with adaptive noise cancellation, extended
        battery life, and seamless connectivity. Experience comfort and
        innovation, tailored for an elevated listening journey with us at
        beatUp.
      </p>

      <div className="box-container">
        <div className="box">
          <i className="fas fa-wifi"></i>
          <h3>wireless facility</h3>
          <p>
            Experience freedom like never before with our wireless headphones.
            Embrace untethered convenience, seamless connectivity, and
            uninterrupted music, allowing you to move effortlessly while
            enjoying your favorite tunes. Cut the cords and immerse yourself in
            a world of wireless audio, redefining the way you experience music.
          </p>
        </div>

        <div className="box">
          <i className="fas fa-music"></i>
          <h3>hight quality sound</h3>
          <p>
            Indulge your senses in the pinnacle of audio excellence. Our
            headphones deliver uncompromising high-quality sound, characterized
            by crisp highs, rich mids, and powerful lows. Immerse yourself in a
            premium sonic experience that captures every nuance and detail of
            your favorite music, elevating your auditory journey to new heights.
          </p>
        </div>

        <div className="box">
          <i className="fas fa-gamepad"></i>
          <h3>easy control buttons</h3>
          <p>
            Simplify your experience with intuitive control buttons at your
            fingertips. Effortlessly manage your music, calls, and settings with
            our easy-to-use control interface. Stay in command while on the
            move, allowing for seamless adjustments and convenience, all within
            reach for an uninterrupted audio adventure.
          </p>
        </div>

        <div className="box">
          <i className="fas fa-headset"></i>
          <h3>24 x 7 service</h3>
          <p>
            Experience peace of mind with our round-the-clock service
            commitment. Our dedicated support team is available 24/7, ensuring
            assistance and guidance whenever you need it. From troubleshooting
            to inquiries, we're here every hour, every day, ensuring your
            satisfaction and uninterrupted enjoyment of our products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;

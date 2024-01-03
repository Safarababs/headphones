import React from "react";
import beat1 from "./images/final/2.png";
import beat3 from "./images/final/3.png";
import beat4 from "./images/final/4.png";
import beat5 from "./images/final/5.png";
import beat6 from "./images/final/6.png";
import beat7 from "./images/final/7.png";
import beat8 from "./images/final/8.png";
import beat9 from "./images/final/1.png";

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="title">about us</h1>

      <p className="description">
        Welcome to BeatUp, where our love for music fuels our passion to craft
        unparalleled headphones. Founded on the idea of delivering exceptional
        audio experiences, we've embarked on a journey of innovation and
        expertise
      </p>

      <div className="box-container">
        <div className="box">
          <div class="image">
            <img src={beat5} alt=""></img>
          </div>
          <div className="content">
            <h3>Crafting Sonic Excellence</h3>
            <p>
              At BeatUp, we blend cutting-edge technology with artisanal
              craftsmanship to create headphones that redefine sound quality and
              comfort. From our noise-canceling features to our carefully
              selected materials, each element is meticulously chosen to elevate
              your music experience.
            </p>
          </div>
        </div>

        <div className="box">
          <div class="image">
            <img src={beat3} alt=""></img>
          </div>

          <div className="content">
            <h3>Immersive Beats</h3>
            <p>
              Our commitment to quality goes beyond manufacturing—it's a
              dedication to our customers. We take pride in providing not just
              headphones but a gateway to immersive soundscapes that resonate
              with every beat.
            </p>
          </div>
        </div>

        <div className="box">
          <div class="image">
            <img src={beat4} alt=""></img>
          </div>
          <div className="content">
            <h3>Embark on a Musical Quest</h3>
            <p>
              Driven by our love for music and our desire to offer the best, we
              continue to push the boundaries of headphone design. Join us on
              this melodic journey, and let BeatUp headphones be your companion
              in every musical adventure.
            </p>
          </div>
        </div>

        <div className="box">
          <div class="image">
            <img src={beat1} alt=""></img>
          </div>

          <div className="content">
            <h3>BeatUp, Beyond Headphones</h3>
            <p>
              BeatUp isn't just headphones, it's a way of life. We're for the
              ones who hustle, the ones who chase their dreams with grit and
              passion. We understand the rhythm of the streets, the pulse of the
              underground, and we craft headphones that soundtrack your
              authentic journey. From the concrete jungle to the open road,
              BeatUp keeps your vibe pumping with raw, unfiltered sound.
            </p>
          </div>
        </div>

        <div className="box">
          <div class="image">
            <img src={beat6} alt=""></img>
          </div>
          <div className="content">
            <h3>Boldness and Experimentation:</h3>
            <p>
              We don't follow trends, we set them. At BeatUp, we're constantly
              pushing the boundaries of what headphones can do. We experiment
              with cutting-edge technology, unconventional materials, and daring
              designs – all in the pursuit of the perfect listening experience.
              Dive into a world of immersive sound with BeatUp, where innovation
              meets your wildest sonic dreams.
            </p>
          </div>
        </div>

        <div className="box">
          <div class="image">
            <img src={beat7} alt=""></img>
          </div>
          <div className="content">
            <h3>Underdog Spirit</h3>
            <p>
              The big brands might have the budget, but we have the heart.
              BeatUp is fueled by a passion for music and a belief that everyone
              deserves access to exceptional sound. We cut through the noise of
              overpriced audio gear and deliver studio-quality performance at a
              price that won't break the bank. Join the BeatUp revolution and
              unleash your own sonic masterpiece.
            </p>
          </div>
        </div>

        <div className="box">
          <div class="image">
            <img src={beat8} alt=""></img>
          </div>
          <div className="content">
            <h3>Resilience</h3>
            <p>
              BeatUp headphones weren't born in a sterile lab. They were forged
              in the fire of everyday life, tested on bustling city streets and
              rugged mountain trails. We believe your headphones should keep up
              with you, no matter how hard you push them. That's why BeatUp is
              built to take a beating and keep delivering crystal-clear sound,
              every step of the way.
            </p>
          </div>
        </div>

        <div className="box">
          <div class="image">
            <img src={beat9} alt=""></img>
          </div>
          <div className="content">
            <h3>Redefining the Soundscape </h3>
            <p>
              Share your vision for pushing the boundaries of sound technology,
              experimenting with innovative features and unconventional designs.
              Feature interviews with your engineers and designers, explain your
              unique materials or software, and showcase collaborations with
              innovative musicians or audio producers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import "./Hero.css";
import heroImg from "../../assets/imges/hero.png";

const Hero = () => {
  return (
    <section>
      <div className="HeroContainer">
        <div>
          <img src={heroImg} alt="img" className="imgContainer" />
        </div>
        <div className="heroCintentStyle">
          <p className="contentStyle">Welcome to Little Learners Academy</p>
          <h2 className="heroTitleStyle">
            Where Young Minds Blossom and{" "}
            <p className="parStyle">Dreams Take Flight.</p>{" "}
          </h2>
          <p className="txtStyle">
            Our kinder garden school provides a nurturing and stimulating
            environment, fostering a love for learning that lasts a lifetime.
            Join us as we embark on an exciting educational journey together!
          </p>
          <div className="heroBox">
            <div className="totalBox">
              <div className="boxStyling">
                <p className="numStyle">+7000</p>
                <p className="parStyleHero">Students Passed Out</p>
              </div>
              <div className="boxStyling">
                <p className="numStyle">+37</p>
                <p className="parStyleHero">Awards & Recognitions</p>
              </div>
              <div className="boxStyling">
                <p className="numStyle">+15</p>
                <p className="parStyleHero">Experience Educators</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";

export default function Hero() {
  return (
    <>
      <div className="container">
        <div className="row hero-sec mt-0 mt-lg-5">
          <div className="col-md-6 hero-txt">
            <h1>
              Is it really easy to earn{" "}
              <span className="main-color">money online?</span>
            </h1>
            <p>
              Today, a lot of people are looking for how to make money <br className="br-hide" />
              online. But, unfortunately, <b> it is not easy to earn online</b>
              <br className="br-hide" /> without having any IT skill.
            </p>
            <div className="mt-lg-5">
              <a href="#quest" className="hero-buttn">
                Explore more
              </a>
            </div>
          </div>
          <div className="col-md-6">
          <div className="thumbnail">
            
            <div className="picture1">
              <img
                className="img-fluid"
                src="assets/img/hero-p.png"
                alt="..."
              />
             
            </div>
            <div className="picture2">
              <img
                className="img-fluid"
                src="assets/img/hero.png"
                alt=""
              />
            </div>
            
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

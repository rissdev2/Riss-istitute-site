import React from "react";

export default function Hero() {
  return (
    <>
      <div className="container">
        <div className="row hero-sec">
          <div className="col-md-6 hero-txt">
            <h1>
              Is it really easy to earn{" "}
              <span className="main-color">money online?</span>
            </h1>
            <p>
              Today, a lot of people are looking for how to make money <br />
              online. But, unfortunately, <b> it is not easy to earn online</b>
              <br /> without having any IT skill.
            </p>
            <div className="mt-lg-5">
              <a href="#quest" className="hero-buttn">
                Explore more
              </a>
            </div>
          </div>
          <div className="col-md-6">
          <div className="thumbnail">
            
            <div class="picture1">
              <img
                class="img-fluid"
                src="assets/img/hero-p.png"
                alt="..."
              />
             
            </div>
            <div class="picture2">
              <img
                class="img-fluid"
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

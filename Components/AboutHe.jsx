import React from "react";

export default function AboutHe() {
  return (
    <>
      <div className="container">
        <div className="row abt-ht">
          <div className="col-md-6">
            <h1>Let’ts get to know each other</h1>
          </div>
          <div className="col-md-6">
            <img src="assets/img/about-h.svg" className="d-none d-md-block img-fluid" alt="" />
            <img src="assets/img/about.svg" className="d-block d-md-none img-fluid" alt="" />
          </div>
        </div>
        <div className="row abt-ht">
            <div className="col-md-4"></div>
            <div className="col-md-8">
                <p>Basically, we started RISS a couple of years ago. And today with the passage of time we grew up so strong in our IT services with years of marketplace working experience. Now we started the RISS training institute to teach the generation with our professional and IT Field experience and expertise in a different field. Our aim is to provide the best IT Tranings and share our experience with students at a minimal amount of charge and best way possible by giving them extra hours and helping them in every way possible.</p>
            </div>
        </div>
      </div>
    </>
  );
}

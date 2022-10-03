import React from "react";
import PgForm from "./PgForm";

export default function Graphic() {
  return (
    <>
      <div className="container">
        <div className="row gr-sec">
          <div className="col-md-7">
            <h1>
              Graphic <span className="main-color">Designing</span>{" "}
            </h1>
            <h3>Course Overview</h3>
            <p>
              This course is intended to foster areas of strength for the
              understudies for growing strong visual communications.
              Understudies will figure out how to picture the ideas, techniques
              of design and application of software like Adobe Photoshop ,
              Illustrator{" "}
            </p>
            <h3>Brief Contents</h3>
            <ul>
              <li>Essentials of graphics, design and color theory</li>
              <li>Photoshop Intro, working with selections and layers</li>
              <li>Using masks and channels</li>
              <li>Working with type and vector tools</li>
              <li>Adjusting and processing photographs</li>
              <li>Retouching and manipulating images</li>
              <li>Working in Adobe Camera Raw</li>
              <li>Painting and filtering an image</li>
              <li>Create Facebook ads and cover</li>
              <li>Create Info Graphics Designs</li>
              <li>Working with Illustrator documents</li>
              <li>Drawing and transforming objects</li>
              <li>Managing color and transparency</li>
              <li>Typography and using type in Illustrator</li>
              <li>Controlling effects, appearances, and graphic style</li>
              <li>Building graphic objects and working with images</li>
              <li>Preparing graphics for web or mobile</li>
              <li>Website or mobile app ui design</li>
              <li>Prototyping & wireframes in figma</li>
            </ul>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4">
          <div className="crd-dat">
            <h2>Course fee</h2>
            <div className="row">
              <div className="col-6">
                <p>Seat Reservation</p>
                <p>Monthly fee</p>
                <h5>Total fee</h5>
              </div>
              <div className="col-6 text-end">
                <h5>5,000</h5>
                <h5>8,000</h5>
                <h5>53,000</h5>
              </div>
            </div>
            <h2>Duration & Frequency</h2>
            <p>6 months ( 180 days with 3 training sessions of 1 hour a week )</p>
            <h2>Skills you will have after</h2>
            <p>Adobe photoshop expert , Adobe illustrator expert , Figma designer , Portfolio Design , Website & App Design </p>
            <h1>have any query?</h1>
          <PgForm />
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

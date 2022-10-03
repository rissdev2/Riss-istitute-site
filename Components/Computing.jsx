import React from "react";
import PgForm from "./PgForm";

export default function Computing() {
  return (
    <>
      <div className="container">
        <div className="row gr-sec">
          <div className="col-md-7">
            <h1>
              Basic <span className="main-color">Computing</span>{" "}
            </h1>
            <h3>Course Overview</h3>
            <p>
            You will learn the basic parts of a computer and hardware and Software like Microsoft word , Excel 2007: Introduction, Workbook, Worksheet, Formatting in excel , MS PowerPoint and much more.
            </p>
            <h3>Brief Contents</h3>
            <ul>
              <li> Introduction, Characteristics of a Computer</li>
              <li>Applications of Computers</li>
              <li> Basic Components of PC</li>
              <li>Classification of Computers</li>
              <li>Computer Architecture</li>
              <li>Introduction, Classification of Number System</li>
              <li>Hardware and Software</li>
              <li>Windows XP</li>
              <li> MS Word: Introduction, Windows 2007 Interface</li>
              <li>Excel 2007: Introduction, Workbook, Worksheet, Formatting in excel</li>
              <li>MS PowerPoint: Introduction, Creating a Presentation, Basic Formatting in PowerPoint,</li>
              <li>Security and Networking</li>
             
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
                <h5>5,000</h5>
                <h5>15,000</h5>
              </div>
            </div>
            <h2>Duration & Frequency</h2>
            <p>2 months ( 60 days with 3 training sessions of 1 hour a week )</p>
            <h2>Skills you will have after</h2>
            <p>Expert in common usage of computer</p>
            <h1>have any query?</h1>
          <PgForm />
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

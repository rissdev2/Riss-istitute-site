import React from "react";
import PgForm from "./PgForm";

export default function DesktopApp() {
  return (
    <>
      <div className="container">
        <div className="row gr-sec">
          <div className="col-md-7">
            <h1>
              Desktop <span className="main-color">App Development</span>{" "}
            </h1>
            <h3>Course Overview</h3>
            <p>
            This extensive course is designed to provide good understanding of Desktop app development using latest versions of Java, C#, Orcale, SQL Server. Desktop application development is a type of software programming that creates computer programs to be run on the desktop.
            </p>
            <h3>Brief Contents</h3>
            <ul>
            <li>Students will be able to create desktop applications (Software).</li>
            <li>Students will be able to design desktop applications</li>
            <li>Student will be able to freelance for small businesses</li>
            <li>Discover the concepts behind Java Games Development</li>
            <li>Learn the main stages of Game Development</li>
            <li>Understand the packages used for GUI (Graphical User Interfaces) applications</li>
            <li>Learn the theory of Java programming with Swing and AWT</li>
            <li>Develop cross-platform desktop applications from scratch without copy/paste code</li>
            <li>Build distributable desktop applications for Windows, Mac and Linux</li>
            <li>Use operating system native features with a single code base</li>
            <li>Apply coding patterns specific for building desktop applications</li>
            <li>Sell multi-platform applications in Mac App Store</li>
            <li>Sell multi-platform application in Microsoft Windows Store</li>
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
                  <h5>12,000</h5>
                  <h5>77,000</h5>
                </div>
              </div>
              <h2>Duration & Frequency</h2>
              <p>
                6 months ( 180 days with 3 training sessions of 1 hour a week )
              </p>
              <h2>Skills you will have after</h2>
              <p>
              Good understanding of HTTPS , API/SDK design , Experience in modern cross-platform toolsets
              </p>
              <h1>have any query?</h1>
              <PgForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

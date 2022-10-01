import React from "react";
import PgForm from "./PgForm";

export default function Development() {
  return (
    <>
      <div className="container">
        <div className="row gr-sec">
          <div className="col-md-7">
            <h1>
              Web <span className="main-color">Development</span>{" "}
            </h1>
            <h3>Course Overview</h3>
            <p>
              Web development can range from developing a simple single static
              page of plain text to complex web applications, electronic
              businesses, and social network services.It may, however, also
              include web design, web programming, and database management.
            </p>
            <h3>Brief Contents</h3>
            <ul>
              <li>Introduction to programming language C & C++</li>
              <li>Conditions of C & C++</li>
              <li>Introduction to website design</li>

              <li>
                Creating Responsive Web Design using HTML5, CSS3, JavaScript &
                Angular
              </li>
              <li>
                Setting Development Environment for PHP using Xammp & Netbeans
              </li>
              <li>
                Introduction to PHP 7, Basics PHP syntax & Conditional
                Statements
              </li>
              <li>Introduction Web Development, HTML, HTML5 & IDEs</li>
              <li>
                Basics of HTML & CSS and HTML Headings, Paragraphs & Images
              </li>
              <li>
                HTML Text Formatting, Links, Entities and Inline vs Block Level
                Elements
              </li>
              <li>JavaScript Statements, Expressions, Conditions and Loops</li>
              <li>
                Defining Classes, Methods, Constructors & Access Modifiers
              </li>
              <li>Method Overloading, Recursion, Native Methods & Packages</li>
              <li>Full-stack development</li>
              <li>
                Installation, Command line and development environment setup
              </li>
            </ul>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <div className="crd-dat">
              <h2>Course fee</h2>
              <div className="row">
                <div className="col-md-6">
                  <p>Seat Reservation</p>
                  <p>Monthly fee</p>
                  <h5>Total fee</h5>
                </div>
                <div className="col-md-6 text-end">
                  <h5>5,000</h5>
                  <h5>10,000</h5>
                  <h5>65,000</h5>
                </div>
              </div>
              <h2>Duration & Frequency</h2>
              <p>
                6 months ( 180 days with 3 training sessions of 1 hour a week )
              </p>
              <h2>Skills you will have after</h2>
              <p>
              Website design ,  Java Script Expert
Grip on  C++, HTML, PHP. Bootstrap integration , Jquery & data bases.
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

import React from "react";
import PgForm from "./PgForm";

export default function DigitalMark() {
  return (
    <>
      <div className="container">
        <div className="row gr-sec">
          <div className="col-md-7">
            <h1>
              Digital<span className="main-color">marketing</span>{" "}
            </h1>
            <h3>Course Overview</h3>
            <p>
            Digital Marketing is necessary for a business or a marketing professional. Digital Marketing is a broad concept and includes various channels like Search Engine Optimization, Search Engine Marketing, Email Marketing, Social Media Marketing.
            </p>
            <h3>Brief Contents</h3>
            <ul>
              <li>SEO or Search Engine Optimization</li>
              <li>Learn SEO Tools to do effective Competition Analysis</li>
              <li>Learn On-page & Off-page SEO Audit Plans</li>
              <li>Understand the evolution of Social Media Channels</li>
              <li>Go through relevant Social Media Stats and Trends (in India & Abroad)</li>
              <li>Understand Social Media Marketing via Social Media Success Stories</li>
              <li>Understand the basics of Twitter Marketing</li>
              <li>Know what is Hashtag, how to create Twitter Trends</li>
              <li>Create a Twitter Marketing Strategy</li>
              <li>What is Email Marketing</li>
              <li>Email Marketing Case Studies</li>
              <li>Content Marketing is what makes everything possible in digital marketing practices.</li>
              <li>Content Marketing Basics and Overview</li>
              <li>How Content benefits Business multifold Revenues</li>
              <li>Know how to Organize and Tag Your Content</li>
              <li>How to Build an Audience</li>
              <li>SEO dashboard</li>
              <li>Content dashboard</li>
              <li>Website performance dashboard</li>
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
                  <h5>7,000</h5>
                  <h5>26,000</h5>
                </div>
              </div>
              <h2>Duration & Frequency</h2>
              <p>
              3 months ( 90 days with 3 training sessions of 1 hour a week )
              </p>
              <h2>Skills you will have after</h2>
              <p>
              Data Analysis , Content Creation , SEO & SEM
Communication Skills , Basic Design Skills
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

import React from "react";
import PgForm from "./PgForm";

export default function VirtualAssistant() {
  return (
    <>
      <div className="container">
        <div className="row gr-sec">
          <div className="col-md-7">
            <h1>
              Virtual<span className="main-color"> Assistant</span>{" "}
            </h1>
            <h3>Course Overview</h3>
            <p>
            In this training you will be trained to  worker as a self-employed person who specializes in offering administrative services including answering emails, scheduling meetings, and handling social profiles for clients from a remote location, usually a home office. 
            </p>
            <h3>Brief Contents</h3>
            <ul>
              <li>Get training on how to handle the most frequently requested tasks.</li>
              <li>Help ensure your work is standardized and consistently high quality.</li>
              <li>Hone yours skills in research, travel, calendar management, and much more!</li>
              <li>Learn how to set your business policies, including hours of operation and scope of work.</li>
              <li>Learn how to identify ideal clients and their pain points.</li>
              <li>Learn how to market your services on social media.</li>
              <li>Learn a simple but powerful tool to pitch clients online.</li>
              <li>Learn about how to set your business up for success, includes the tools to get you started, tax entities, and insurance.</li>
              <li>Learn about the most mistakes first time VA's make and how to avoid them.</li>
              <li>Skills and tools you need to be a successful professional virtual assistant</li>
              <li>How to set your price and market yourself to your ideal clients/employers (find the best jobs)</li>
              <li>Email, chat, phone support and social media management tools and skills</li>
              <li>Organizational, management, productivity and time management best practices</li>
              <li>How to ace your interviews and get the best jobs</li>
              <li>How to manage your workload working from home and be your own boss</li>
              <li>Virtual assistant self care and work-life balance</li>
              <li>Skip the "building" part of running a VA business and get to work! Use my pre-made spreadsheets and documents so you can work faster.</li>
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
                <h5>5,000</h5>
                <h5>15,000</h5>
              </div>
            </div>
            <h2>Duration & Frequency</h2>
            <p>2 months ( 60 days with 3 training sessions of 1 hour a week )</p>
            <h2>Skills you will have after</h2>
            <p>Communication Skill , Project Managment , Time Managment , IT Skills , Social Media Managment</p>
            <h1>have any query?</h1>
          <PgForm />
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

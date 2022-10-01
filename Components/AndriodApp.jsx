import React from "react";
import PgForm from "./PgForm";

export default function AndriodApp() {
  return (
    <>
      <div className="container">
        <div className="row gr-sec">
          <div className="col-md-7">
            <h1>
              Andriod <span className="main-color">App Development</span>{" "}
            </h1>
            <h3>Course Overview</h3>
            <p>
            This extensive course is designed to provide good understanding of Android mobile app development using latest versions of Java SE, Android SDK, Android Studio and FireBase. A typical Android app is designed for a smartphone or a tablet PC running on the Android OS.
            </p>
            <h3>Brief Contents</h3>
            <ul>
              <li>Introduction to Java & Android Mobile App Development</li>
              <li>Fundamentals of Java Programming using Java 8</li>
              <li>Object Oriented Programming using Java</li>
              <li>Exceptions & Collections & Generics</li>
              <li>Installation & Configuration of Android SDK & Android Studio</li>
              <li>Android Mobile App Development Architecture & Application Life Cycle</li>
              <li>Android Views, Layouts, Activities, Fragments, List View & View Pages</li>
              <li>Activities, Intents, Services, Content Providers & Broadcast Receivers</li>
              <li>Android Resources, Styles, Themes & Material Design</li>
              <li>Integrating Social Media in Mobile Apps for Android</li>
              <li>Dialogs, Toasts, Menus, Context Menus, Popup Menus & Web View</li>
              <li>Store/Retrieve Data in/from Shared Preference & Files (Internal & SD Card)</li>
              <li>Store/Retrieve Data in/from SQLite Database & Content Providers </li>
              <li>Using FireBase for storing and retrieving data from cloud</li>
              <li>Using FireBase to authenticate users in your Mobile App</li>
             
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
              Certified Android App Developer , Android UI , Firebase on Android , Android foundations
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

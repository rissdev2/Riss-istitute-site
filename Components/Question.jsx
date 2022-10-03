import React from "react";
import Link from 'next/link'
export default function Question() {
  return (
    <>
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-md-6 qut-txt ">
            <div className="sticky-lg-top">
              <br className="br-hide" />
              <br className="br-hide" />
              <br className="br-hide" />
              <br className="br-hide" />
              
              <h1>
                Don t worry we ve{" "}
                <span className="main-color">got your back </span>{" "}
              </h1>
              <h3>Get started with 4 simple steps to unroll expert course</h3>
              <p>
                We will make your online earning journey smooth with our
                tailored courses.{" "}
              </p>
              <p>
                Our courses are designed to help you reach your goals and
                certainly help you in one way or the other,{" "}
                <span className="main-color">
                  weather its earning through selling the skills or making your
                  own resource utilizing those abilities.
                </span>
              </p>
              <div className="mt-5">
                <Link href="/Contct">
                   <a  className="hero-buttn">
                  Have question?
                </a></Link>
               
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5 ">
          <br className="br-hide" />
          <br className="br-hide" />
          <br className="br-hide" />
          <br className="br-hide" />
          <br className="br-hide" />
          <img src="assets/img/1.svg" className="mt-5 mt-lg-0 img-fluid" alt="" />
          <br className="br-hide" />
          <br className="br-hide" />
          <br className="br-hide" />
          <br className="br-hide" />
          <br className="br-hide" />
          <img src="assets/img/2.svg" className="mt-5 mt-lg-0 img-fluid" alt="" />
          <br className="br-hide" />
          <br className="br-hide" />
          <br className="br-hide" />
          <br className="br-hide" />
          <br className="br-hide" />
          <img src="assets/img/3.svg" className="mt-5 mt-lg-0 img-fluid" alt="" />
          <br className="br-hide" />
          <br className="br-hide" />
          <br className="br-hide" />
          <br className="br-hide" />
          <br className="br-hide" />
          <img src="assets/img/4.svg" className="mt-5 mt-lg-0 img-fluid" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
